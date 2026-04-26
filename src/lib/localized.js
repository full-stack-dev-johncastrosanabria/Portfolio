export function localizedValue(value, language = 'es') {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return value;
  }

  return value[language] ?? value.es ?? value.en ?? '';
}
