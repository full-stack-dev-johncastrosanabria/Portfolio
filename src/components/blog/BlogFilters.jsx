import { useTranslation } from 'react-i18next';

export function BlogFilters({
  search,
  onSearchChange,
  selectedTag,
  onTagChange,
  availableTags,
}) {
  const { t } = useTranslation();

  return (
    <div className="filters-panel">
      <label className="field">
        <span>{t('blog.search')}</span>
        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={t('blog.searchPlaceholder')}
        />
      </label>

      <label className="field">
        <span>{t('blog.tag')}</span>
        <select value={selectedTag} onChange={(event) => onTagChange(event.target.value)}>
          <option value="all">{t('blog.all')}</option>
          {availableTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
