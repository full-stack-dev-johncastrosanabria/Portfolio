import type { Language, LocalizedString, LocalizedStringArray } from '@/types';

export function localizedValue(value: LocalizedString, language?: string): string;
export function localizedValue(value: LocalizedStringArray, language?: string): string[];
export function localizedValue(
  value: LocalizedString | LocalizedStringArray,
  language: string = 'es',
): string | string[] {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return value;
  }

  const normalizedLanguage = language === 'en' ? 'en' : 'es';
  return value[normalizedLanguage as Language] ?? value.es ?? value.en ?? '';
}
