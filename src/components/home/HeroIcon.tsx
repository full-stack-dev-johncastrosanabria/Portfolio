interface HeroIconProps {
  name: 'folder' | 'document' | 'download' | 'youtube' | 'github';
}

export function HeroIcon({ name }: HeroIconProps) {
  if (name === 'github') {
    return <img src={`${import.meta.env.BASE_URL}github-mark.svg`} alt="" />;
  }

  if (name === 'youtube') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8Z" />
        <path d="m10.2 15.4 5-3.4-5-3.4v6.8Z" fill="currentColor" />
      </svg>
    );
  }

  if (name === 'download') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3a1.4 1.4 0 0 1 1.4 1.4v7.1l2.1-2.1a1.4 1.4 0 1 1 2 2L13 15.9a1.4 1.4 0 0 1-2 0l-4.5-4.5a1.4 1.4 0 0 1 2-2l2.1 2.1V4.4A1.4 1.4 0 0 1 12 3Z" />
        <path d="M5.4 18.2c0-.8.6-1.4 1.4-1.4h10.4a1.4 1.4 0 1 1 0 2.8H6.8c-.8 0-1.4-.6-1.4-1.4Z" />
      </svg>
    );
  }

  if (name === 'document') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.8 2.5h6.5L19 8.2v13.3H6.8A1.8 1.8 0 0 1 5 19.7V4.3a1.8 1.8 0 0 1 1.8-1.8Zm6 1.8v4.4h4.4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8.5 12h7M8.5 15.5h7M8.5 8.5h2.8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6.3c0-1 .8-1.8 1.8-1.8h5l1.8 2.2h7.6c1 0 1.8.8 1.8 1.8v9.2c0 1-.8 1.8-1.8 1.8H4.8c-1 0-1.8-.8-1.8-1.8V6.3Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M3 9h18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
