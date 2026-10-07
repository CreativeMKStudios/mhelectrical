import hero from '../assets/work/kitchen-downlights.jpg';
import { hours, pageUrl, publicOrigin, site } from './site';
import { services } from './services';
import { reviews } from './reviews';

const day = (name: string) => `https://schema.org/${name}`;

export function businessSchema(canonical: string) {
  return {
    '@type': 'Electrician',
    '@id': `${pageUrl('/')}#business`,
    name: site.name,
    url: pageUrl('/'),
    image: new URL(hero.src, publicOrigin).href,
    telephone: site.phoneTel,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.street,
      addressLocality: site.village,
      addressRegion: site.city,
      postalCode: site.postcode,
      addressCountry: site.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.lat,
      longitude: site.lng,
    },
    hasMap: site.mapsPlace,
    areaServed: [
      { '@type': 'City', name: 'Bedford' },
      { '@type': 'AdministrativeArea', name: 'Bedfordshire' },
      { '@type': 'City', name: 'Milton Keynes' },
    ],
    openingHoursSpecification: hours.map((row) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day(row.day),
      opens: row.opens,
      closes: row.closes,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.rating,
      reviewCount: site.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    founder: {
      '@type': 'Person',
      name: site.owner,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          url: pageUrl(`/services/${service.slug}`),
          areaServed: 'Bedford',
          provider: { '@id': `${pageUrl('/')}#business` },
        },
      })),
    },
    sameAs: [site.mapsPlace, site.mapsUrl],
    mainEntityOfPage: canonical,
  };
}

export function reviewSchema() {
  return reviews.map((review) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: review.name },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
    },
    reviewBody: review.text,
    itemReviewed: { '@id': `${pageUrl('/')}#business` },
    publisher: { '@type': 'Organization', name: 'Google' },
  }));
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  const trail = [{ name: 'Home', href: '/' }, ...items];
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: pageUrl(item.href),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}
