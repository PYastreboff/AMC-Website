export const CHOIR_NAME = 'Australian Male Choir'
export const CHOIR_SHORT = 'AMC'
export const CONTACT_EMAIL = 'bookings@australianmalechoir.com.au'
export const CONTACT_PHONE = '+61 400 000 000'
export const CONTACT_CITY = 'Sydney, Australia'

export const EVENT_CATEGORIES = [
  {
    slug: 'concerts',
    label: 'Concerts (large-scale)',
    icon: 'mic',
    description: 'Ticketed, public concerts — large-scale performances in concert halls and festivals across Australia and overseas.',
    size: 'Full chorus · 20–70 voices',
    points: [
      'Ticketed headline concerts in concert halls and festivals, from 300 to 2,000+ seats.',
      'Programmes built around a theme — opera favourites, sacred choral works, Australian classics or Christmas.',
      'Production coordinated with venue teams, from staging and lighting to where the encore lands.',
      'International tours and festival headline sets on request.',
    ],
  },
  {
    slug: 'corporate',
    label: 'Corporate Events',
    icon: 'briefcase',
    description: 'Award nights, conferences and galas. Uplifting music tailored to your event and audience.',
    size: 'Compact ensemble to full choir',
    points: [
      'Award nights, conference keynotes, product launches and end-of-year galas.',
      'From fifteen-minute interludes to full showcase performances throughout the evening.',
      'Acoustically assured in anything from a boardroom to a grand ballroom.',
      'Client and staff entertainment that is genuinely unexpected — and photographed endlessly.',
    ],
  },
  {
    slug: 'weddings',
    label: 'Weddings',
    icon: 'heart',
    description: 'Ceremonies and receptions — from intimate ceremony sets to full receptions.',
    size: 'Octet to full ensemble · 8–50 voices',
    points: [
      'Ceremony covers — processional, signing, hymns and sacred classics.',
      'Reception sets from canapés to the first dance, reading the room at every course.',
      'A couple-selected songlist guided by our music director.',
      'Weddings book 12+ months ahead — enquire early to hold your date.',
    ],
  },
  {
    slug: 'private',
    label: 'Private Parties & Birthdays',
    icon: 'party',
    description: 'Private performances for birthdays, milestone celebrations and special occasions.',
    size: 'Intimate octet · 8 voices',
    points: [
      'Milestone birthdays, anniversaries, proposals and farewells.',
      'A personal songbook built around the guest of honour’s life and loves.',
      'In-home, yacht, garden or venue — performed wherever the moment asks.',
      'Surprise reveals, choreographed for maximum gasp.',
    ],
  },
  {
    slug: 'past',
    label: 'Past Performances',
    icon: 'history',
    description: 'A look back through recent seasons — concerts, galas, tours and community appearances from the AMC archive.',
  },
]

export const eventsData = [
  {
    id: 1,
    category: 'concerts',
    title: 'Voices of the Opera House',
    location: 'Sydney Opera House',
    date: '6 September 2026',
    image: '',
    description: 'A full-scale concert of harmonised arias, sacred works and Great Australian songbook favourites.',
    featured: true,
    years: '2020–present',
  },
  {
    id: 2,
    category: 'concerts',
    title: 'A Night of Italian Arias',
    location: 'Melbourne Recital Centre',
    date: '14 March 2026',
    image: '',
    description: 'From Verdi to Puccini, an operatic evening celebrating the bel canto tradition.',
  },
  {
    id: 3,
    category: 'concerts',
    title: 'Festival of Voices',
    location: 'Hobart, Tasmania',
    date: 'July 2025',
    image: '',
    description: 'A headline set at Australia’s premier winter festival for voices and song.',
  },
  {
    id: 4,
    category: 'corporate',
    title: 'Annual Gala Dinner — National Law Awards',
    location: 'Crown Sydney',
    date: 'November 2025',
    image: '',
    description: 'Pre-dinner entertainment and a signature closer for 600 guests.',
  },
  {
    id: 5,
    category: 'corporate',
    title: 'Financial Sector Summit',
    location: 'Melbourne Convention Centre',
    date: 'October 2025',
    image: '',
    description: 'Welcome performance and networking interludes across the two-day summit.',
  },
  {
    id: 6,
    category: 'weddings',
    title: 'Woolley + Hayes Wedding',
    location: 'Hunter Valley',
    date: 'March 2024',
    image: '',
    description: 'Ceremony and reception sets — from Ave Maria to a surprise pop finale.',
  },
  {
    id: 7,
    category: 'weddings',
    title: 'Thomas + Nguyen Wedding',
    location: 'Bowral, NSW',
    date: 'October 2025',
    image: '',
    description: 'Processional, signing and first-dance repertoire tailored to the couple.',
  },
  {
    id: 8,
    category: 'private',
    title: '80th Birthday Gala',
    location: 'Private residence, Potts Point',
    date: 'August 2025',
    image: '',
    description: 'A private eight-voice ensemble performing a personalised songbook for the occasion.',
  },
  {
    id: 9,
    category: 'private',
    title: 'Anniversary Celebration Cruise',
    location: 'Sydney Harbour',
    date: 'February 2026',
    image: '',
    description: 'An intimate onboard performance with a live setting over the harbour.',
  },
  {
    id: 10,
    category: 'past',
    title: 'Benefit Gala — Children’s Hospital Foundation',
    location: 'Sydney Town Hall',
    date: 'June 2025',
    image: '',
    description: 'AMC volunteered an evening of song to help raise over $400,000 for the foundation.',
  },
  {
    id: 11,
    category: 'past',
    title: 'International Tour — Singapore & Hong Kong',
    location: 'Singapore / Hong Kong',
    date: '2023',
    image: '',
    description: 'Ambassadorial performances across two Asian capitals, including at an international music festival.',
  },
  {
    id: 12,
    category: 'concerts',
    title: 'Christmas Carols by Candelight',
    location: 'Sydney Domain',
    date: 'December 2024',
    image: '',
    description: 'An annual appearance on the country’s most-watched carols broadcast.',
  },
  {
    id: 13,
    category: 'past',
    title: 'Regional Arts Tours — NSW & VIC',
    location: 'Regional NSW & VIC',
    date: '2022–2025',
    image: '',
    description: 'Bringing large-scale choral performances to regional communities.',
  },
  {
    id: 14,
    category: 'private',
    title: 'Corporate Anniversary Dinner',
    location: 'The Rocks, Sydney',
    date: 'July 2024',
    image: '',
    description: 'An elegant after-dinner performance for a private celebrating client group.',
  },
  {
    id: 15,
    category: 'past',
    title: 'Heritage Concerts — Federation Hall',
    location: 'Brisbane',
    date: '2021',
    image: '',
    description: 'A classic programme of arias and Australian songbook favourites in a heritage setting.',
  },
  {
    id: 16,
    category: 'past',
    title: 'Carols in the Park',
    location: 'Parramatta, NSW',
    date: '2018–2024',
    image: '',
    description: 'A fixture of the western Sydney festive season for audiences of thousands each summer.',
  },
  {
    id: 17,
    category: 'past',
    title: 'Corporate Milestone — 30 Years of Song',
    location: 'Australian National Maritime Museum',
    date: '2022',
    image: '',
    description: 'An evening set marking thirty years of a long-standing corporate partnership.',
  },
]

export const repertoireGenres = [
  {
    genre: 'Opera & Classical',
    icon: 'music',
    description: 'Harmonised Italian arias, Verdi and Puccini favourites, art song and sacred choral repertoire.',
    examples: ['Nessun Dorma', 'O Sole Mio', 'Ave Maria', 'Va, Pensiero'],
  },
  {
    genre: 'Jazz & Standards',
    icon: 'piano',
    description: 'Swing, blue notes and timeless classics — the Great American and Australian songbooks.',
    examples: ['Fly Me to the Moon', 'Mack the Knife', 'Sway', 'The Way You Look Tonight'],
  },
  {
    genre: 'Pop & Rock',
    icon: 'guitar',
    description: 'Chart hits reimagined for male voices with dynamic, crowd-pleasing arrangements.',
    examples: ['Uptown Funk', 'Bohemian Rhapsody', 'Africa', 'Hallelujah'],
  },
  {
    genre: 'Australian Classics',
    icon: 'flag',
    description: 'From grassroots folk to iconic Australian rock, in arrangements unique to AMC.',
    examples: ['Waltzing Matilda', 'I Still Call Australia Home', 'Down Under', 'True Blue'],
  },
  {
    genre: 'Sacred & Choral',
    icon: 'church',
    description: 'Hymns, spirituals and ceremonial choral works for weddings, services and formal occasions.',
    examples: ['Amazing Grace', 'Ave Verum', 'Panis Angelicus', 'The Lord’s My Shepherd'],
  },
  {
    genre: 'Christmas',
    icon: 'snowflake',
    description: 'Festive carols and seasonal arrangements, from intimate gatherings to grand carol services.',
    examples: ['O Holy Night', 'White Christmas', 'The 12 Days of Christmas', 'Hark! The Herald'],
  },
]

export const choirMembers = [
  { name: 'Tenor I', role: 'Full-time professional section', voiceType: 'Tenor 1', bio: 'Bright, soaring leads often drawn from Australia’s leading opera and musical-theatre stages.' },
  { name: 'Tenor II', role: 'Full-time professional section', voiceType: 'Tenor 2', bio: 'Lyric tenors lending warmth and blend across the classical line.' },
  { name: 'Baritone', role: 'Full-time professional section', voiceType: 'Baritone', bio: 'Rich, resonant middle voices anchoring every arrangement with clarity and colour.' },
  { name: 'Bass', role: 'Full-time professional section', voiceType: 'Bass', bio: 'The foundation of the chorus — profound low voices delivering depth and power.' },
]

export const newsData = [
  {
    slug: 'world-tour-announcement',
    title: 'AMC Announces European Debut Tour',
    date: '2 September 2026',
    excerpt: 'We are thrilled to announce our first European tour, with headline performances planned across three capitals in 2027.',
    tags: ['Tour', 'Announcement'],
  },
  {
    slug: 'new-repertoire-2026',
    title: 'New Repertoire for 2026: Opera Meets Pop',
    date: '18 August 2026',
    excerpt: 'Our new season blends operatic bel canto with modern chart-toppers in arrangements never heard before.',
    tags: ['Repertoire', 'Season'],
  },
  {
    slug: 'charity-gala-success',
    title: 'Benefit Gala Raises Over $400,000',
    date: '28 June 2026',
    excerpt: 'Alongside the Children\'s Hospital Foundation, our benefit gala set a new fundraising record.',
    tags: ['Community', 'Charity'],
  },
]

export const mediaItems = [
  {
    id: 1,
    type: 'photo',
    title: 'Sydney Opera House Concert',
    location: 'Concert Hall',
  },
  {
    id: 2,
    type: 'photo',
    title: 'Corporate Gala Performance',
    location: 'Grand Ballroom',
  },
  {
    id: 3,
    type: 'photo',
    title: 'Wedding Ceremony',
    location: 'Botanic Gardens',
  },
  {
    id: 4,
    type: 'photo',
    title: 'Festival of Voices',
    location: 'Hobart',
  },
  {
    id: 5,
    type: 'photo',
    title: 'Recording Session',
    location: 'Studio',
  },
  {
    id: 6,
    type: 'photo',
    title: 'International Tour',
    location: 'Singapore',
  },
]

export const videoItems = [
  { id: 1, title: 'Nessun Dorma — Live at the Concert Hall', duration: '4:32' },
  { id: 2, title: 'AMC Highlights Reel 2025', duration: '2:10' },
  { id: 3, title: 'Behind the Voices — Documentary', duration: '8:45' },
]

export const audioItems = [
  { id: 1, title: 'Va, Pensiero', album: 'Opera Favourites', duration: '5:12' },
  { id: 2, title: 'Fly Me to the Moon', album: 'Standards by Night', duration: '3:24' },
  { id: 3, title: 'I Still Call Australia Home', album: 'Australian Songbook', duration: '3:48' },
]

export const socialLinks = [
  { name: 'Spotify', href: 'https://open.spotify.com', icon: 'spotify' },
  { name: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { name: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
]