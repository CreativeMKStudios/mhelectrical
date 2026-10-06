export type Service = {
  slug: string;
  title: string;
  nav: string;
  card: string;
  description: string;
  lead: string;
  paragraphs: string[];
  points: string[];
};

export const services: Service[] = [
  {
    slug: 'lighting',
    title: 'Lighting',
    nav: 'Lighting',
    card: 'Downlights, pendants, LED fan lights, feature lights and new switches.',
    description:
      'Lighting electrician in Bedford. Downlights, pendants, LED fan lights and switches, fitted by Martin Hughes of MH Electrical.',
    lead: 'Martin fits and changes lights in houses and flats around Bedford. The photos on his Google profile are mostly lighting jobs.',
    paragraphs: [
      'On 16 June 2026 he posted that he had fitted four LED fan lights and changed two hallway pendants for spotlights. The fan lights give you light and moving air from one fitting. That is useful in a warm room.',
      'Other photos show kitchen downlights, a gold starburst light, a long LED light over a television wall, garage batten lights, and plain pendants before they were changed.',
      'A new light on an existing cable is often a small job. A run of new downlights, or a light that needs its own cable from the fuse board, is a bigger one. He will say which it is before he starts.',
      'Some new circuits have to be notified under the building rules. A NAPIT approved contractor can certify that kind of work. Ask him if your job needs a certificate.',
    ],
    points: [
      'Downlights and spotlights',
      'Pendents changed for downlights',
      'LED ceiling fan lights',
      'Feature lights and battens',
      'Switches and dimmers where the circuit allows',
    ],
  },
  {
    slug: 'fuseboards',
    title: 'Fuse boards',
    nav: 'Fuse boards',
    card: 'Old fuse boards changed for a modern consumer unit, with the circuits labelled.',
    description:
      'Fuse board and consumer unit changes in Bedford. MH Electrical fits labelled boards such as the FuseBox unit on his Google profile.',
    lead: 'A fuse board, also called a consumer unit, is the box that protects the circuits in your house. Martin changes them.',
    paragraphs: [
      'His Google photos show a white FuseBox consumer unit with the breakers labelled, and another board under a new downlight. Labels matter. When a circuit trips, you need to know which switch is the sockets and which is the lights.',
      'People usually change a board because it still has old rewireable fuses, it has no RCD protection, the cover is broken, or there is no spare way for a new circuit such as a cooker or a shower.',
      'A board change is notifiable work. He should test the circuits and give you the paperwork for the job. Ask for that when you book.',
      'If the cables behind the board are old or damaged, a straight swap may not be enough. He will tell you if more work is needed before he gives a price.',
    ],
    points: [
      'Old fuse boards replaced',
      'RCD protection on the circuits that need it',
      'Circuits labelled',
      'Space for a cooker, shower or extra sockets',
      'Paperwork for the board change',
    ],
  },
  {
    slug: 'rewires',
    title: 'Rewires',
    nav: 'Rewires',
    card: 'Full house rewires and single-room rewires, priced before the work starts.',
    description:
      'House and room rewires around Bedford. MH Electrical, based in Bromham, rewires homes within about 20 miles.',
    lead: 'Martin lists full house rewires and single-room rewires. He also lists new sockets and new cable runs.',
    paragraphs: [
      'A rewire is the right conversation when the cables are old rubber or fabric, there is no earth on the lights, sockets are warm, or you are opening the walls for a bigger job anyway.',
      'It is dusty work. Floors may come up and walls may be chased. Ask him what is included in the price, and who makes good the plaster and paint. Do not assume that is in the electrical price unless he says so.',
      'He will need the power off for parts of the job. If you work from home, say so when you book so he can plan the order of the rooms.',
      'A rewire should be tested and certified when it is finished. Keep that certificate with the house papers.',
    ],
    points: [
      'Full house rewires',
      'One room at a time',
      'New sockets on a proper circuit',
      'Lights rewired where the old cable is past it',
      'Test and certificate at the end',
    ],
  },
  {
    slug: 'fault-finding',
    title: 'Fault finding',
    nav: 'Fault finding',
    card: 'Lights that flicker, sockets that die, and plugs that keep tripping the board.',
    description:
      'Electrical fault finding in Bedford. Martin Hughes tracks down flickering lights, dead sockets and tripping circuits.',
    lead: 'A fault is not always where you first notice it. Martin tests the circuit, then fixes the part that has failed.',
    paragraphs: [
      'Makeeda Shaw wrote that he sorted a flickering light, then came back and changed an old switch that was part of the same problem. Emilija Ic wrote that he replaced a washing machine plug and a socket on the same visit.',
      'Tell him what you see. A breaker that will not stay on, a socket that is warm, lights that dip when the kettle boils, or a burning smell are all useful clues. Do not keep resetting a breaker that trips at once.',
      'If you smell burning, or you can see scorch marks on a socket or the fuse board, switch the circuit off if you can do that safely and call him. If there is fire or smoke, leave and call 999.',
      'A repair can be small, like a failed switch, or it can show that a cable needs replacing. He should explain that before he does extra work.',
    ],
    points: [
      'Flickering or dead lights',
      'Sockets and plugs',
      'Breakers that trip',
      'Warm fittings and scorched accessories',
      'A clear explanation before extra work',
    ],
  },
  {
    slug: 'testing',
    title: 'Testing and EICRs',
    nav: 'Testing',
    card: 'Electrical tests for landlords, house sales, and homes you are worried about.',
    description:
      'EICR and electrical testing in Bedford. Landlord certificates and PAT testing from MH Electrical in Bromham.',
    lead: 'Martin lists testing, and he lists EICR landlord certificates. An EICR is a report on the fixed wiring in a home.',
    paragraphs: [
      'Landlords in England need the electrics in a rented home checked at the right interval. A buyer, or a buyer’s solicitor, often asks for the same report. The report codes what is dangerous, what needs work, and what is only an improvement.',
      'The test does not mean he will start altering the house. You get the findings first. If something has to be fixed, that is a separate price unless you agree otherwise.',
      'He also lists PAT testing. That is the test of plug-in appliances, not the fixed wiring. Shops, landlords and small offices ask for it. Say how many items you have when you call.',
      'Keep the report. The next electrician, and your insurer, may ask to see it.',
    ],
    points: [
      'EICR for landlords and sales',
      'A written report, not a verbal guess',
      'Remedial work priced separately',
      'PAT testing of plug-in items',
      'Reports you can file with the house papers',
    ],
  },
  {
    slug: 'emergency-callouts',
    title: 'Emergency callouts',
    nav: 'Callouts',
    card: 'No power, a burning smell, or a breaker that will not reset. Call and say what has happened.',
    description:
      'Emergency electrician in Bedford. MH Electrical is listed open 24 hours Monday to Saturday, and 9am to 5pm on Sunday.',
    lead: 'Google lists MH Electrical as open 24 hours from Monday to Saturday, and 9am to 5pm on Sunday. His own flyer also says 24/7 callout.',
    paragraphs: [
      'Call 07903 862367 and say what has failed, and whether anyone is without heat, light or a way to cook. If it is Sunday after 5pm, still call. The Google hours and the flyer do not match on Sunday, so he can tell you if he is coming out.',
      'A total loss of power can be the supply company, not the house. Check whether the street is dark and whether a neighbour has power before you assume the fuse board has failed. He can still talk you through what you are seeing.',
      'Water and electricity do not mix. If water is running into a light or the fuse board, do not touch it. Switch off at the main switch only if you can reach it without standing in water.',
      'Fire, smoke, or a fitting that is glowing is a 999 call first. Leave the house. Call Martin after the fire service says it is safe to have the electrics checked.',
    ],
    points: [
      'Loss of power in the house',
      'Burning smells and scorch marks',
      'Breakers that trip straight away',
      'Water near electrics',
      'A straight answer on whether he can attend',
    ],
  },
];

export const otherWork = [
  'Extra sockets, including outdoor sockets',
  'Cooker, hob and oven circuits',
  'Electric showers',
  'Bathroom extractor fans',
  'EV charger installs',
  'Garden lighting',
  'Electric underfloor heating',
  'Earth bonding',
];
