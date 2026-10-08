import type { ProfessionalPhoto as Photo } from '@/types';
import { publicAsset } from '@/lib/assets';
import { localizedValue } from '@/lib/localized';

export function ProfessionalPhoto({ photo, language }: Readonly<{ photo: Photo; language: string }>) {
  const caption = localizedValue(photo.caption, language);
  return (
    <figure className="professional-photo">
      <a href={publicAsset(photo.src)} target="_blank" rel="noopener noreferrer" aria-label={caption}>
        <img src={publicAsset(photo.src)} width={photo.width} height={photo.height} alt={caption} loading="lazy" decoding="async" />
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
