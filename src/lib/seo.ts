/**
 * SEO utilities for meta tags and structured data
 */

interface MetaConfig {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

interface StructuredDataConfig {
  name?: string;
  description?: string;
  image?: string;
  url?: string;
  email?: string;
  sameAs?: string[];
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export const generateMetaTags = (config: MetaConfig) => {
  const {
    title = 'John Castro Sanabria - Full Stack Developer',
    description = 'Full Stack Developer especializado en .NET, React y arquitectura limpia',
    image = '/public/brand-mark.svg',
    url = 'https://portafolio.netlify.app',
    type = 'website',
  } = config;

  return {
    title,
    description,
    image,
    url,
    type,
    og: {
      title,
      description,
      image,
      url,
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image,
    },
  };
};

export const generateStructuredData = (config: StructuredDataConfig) => {
  const {
    name = 'John Castro Sanabria',
    description = 'Full Stack Developer',
    image = '/public/profile-john.png',
    url = 'https://portafolio.netlify.app',
    email = 'castrosanabriajohn2@gmail.com',
    sameAs = [],
  } = config;

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    description,
    image,
    url,
    email,
    sameAs,
    jobTitle: 'Full Stack Developer',
    knowsAbout: ['.NET', 'React', 'JavaScript', 'C#', 'SQL Server', 'Azure', 'Clean Architecture'],
  };
};

export const generateBreadcrumbs = (items: BreadcrumbItem[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};
