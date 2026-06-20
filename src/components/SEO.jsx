import { useEffect, useMemo } from 'react';

const defaultSEO = {
  title: 'BSPX Studio | Photography & Video – Coimbatore | Serving All India',
  description: 'Professional photography and cinematic reels studio based in Coimbatore, serving clients across India. Book your portrait, birthday, couple, baby, wedding, or event shoot today.',
  canonical: 'https://bspx-website.vercel.app/',
  image: 'https://bspx-website.vercel.app/og-image.png',
};

const SEO = ({
  title,
  description,
  canonical,
  image,
  noIndex = false,
  noFollow = false,
  location = 'Coimbatore',
  keywords,
  author = 'BSPX Studio',
}) => {
  // useMemo to prevent unnecessary recalculations
  const seoData = useMemo(() => ({
    title: title || defaultSEO.title,
    description: description || defaultSEO.description,
    canonical: canonical || defaultSEO.canonical,
    image: image || defaultSEO.image,
    keywords: keywords || 'photography, videography, cinematic reels, Coimbatore photographer, wedding photography, portrait photography, birthday shoots, couple shoots, baby shoots, event photography, pre-wedding shoots, model shoots, photo frames, highlight edits',
    author: author || 'BSPX Studio',
    location: location || 'Coimbatore',
  }), [title, description, canonical, image, keywords, author, location]);

  // useMemo for meta tags to prevent recreation on every render
  const metaTags = useMemo(() => [
    { name: 'description', content: seoData.description },
    { name: 'title', content: seoData.title },
    { name: 'keywords', content: seoData.keywords },
    { name: 'author', content: seoData.author },
    { property: 'og:title', content: seoData.title },
    { property: 'og:description', content: seoData.description },
    { property: 'og:url', content: seoData.canonical },
    { property: 'og:image', content: seoData.image },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'BSPX Studio' },
    { property: 'og:locale', content: 'en_IN' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: seoData.title },
    { name: 'twitter:description', content: seoData.description },
    { name: 'twitter:image', content: seoData.image },
  ], [seoData]);

  // useMemo for GEO tags
  const geoTags = useMemo(() => [
    { name: 'geo.region', content: 'IN-TN' },
    { name: 'geo.placename', content: seoData.location },
    { name: 'geo.position', content: '11.0168;76.9558' },
    { name: 'ICBM', content: '11.0168, 76.9558' },
    { name: 'location', content: 'lat=11.0168;long=76.9558' },
  ], [seoData.location]);

  // useMemo for robots content
  const robotsContent = useMemo(() => {
    if (noIndex && noFollow) return 'noindex, nofollow';
    if (noIndex) return 'noindex, follow';
    if (noFollow) return 'index, nofollow';
    return 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large';
  }, [noIndex, noFollow]);

  // useMemo for JSON-LD Schema
  const schema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'BSPX Studio',
    alternateName: 'BSPX Photography Studio',
    url: 'https://bspx-website.vercel.app/',
    logo: 'https://bspx-website.vercel.app/logo192.png',
    image: 'https://bspx-website.vercel.app/og-image.png',
    description: seoData.description,
    email: 'bspxstudio@gmail.com',
    telephone: '+918531985733',
    address: {
      '@type': 'PostalAddress',
      addressLocality: seoData.location,
      addressRegion: 'Tamil Nadu',
      addressCountry: 'India',
      postalCode: '641001',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '11.0168',
      longitude: '76.9558',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'bspxstudio@gmail.com',
      telephone: '+918531985733',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Tamil'],
      responseTime: 'PT24H',
    },
    sameAs: [
      'https://www.instagram.com/bspx_studio/?hl=en',
      'https://www.facebook.com/profile.php?id=61590660396444',
      'https://www.youtube.com/',
    ],
    foundingDate: '2024',
    priceRange: '₹₹',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '45',
      bestRating: '5',
      worstRating: '1',
    },
  }), [seoData.description, seoData.location]);

  // Update SEO tags
  useEffect(() => {
    // Update document title
    document.title = seoData.title;

    // Remove existing meta tags with data-seo attribute
    const existingTags = document.querySelectorAll('meta[data-seo="true"]');
    existingTags.forEach((tag) => tag.remove());

    // Create new meta tags
    metaTags.forEach(({ name, property, content }) => {
      const tag = document.createElement('meta');
      tag.setAttribute('data-seo', 'true');
      if (name) tag.name = name;
      if (property) tag.property = property;
      tag.content = content;
      document.head.appendChild(tag);
    });

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = seoData.canonical;

    // Update robots tag
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      robotsTag = document.createElement('meta');
      robotsTag.name = 'robots';
      robotsTag.setAttribute('data-seo', 'true');
      document.head.appendChild(robotsTag);
    }
    robotsTag.content = robotsContent;

    // Add GEO tags
    geoTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.name = name;
        tag.setAttribute('data-seo', 'true');
        document.head.appendChild(tag);
      }
      tag.content = content;
    });

    // Cleanup function
    return () => {
      const tags = document.querySelectorAll('meta[data-seo="true"]');
      tags.forEach((tag) => tag.remove());
    };
  }, [seoData, metaTags, geoTags, robotsContent]);

  // Inject JSON-LD Schema
  useEffect(() => {
    // Remove existing schema
    const existingSchema = document.querySelector('script[data-schema="local-business"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Inject schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'local-business');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[data-schema="local-business"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [schema]);

  return null;
};

export default SEO;