import { Link, useParams } from 'react-router-dom';
import { EmptyState } from '@/components/common/EmptyState';
import { Tag } from '@/components/common/Tag';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { formatDate, slugMatches } from '@/lib/utils';

function renderMarkdownLikeContent(content) {
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
  const { posts, isLoading } = useBlogPosts();

  const post = posts.find((currentPost) => slugMatches(currentPost, slug));

  useDocumentTitle(post ? `Portafolio | ${post.title}` : 'Portafolio | Artículo');

  if (isLoading) {
    return (
      <section className="section">
        <div className="container">
          <p>Cargando artículo...</p>
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="section">
        <div className="container">
          <EmptyState
            title="Artículo no encontrado"
            description="El contenido que buscas no existe o fue movido."
          />
          <Link className="button" to="/blog">
            Volver al blog
          </Link>
        </div>
      </section>
    );
  }

  const blocks = renderMarkdownLikeContent(post.content);
  const listBuffer = [];
  const normalizedBlocks = [];

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
          ← Volver al blog
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
