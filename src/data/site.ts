export const publicOrigin = 'https://creativemkstudios.github.io';

export const site = {
  name: 'MH Electrical',
  owner: 'Martin Hughes',
  short: 'NAPIT approved electrician based in Bromham, Bedford.',
  url: 'https://creativemkstudios.github.io/mhelectrical',
  phoneDisplay: '07903 862367',
  phoneTel: '+447903862367',
  email: 'martin_hughes94mh@hotmail.com',
  street: '24 Dovehouse Close',
  village: 'Bromham',
  city: 'Bedford',
  region: 'Bedfordshire',
  postcode: 'MK43 8PS',
  country: 'United Kingdom',
  countryCode: 'GB',
  lat: 52.144187,
  lng: -0.528949,
  plusCode: '4FVC+MC Bedford',
  mapsUrl: 'https://maps.app.goo.gl/eia4sGTAzxcuYKRz9',
  mapsPlace:
    'https://www.google.com/maps/place/?q=place_id:ChIJr0IpCiWxd0gRs-LS3ghHk30',
  reviewsUrl:
    'https://search.google.com/local/reviews?placeid=ChIJr0IpCiWxd0gRs-LS3ghHk30',
  placeId: 'ChIJr0IpCiWxd0gRs-LS3ghHk30',
  rating: 5,
  reviewCount: 23,
  checked: '2026-10-06',
  radiusMiles: 20,
  experience:
    '15 years in domestic installations, testing and maintenance',
} as const;

export const hours = [
  { day: 'Monday', label: 'Open 24 hours', opens: '00:00', closes: '23:59' },
  { day: 'Tuesday', label: 'Open 24 hours', opens: '00:00', closes: '23:59' },
  { day: 'Wednesday', label: 'Open 24 hours', opens: '00:00', closes: '23:59' },
  { day: 'Thursday', label: 'Open 24 hours', opens: '00:00', closes: '23:59' },
  { day: 'Friday', label: 'Open 24 hours', opens: '00:00', closes: '23:59' },
  { day: 'Saturday', label: 'Open 24 hours', opens: '00:00', closes: '23:59' },
  { day: 'Sunday', label: '9am – 5pm', opens: '09:00', closes: '17:00' },
] as const;

export const addressLines = [
  site.street,
  site.village,
  site.city,
  site.postcode,
];

/** Root-relative path with the GitHub Pages project base, trailing slash on pages. */
export function href(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const [pathPart, query = ''] = path.split('?');
  const [rawPath, hash = ''] = pathPart.split('#');
  let route = rawPath || '/';
  if (base && (route === base || route.startsWith(`${base}/`))) {
    route = route.slice(base.length) || '/';
  }
  if (!route.startsWith('/')) route = `/${route}`;
  const trimmed = route.replace(/\/+$/, '') || '/';
  const isFile = trimmed !== '/' && /\.[a-z0-9]+$/i.test(trimmed);
  const withBase = trimmed === '/' ? `${base}/` : isFile ? `${base}${trimmed}` : `${base}${trimmed}/`;
  return `${withBase}${query ? `?${query}` : ''}${hash ? `#${hash}` : ''}`;
}

export function pageUrl(pathname = '/'): string {
  return new URL(href(pathname), publicOrigin).href;
}
