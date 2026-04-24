import { Link } from 'react-router-dom';
import { Tag } from '@/components/common/Tag';
import { formatDate } from '@/lib/utils';

export function BlogCard({ post }) {
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
        Leer artículo
      </Link>
    </article>
  );
}
