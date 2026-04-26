import { useEffect } from 'react';

interface MetaTagsConfig {
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

/**
 * Hook para actualizar el título del documento
 */
export function useDocumentTitle(title: string, suffix = ' | John Castro Sanabria') {
  useEffect(() => {
    const fullTitle = title ? `${title}${suffix}` : 'John Castro Sanabria - Full Stack Developer';
    document.title = fullTitle;

    // Actualizar meta tag og:title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    }
  }, [title, suffix]);
}

/**
 * Hook para actualizar meta tags
 */
export function useMetaTags(config: MetaTagsConfig = {}) {
  useEffect(() => {
    const {
      description,
      image,
      url,
      type = 'website',
    } = config;

    // Description
    if (description) {
      let descMeta = document.querySelector('meta[name="description"]');
      if (!descMeta) {
        descMeta = document.createElement('meta');
        descMeta.setAttribute('name', 'description');
        document.head.appendChild(descMeta);
      }
      descMeta.setAttribute('content', description);

      // OG Description
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (!ogDesc) {
        ogDesc = document.createElement('meta');
        ogDesc.setAttribute('property', 'og:description');
        document.head.appendChild(ogDesc);
      }
      ogDesc.setAttribute('content', description);
    }

    // Image
    if (image) {
      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
      ogImage.setAttribute('content', image);
    }

    // URL
    if (url) {
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrl);
      }
      ogUrl.setAttribute('content', url);
    }

    // Type
    if (type) {
      let ogType = document.querySelector('meta[property="og:type"]');
      if (!ogType) {
        ogType = document.createElement('meta');
        ogType.setAttribute('property', 'og:type');
        document.head.appendChild(ogType);
      }
      ogType.setAttribute('content', type);
    }
  }, [config]);
}

/**
 * Hook para agregar structured data (JSON-LD)
 */
export function useStructuredData(data: unknown) {
  useEffect(() => {
    if (!data) return;

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }, [data]);
}
