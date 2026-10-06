export type Review = {
  name: string;
  when: string;
  rating: 5;
  text: string;
  note?: string;
};

/** Reviews Google showed in full on 6 October 2026. Wording is the customer's. */
export const reviews: Review[] = [
  {
    name: 'Emilija Ic',
    when: 'About a month before 6 Oct 2026',
    rating: 5,
    text: 'Martin was excellent! He came out quickly and replaced my washing machine plug and a socket in no time. His communication was great throughout, and he was punctual, professional, and efficient. I’d definitely recommend him!',
  },
  {
    name: 'Christopher Johnston-Stoneman',
    when: 'About 2 months before 6 Oct 2026',
    rating: 5,
    text: 'A very good experience - they offered a good price for the service, were very punctual and got everything working for us without any issues.',
    note: 'Google tags: light fixture installation. Price they reported: £100–£200, called a reasonable price.',
  },
  {
    name: 'Susan Johnston',
    when: 'About a month before 6 Oct 2026',
    rating: 5,
    text: 'I was very happy it’s taken me years to get my hall light replaced and it was done very quickly , and the cost wasn’t excessive. And he arrived on time.',
    note: 'Price they reported: £1–£100, called a great price.',
  },
  {
    name: 'Makeeda Shaw',
    when: 'About 4 months before 6 Oct 2026',
    rating: 5,
    text: 'Great service!! Sorted out my flickering light and came back also to change an old switch for me which we discovered was causing some of the issue. Very helpful and friendly.',
  },
  {
    name: 'Melody Peterson',
    when: 'About 4 months before 6 Oct 2026',
    rating: 5,
    text: 'A really fantastic service I highly recommend. Martin always does such a great job and tackles the difficult tasks with ease!!!',
  },
];

export const ownerPost = {
  date: '16 June 2026',
  text: 'Perfect timing for this install with the heat we’ve been having. 4 LED fan lights fitted and the difference is unreal — cool airflow and clean lighting all in one. Also two hallway pendants replaced for spotlights.',
};
