import { postTranslations } from '@/data/postTranslations';
import { localizedValue } from '@/lib/localized';

export function getLocalizedPost(post, language = 'es') {
  const translation = postTranslations[language]?.[post.id] ?? {};

  return {
    ...post,
    title: translation.title ?? localizedValue(post.title, language),
    excerpt: translation.excerpt ?? localizedValue(post.excerpt, language),
    content: translation.content ?? localizedValue(post.content, language),
    tags: translation.tags ?? localizedValue(post.tags, language),
  };
}
