import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EmptyState } from '@/components/common/EmptyState';
import { Tag } from '@/components/common/Tag';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { getLocalizedPost } from '@/lib/localizedPost';
import { formatDate, slugMatches } from '@/lib/utils';
import type { ReactElement } from 'react';

function renderMarkdownLikeContent(content: string): ReactElement[] {
  return content
    .trim()
    .split('\n')
    .filter(Boolean)
    .map((line, index) => {
      if (line.startsWith('## ')) {
        return <h2 key={`${line}-${index}`}>{line.replace('## ', '')}</h2>;
      }

      if (line.startsWith('- ')) {
        return (
          <li key={`${line}-${index}`}>
            {line.replace('- ', '')}
          </li>
        );
      }

      if (/^\d+\.\s/.test(line)) {
        return (
          <li key={`${line}-${index}`}>
            {line.replace(/^\d+\.\s/, '')}
          </li>
        );
      }

      return <p key={`${line}-${index}`}>{line}</p>;
    });
}

export function PostDetailPage() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;
  const { posts, isLoading } = useBlogPosts();

  const rawPost = posts.find((currentPost) => slugMatches(currentPost, slug));
  const post = rawPost ? getLocalizedPost(rawPost, language) : null;

  useDocumentTitle(post ? `Portafolio | ${post.title}` : 'Portafolio | Artículo');

  if (isLoading) {
    return (
      <section className="section">
        <div className="container">
          <p>{t('blog.loadingArticle')}</p>
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="section">
        <div className="container">
          <EmptyState
            title={t('blog.articleNotFoundTitle')}
            description={t('blog.articleNotFoundDescription')}
          />
          <Link className="button" to="/blog">
            {t('blog.backToBlog')}
          </Link>
        </div>
      </section>
    );
  }

  const blocks = renderMarkdownLikeContent(post.content);
  const listBuffer: ReactElement[] = [];
  const normalizedBlocks: ReactElement[] = [];

  blocks.forEach((block, index) => {
    if (block.type === 'li') {
      listBuffer.push(block);
      const next = blocks[index + 1];
      if (!next || next.type !== 'li') {
        normalizedBlocks.push(
          <ul key={`list-group-${index}`} className="bullet-list article-list">
            {listBuffer.splice(0, listBuffer.length)}
          </ul>,
        );
      }
    } else {
      normalizedBlocks.push(block);
    }
  });

  return (
    <section className="section">
      <div className="container article-container">
        <Link className="text-link" to="/blog">
          {'<'} {t('blog.backToBlog')}
        </Link>

        <article className="article-card">
          <p className="blog-meta">
            <span>{formatDate(post.publishedAt)}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </p>

          <h1>{post.title}</h1>
          <p className="article-lead">{post.excerpt}</p>

          <div className="tag-group">
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <div className="article-content">{normalizedBlocks}</div>
        </article>
      </div>
    </section>
  );
}
