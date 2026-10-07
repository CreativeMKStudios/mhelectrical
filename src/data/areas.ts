export type Area = {
  slug: string;
  name: string;
  card: string;
  description: string;
  distance: string;
  paragraphs: string[];
};

export const areas: Area[] = [
  {
    slug: 'bedford',
    name: 'Bedford',
    card: 'The town next to his base in Bromham, including the centre and the suburbs.',
    description:
      'Electrician in Bedford. Martin Hughes of MH Electrical is based in Bromham and works across Bedford.',
    distance: 'About 3 miles from Dovehouse Close',
    paragraphs: [
      'Bedford is the main place Martin works. Bromham sits on the west side of the town, so the centre, Queen’s Park, the Castle area, Brickhill, Putnoe and the streets south of the river are a short drive.',
      'A lot of Bedford houses are older brick homes. They often still have a small fuse board, pendant lights, and sockets that were added one at a time. Flats in the town need the same care, and the building rules of that block still apply. Tell him if the job is in a flat.',
      'Bedford station is on the line into London, and a lot of people work shifts or from home. Say if you need the power kept on in one room while he works in another.',
      'MK42, which covers parts of south Bedford and Kempston, is inside the same patch. If you are in the town, you are well inside the 20 miles he says he covers.',
    ],
  },
  {
    slug: 'bromham',
    name: 'Bromham',
    card: 'His home village, on the Great Ouse just west of Bedford.',
    description:
      'Electrician in Bromham, Bedford. MH Electrical is based at 24 Dovehouse Close, MK43 8PS.',
    distance: 'Based here, at 24 Dovehouse Close',
    paragraphs: [
      'MH Electrical is based at 24 Dovehouse Close in Bromham, postcode MK43 8PS. Google shows the address as 24 Dovehouse Close, Bedford. Bromham is the village. The Plus Code on the listing is 4FVC+MC.',
      'Bromham is a village on the River Great Ouse, with the old bridge and Bromham Mill to the north of the houses. Dovehouse Close is a residential road. Please call before you come to the address. The work is done at your house, not from a shop counter.',
      'Oakley, Clapham, Biddenham, Stagsden and Stevington are the next villages. If you can see the Bedford road from your window, you are in the easiest part of his patch.',
      'The same jobs apply here as in town: lights, fuse boards, faults, rewires and tests. Being close only changes how fast he can get to you.',
    ],
  },
  {
    slug: 'kempston',
    name: 'Kempston',
    card: 'South-west of Bedford, a few minutes from Bromham.',
    description:
      'Electrician in Kempston. MH Electrical covers Kempston from its base in Bromham, Bedford.',
    distance: 'About 4 miles from Dovehouse Close',
    paragraphs: [
      'Kempston runs into the south-west side of Bedford. From Dovehouse Close it is a short drive down through Biddenham and Great Denham, or through the town.',
      'The houses range from older streets near the High Street to newer homes in the estates. Newer houses can still need extra sockets, a cooker circuit, or an outside light. Older ones are more likely to need a board change or a partial rewire.',
      'Kempston is inside Bedfordshire and well inside the 20-mile radius Martin states. You do not need a separate “Kempston rate”. Ask for a price for the job.',
      'If the job is in a new-build that is still under a builder’s warranty, check that warranty before you change the electrics. He can still quote. You should know who is responsible first.',
    ],
  },
  {
    slug: 'milton-keynes',
    name: 'Milton Keynes',
    card: 'About 12 miles south-west. He tags Milton Keynes on his own Google post.',
    description:
      'Electrician for Milton Keynes from Bromham. MH Electrical covers MK, including the estates inside about 20 miles.',
    distance: 'About 12 miles to the city centre',
    paragraphs: [
      'Milton Keynes is about 12 miles from Bromham. Martin’s own Google post on 16 June 2026 used the tag miltonkeynes, and his trade profile lists Milton Keynes in the areas he covers.',
      'That includes the nearer parts of the city: Newport Pagnell, Olney, Wolverton, Stony Stratford, and the estates on the east side towards Bedford. Central Milton Keynes is inside the same drive. If you are down past Bletchley, say so when you call so he can confirm the distance.',
      'MK houses are often newer than Bedford’s, but a 1970s or 1980s grid-square house can still have a full fuse board and not enough sockets. Lighting jobs, extra sockets and landlord tests are the usual calls.',
      'He is not based in Milton Keynes. He drives from Bromham. For a small job, ask him whether the visit is worth it that day or whether it can wait and be grouped with another call.',
    ],
  },
  {
    slug: 'ampthill',
    name: 'Ampthill',
    card: 'The market town on the Greensand Ridge, south of Bedford.',
    description:
      'Electrician in Ampthill. MH Electrical comes from Bromham, about 8 miles away, for home electrical work.',
    distance: 'About 8 miles south of Bromham',
    paragraphs: [
      'Ampthill is about 8 miles south of Bromham, on the Greensand Ridge. Flitwick, Maulden, Clophill and Millbrook sit in the same belt of towns and are a similar drive.',
      'The older houses off the Georgian high street, and the cottages in the villages around it, often have lighting and fuse boards that have been added to for years. A test before a sale, or before you insulate a loft, is a common reason to call.',
      'Ampthill is in Bedfordshire, inside the area he publishes. Woburn and Woburn Sands are a little further towards Milton Keynes and still sit in that same patch.',
      'Call with the postcode. If the job is small, he may book it with another visit in the same direction so you are not paying for a wasted journey.',
    ],
  },
];

export const nearby = [
  'Biddenham',
  'Great Denham',
  'Clapham',
  'Oakley',
  'Stagsden',
  'Stevington',
  'Wootton',
  'Elstow',
  'Shortstown',
  'Wixams',
  'Cranfield',
  'Flitwick',
  'St Neots',
  'Newport Pagnell',
  'Olney',
  'Hitchin',
];
