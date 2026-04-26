import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Tag } from '@/components/common/Tag';
import { formatDate } from '@/lib/utils';
import type { LocalizedBlogPost } from '@/types';

interface BlogCardProps {
  post: LocalizedBlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const { t } = useTranslation();

  return (
    <article className="blog-card">
      <div className="blog-card-top">
        <p className="blog-meta">
          <span>{formatDate(post.publishedAt)}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
          <span>•</span>
          <span>{post.source === 'firebase' ? 'Firebase' : 'Local'}</span>
        </p>
        <h3>{post.title}</h3>
        <p className="muted">{post.excerpt}</p>
      </div>

      <div className="tag-group">
        {post.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <Link className="button button-secondary" to={`/blog/${post.slug}`}>
        {t('blog.readArticle')}
      </Link>
    </article>
  );
}
