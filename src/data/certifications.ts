import type { Certification } from '@/types';

export const certifications: Certification[] = [
  {
    id: 'oci-enterprise-ai',
    title: {
      es: 'Oracle Cloud Infrastructure Certified Enterprise AI Professional',
      en: 'Oracle Cloud Infrastructure Certified Enterprise AI Professional',
    },
    issuer: 'Oracle',
    issuedAt: {
      es: '20 de noviembre de 2026',
      en: 'November 20, 2026',
    },
    category: {
      es: 'IA empresarial en la nube',
      en: 'Enterprise AI on cloud',
    },
    credentialId: '333494080OCI26EAIOCP',
    status: {
      es: 'Activa · vigente hasta el 20 de noviembre de 2028',
      en: 'Active · valid until November 20, 2028',
    },
    image: 'certifications/oci-enterprise-ai.jpg',
    featured: true,
  },
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
    id: 'ulacit-licenciatura',
    title: {
      es: 'Licenciatura en Ingeniería Informática con énfasis en Desarrollo de Software',
      en: 'Licentiate in Computer Engineering, Software Development emphasis',
    },
    issuer: 'ULACIT',
    issuedAt: {
      es: '11 de setiembre de 2025',
      en: 'September 11, 2025',
    },
    category: {
      es: 'Grado universitario',
      en: 'University degree',
    },
    status: {
      es: 'Carrera acreditada por SINAES',
      en: 'SINAES-accredited program',
    },
    image: 'certifications/ulacit-licenciatura.webp',
  },
  {
    id: 'ulatina-bachillerato',
    title: {
      es: 'Bachillerato en Ingeniería de Sistemas Computacionales',
      en: 'Bachelor’s degree in Computer Systems Engineering',
    },
    issuer: 'Universidad Latina de Costa Rica',
    issuedAt: {
      es: '12 de diciembre de 2022',
      en: 'December 12, 2022',
    },
    category: {
      es: 'Grado universitario',
      en: 'University degree',
    },
    status: {
      es: 'Carrera acreditada por SINAES',
      en: 'SINAES-accredited program',
    },
    image: 'certifications/ulatina-bachillerato.webp',
  },
  {
    id: 'dp-800',
    title: {
      es: 'Microsoft DP-800: SQL AI Developer Associate',
      en: 'Microsoft DP-800: SQL AI Developer Associate',
    },
    issuer: 'Microsoft',
    issuedAt: {
      es: 'Pendiente: en preparación',
      en: 'Pending: in preparation',
    },
    category: {
      es: 'Datos e IA',
      en: 'Data and AI',
    },
    status: {
      es: 'En progreso',
      en: 'In progress',
    },
    image: 'certifications/dp-800.svg',
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
    image: 'certifications/commercial-skills.webp',
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
    image: 'certifications/data-science.webp',
  },
];
