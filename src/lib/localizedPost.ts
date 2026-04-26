import { postTranslations } from '@/data/postTranslations';
import type { PostTranslation } from '@/data/postTranslations';
import { localizedValue } from '@/lib/localized';
import type { BlogPost, Language, LocalizedBlogPost } from '@/types';

export function getLocalizedPost(post: BlogPost, language: string = 'es'): LocalizedBlogPost {
  const normalizedLanguage: Language = language === 'en' ? 'en' : 'es';
  const translation: Partial<PostTranslation> = postTranslations[normalizedLanguage]?.[post.id] ?? {};

  return {
    ...post,
    title: translation.title ?? localizedValue(post.title, language),
    excerpt: translation.excerpt ?? localizedValue(post.excerpt, language),
    content: translation.content ?? localizedValue(post.content, language),
    tags: translation.tags ?? localizedValue(post.tags, language),
  };
}
