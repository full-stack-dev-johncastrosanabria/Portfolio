export function BlogFilters({
  search,
  onSearchChange,
  selectedTag,
  onTagChange,
  availableTags,
}) {
  return (
    <div className="filters-panel">
      <label className="field">
        <span>Buscar</span>
        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Ej. ASP.NET Core, React, Clean Architecture..."
        />
      </label>

      <label className="field">
        <span>Etiqueta</span>
        <select value={selectedTag} onChange={(event) => onTagChange(event.target.value)}>
          <option value="all">Todas</option>
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
