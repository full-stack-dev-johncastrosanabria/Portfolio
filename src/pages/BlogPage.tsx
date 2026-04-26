import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogFilters } from '@/components/blog/BlogFilters';
import { EmptyState } from '@/components/common/EmptyState';
import { Loader } from '@/components/common/Loader';
import { SectionTitle } from '@/components/common/SectionTitle';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { getLocalizedPost } from '@/lib/localizedPost';

type BlogFiltersState = {
  search?: string;
  tag?: string;
};

export function BlogPage() {
  useDocumentTitle('Portafolio | Blog técnico .NET');
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;

  const { posts, isLoading, error } = useBlogPosts();
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search') ?? '';
  const selectedTag = searchParams.get('tag') ?? 'all';
  const localizedPosts = useMemo(
    () => posts.map((post) => getLocalizedPost(post, language)),
    [posts, language],
  );

  const availableTags = useMemo(
    () =>
      [...new Set(localizedPosts.flatMap((post) => post.tags))].sort((current, next) =>
        current.localeCompare(next, language),
      ),
    [localizedPosts, language],
  );

  const filteredPosts = useMemo(() => {
    return localizedPosts.filter((post) => {
      const matchesSearch =
        !search ||
        [post.title, post.excerpt, post.content, post.tags.join(' ')]
          .join(' ')
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [localizedPosts, search, selectedTag]);

  function updateFilters(nextFilters: BlogFiltersState) {
    const nextParams = new URLSearchParams(searchParams);

    Object.entries(nextFilters).forEach(([key, value]) => {
      if (!value || value === 'all') {
        nextParams.delete(key);
      } else {
        nextParams.set(key, value);
      }
    });

    setSearchParams(nextParams);
  }

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow={t('sections.blogEyebrow')}
          title={t('blog.title')}
          description={t('blog.description')}
        />

        <BlogFilters
          search={search}
          onSearchChange={(value) => updateFilters({ search: value })}
          selectedTag={selectedTag}
          onTagChange={(value) => updateFilters({ tag: value })}
          availableTags={availableTags}
        />

        {error ? <p className="helper-text">{error}</p> : null}

        {isLoading ? <Loader label={t('blog.loading')} /> : null}

        {!isLoading && filteredPosts.length === 0 ? (
          <EmptyState
            title={t('blog.emptyTitle')}
            description={t('blog.emptyDescription')}
          />
        ) : null}

        <div className="card-grid blog-grid">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
