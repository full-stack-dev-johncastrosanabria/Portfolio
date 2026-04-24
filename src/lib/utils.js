/**
 * Formatea una fecha al formato español
 */
export function formatDate(dateString) {
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateString));
}

/**
 * Compara un post con un slug
 */
export function slugMatches(post, slug) {
  return post.slug === slug;
}

/**
 * Convierte un string a slug
 */
export function stringToSlug(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Calcula el tiempo de lectura estimado
 */
export function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min`;
}

/**
 * Trunca un texto a una longitud específica
 */
export function truncateText(text, length = 150) {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + '...';
}

/**
 * Valida un email
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Copia texto al portapapeles
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Error al copiar:', err);
    return false;
  }
}

/**
 * Obtiene el color de una categoría
 */
export function getCategoryColor(category) {
  const colors = {
    'Backend': 'bg-blue-500',
    'Frontend': 'bg-purple-500',
    'Full Stack': 'bg-green-500',
    'Mobile': 'bg-orange-500',
    'DevOps': 'bg-red-500',
    'Data Access': 'bg-cyan-500',
    'Testing': 'bg-pink-500',
    'Architecture': 'bg-indigo-500',
    'Best Practices': 'bg-yellow-500',
  };
  return colors[category] || 'bg-gray-500';
}

/**
 * Agrupa items por una propiedad
 */
export function groupBy(items, key) {
  return items.reduce((acc, item) => {
    const group = item[key];
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(item);
    return acc;
  }, {});
}

/**
 * Ordena items por una propiedad
 */
export function sortBy(items, key, order = 'asc') {
  return [...items].sort((a, b) => {
    if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
    return 0;
  });
}

/**
 * Filtra items por múltiples criterios
 */
export function filterItems(items, filters) {
  return items.filter(item => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      if (Array.isArray(item[key])) {
        return item[key].some(v => v.toLowerCase().includes(value.toLowerCase()));
      }
      return item[key].toString().toLowerCase().includes(value.toLowerCase());
    });
  });
}
