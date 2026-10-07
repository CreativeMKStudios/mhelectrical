import type { ImageMetadata } from 'astro';
import kitchen from '../assets/work/kitchen-downlights.jpg';
import hallwaySpots from '../assets/work/hallway-spots.jpg';
import pendantPlain from '../assets/work/pendant-plain.jpg';
import livingPendant from '../assets/work/living-room-pendant.jpg';
import hallwayPendants from '../assets/work/hallway-pendants.jpg';
import fanClose from '../assets/work/fan-close.jpg';
import fanPattern from '../assets/work/fan-pattern.jpg';
import fanStudy from '../assets/work/fan-study.jpg';
import linear from '../assets/work/linear-light.jpg';
import battens from '../assets/work/garage-battens.jpg';
import starburst from '../assets/work/starburst.jpg';
import crystal from '../assets/work/crystal-fan.jpg';
import fanWarm from '../assets/work/fan-warm.jpg';
import fanDay from '../assets/work/fan-day.jpg';
import fusebox from '../assets/work/fusebox.jpg';
import boardLight from '../assets/work/board-and-light.jpg';
import logoCard from '../assets/work/logo-card.jpg';
import flyer from '../assets/work/flyer.jpg';

export type Photo = {
  src: ImageMetadata;
  alt: string;
  caption: string;
  group: 'june' | 'profile' | 'brand';
  service?: string;
};

export const photos: Photo[] = [
  {
    src: kitchen,
    alt: 'Kitchen ceiling with black downlights and two roof windows.',
    caption: 'Kitchen downlights, from the MH Electrical Google profile.',
    group: 'profile',
    service: 'lighting',
  },
  {
    src: hallwaySpots,
    alt: 'White hallway with recessed downlights and a smoke alarm on the ceiling.',
    caption: 'Hallway downlights from the 16 June 2026 Google update.',
    group: 'june',
    service: 'lighting',
  },
  {
    src: pendantPlain,
    alt: 'A plain white pendant hanging in front of a window.',
    caption: 'A plain pendant, shown with the June 2026 lighting update.',
    group: 'june',
    service: 'lighting',
  },
  {
    src: livingPendant,
    alt: 'A lit white pendant in a living room with patio doors.',
    caption: 'Pendant light in a living room, from the June 2026 update.',
    group: 'june',
    service: 'lighting',
  },
  {
    src: hallwayPendants,
    alt: 'Two white pendants lighting a hallway with white doors.',
    caption: 'Hallway pendants. The same update says two hallway pendants were changed for spotlights.',
    group: 'june',
    service: 'lighting',
  },
  {
    src: fanClose,
    alt: 'Close view of a round white LED ceiling fan light.',
    caption: 'LED fan light, close up. Four of these were fitted in the June 2026 job.',
    group: 'june',
    service: 'lighting',
  },
  {
    src: fanPattern,
    alt: 'LED fan light with a geometric rim, above a window looking onto brick flats.',
    caption: 'LED fan light with a patterned rim, from the June 2026 update.',
    group: 'june',
    service: 'lighting',
  },
  {
    src: fanStudy,
    alt: 'LED fan light in a bedroom with a desk and a large window.',
    caption: 'LED fan light in a bedroom, from the June 2026 update.',
    group: 'june',
    service: 'lighting',
  },
  {
    src: linear,
    alt: 'A modern linear LED ceiling light above a slatted wood wall and a television.',
    caption: 'Linear LED light over a slatted wall, from the Google profile.',
    group: 'profile',
    service: 'lighting',
  },
  {
    src: battens,
    alt: 'Two bright LED batten lights fixed between wooden joists in a garage or loft.',
    caption: 'LED batten lights on joists in a garage or loft.',
    group: 'profile',
    service: 'lighting',
  },
  {
    src: starburst,
    alt: 'A gold starburst ceiling light with many thin glowing arms.',
    caption: 'Gold starburst ceiling light after fitting.',
    group: 'profile',
    service: 'lighting',
  },
  {
    src: crystal,
    alt: 'A round crystal-rim LED fan light in a bedroom with wooden wardrobes.',
    caption: 'Crystal-rim LED fan light in a bedroom.',
    group: 'profile',
    service: 'lighting',
  },
  {
    src: fanWarm,
    alt: 'A warm white LED fan light above a bed.',
    caption: 'LED fan light on a warm setting.',
    group: 'profile',
    service: 'lighting',
  },
  {
    src: fanDay,
    alt: 'A cool white LED fan light in a bedroom with leaded windows.',
    caption: 'LED fan light on a cool white setting.',
    group: 'profile',
    service: 'lighting',
  },
  {
    src: fusebox,
    alt: 'An open white FuseBox consumer unit with labelled breakers.',
    caption: 'A labelled FuseBox consumer unit from the Google profile.',
    group: 'profile',
    service: 'fuseboards',
  },
  {
    src: boardLight,
    alt: 'A consumer unit on a wall under a new downlight, with an older pendant still on the ceiling.',
    caption: 'Consumer unit under a new downlight. An older pendant is still on the ceiling.',
    group: 'profile',
    service: 'fuseboards',
  },
  {
    src: logoCard,
    alt: 'MH Electrical logo: an orange shield with a black M and a yellow lightning bolt.',
    caption: 'The MH Electrical logo from the Google profile.',
    group: 'brand',
  },
  {
    src: flyer,
    alt: 'MH Electrical flyer listing NAPIT approval, services, the phone number 07903 862367, and the email address.',
    caption: 'Flyer from the Google profile. It lists the services, the phone number and the email.',
    group: 'brand',
  },
];

export const heroPhoto = photos[0];
