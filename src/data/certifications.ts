import type { Certification } from '@/types';

export const certifications: Certification[] = [
  {
    id: 'az-900',
    title: {
      es: 'Microsoft Certified: Azure Fundamentals',
      en: 'Microsoft Certified: Azure Fundamentals',
    },
    issuer: 'Microsoft',
    issuedAt: {
      es: '30 de enero de 2026',
      en: 'January 30, 2026',
    },
    category: {
      es: 'Cloud fundamentals',
      en: 'Cloud fundamentals',
    },
    credentialId: '407DBE67BFC78ED5',
    certificationNumber: 'DBD678-318E1C',
    status: {
      es: 'Activa',
      en: 'Active',
    },
    image: 'certifications/az-900.png',
    featured: true,
  },
  {
    id: 'ms-900',
    title: {
      es: 'Microsoft 365 Certified: Fundamentals',
      en: 'Microsoft 365 Certified: Fundamentals',
    },
    issuer: 'Microsoft',
    issuedAt: {
      es: '6 de julio de 2025',
      en: 'July 6, 2025',
    },
    category: {
      es: 'Productividad y Microsoft 365',
      en: 'Productivity and Microsoft 365',
    },
    credentialId: '1C458F347531B23',
    certificationNumber: 'E2Y3C0-A961A5',
    status: {
      es: 'Activa',
      en: 'Active',
    },
    image: 'certifications/ms-900.png',
    featured: true,
  },
  {
    id: 'commercial-skills',
    title: {
      es: 'Desarrollo de habilidades comerciales',
      en: 'Commercial skills development',
    },
    issuer: 'RD Consultores & Asociados / Novacomp',
    issuedAt: {
      es: 'Enero de 2026',
      en: 'January 2026',
    },
    category: {
      es: 'Preventa y ciclo de ventas',
      en: 'Pre-sales and sales cycle',
    },
    hours: '8 h',
  },
  {
    id: 'data-science',
    title: {
      es: 'Programa de Data Science',
      en: 'Data Science program',
    },
    issuer: 'Mundos E / Universidad Nacional de Córdoba',
    issuedAt: {
      es: '11 de agosto de 2022',
      en: 'August 11, 2022',
    },
    category: {
      es: 'Data Science',
      en: 'Data Science',
    },
    hours: '181 h',
  },
];
