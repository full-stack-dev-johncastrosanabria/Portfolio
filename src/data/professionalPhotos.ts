import type { ProfessionalPhoto } from '@/types';

export const professionalPhotos: Record<string, ProfessionalPhoto> = {
  team: { src: 'professional/team-office.webp', width: 1153, height: 1280, caption: { es: 'Encuentro con el equipo en la oficina', en: 'Meeting with the team at the office' } },
  event: { src: 'professional/professional-event.webp', width: 964, height: 1280, caption: { es: 'Participación en un encuentro profesional', en: 'Taking part in a professional event' } },
  publication: { src: 'professional/innovative-publication.webp', width: 1170, height: 776, caption: { es: 'Innovative: transformación digital del sector financiero', en: 'Innovative: digital transformation in the financial sector' } },
  graduation: { src: 'professional/ulacit-graduation.webp', width: 1130, height: 1500, caption: { es: 'Graduación en ULACIT', en: 'Graduation at ULACIT' } },
};
