export const CHOIR_NAME = 'Australian Male Choir'
export const CHOIR_SHORT = 'AMC'
export const CONTACT_EMAIL = 'admin@australianmalechoir.com.au'
export const CONTACT_CITY = 'Sydney, Australia'

const b = (p) => `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`

const G = (n) => b(`/images/gallery/${n}.jpg`)

export const EVENT_CATEGORIES = [
  {
    slug: 'concerts',
    label: 'Concerts (large-scale)',
    icon: 'mic',
    image: G(60),
    description: 'Ticketed, public concerts — large-scale performances in concert halls and festivals, with orchestras or electronic production, across Australia and overseas.',
    size: 'Full chorus · 20–70 voices',
    points: [
      'Ticketed headline concerts in concert halls and festivals, from 300 to 2,000+ seats.',
      'Programmes built around a theme — opera favourites, sacred choral works, Australian classics or Christmas.',
      'We collaborate with a range of chamber and symphony orchestras, and can assemble a project-based orchestra in an Australian city of your choice for your event.',
      'We assemble singers for large electronic dance festivals, blending engineered vocals with live performance.',
      'Production coordinated with venue teams, from staging and lighting to where the encore lands.',
      'International tours and festival headline sets on request.',
    ],
  },
  {
    slug: 'corporate',
    label: 'Corporate Events',
    icon: 'briefcase',
    image: G(56),
    description: 'Award nights, conferences, galas and sporting functions. Uplifting music tailored to your event and audience.',
    size: 'Compact ensemble to full choir',
    points: [
      'Award nights, conference keynotes, product launches and end-of-year galas.',
      'From fifteen-minute interludes to full showcase performances throughout the evening.',
      'The Australian national anthem and anthems of sporting teams — performed with stadium-grade presence for launches, matches and club functions.',
      'Acoustically assured in anything from a boardroom to a grand ballroom.',
      'Client and staff entertainment that is genuinely unexpected — and photographed endlessly.',
    ],
  },
  {
    slug: 'weddings',
    label: 'Weddings, Proposals & Engagement Parties',
    icon: 'heart',
    image: G(57),
    description: 'Ceremonies, receptions, proposals and engagement parties — from intimate ceremony sets to full receptions.',
    size: 'Octet to full ensemble · 8–50 voices',
    points: [
      'Ceremony covers — processional, signing, hymns and sacred classics.',
      'Reception sets from canapés to the first dance, reading the room at every course.',
      'Proposal and engagement parties — golden moments, sung to order.',
      'A couple-selected songlist guided by our music director.',
      'Bookings recommended 12 months in advance, however our team can assemble a group of singers at short notice if required.',
    ],
  },
  {
    slug: 'private',
    label: 'Private Parties & Birthdays',
    icon: 'party',
    image: G(55),
    description: 'Private performances for birthdays, milestone celebrations and special occasions.',
    size: 'Intimate octet · 8 voices',
    points: [
      'Milestone birthdays, anniversaries, proposals and farewells.',
      'A personal songbook built around the guest of honour’s life and loves.',
      'In-home, yacht, garden or venue — performed wherever the moment asks.',
      'Surprise reveals, choreographed for maximum gasp.',
    ],
  },
]

export const eventsData = []

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



export const newsData = [
  {
    slug: 'the-choir-has-formed',
    title: 'The choir has formed',
    date: '13 September 2026',
    excerpt:
      'We are AMC. Voices from across Australia, many of them long-time members of other choirs, have come together under the banner — connected, united and ready to perform.',
    image: G(3),
    tags: ['Announcement'],
  },
]

export const mediaItems = [
  { id: 1, type: 'photo', title: 'Opening night', location: 'Sydney Opera House', tag: 'Concerts', image: G(1) },
  { id: 2, type: 'photo', title: 'Annual gala dinner', location: 'Grand ballroom', tag: 'Corporate', image: G(3) },
  { id: 3, type: 'photo', title: 'In concert', location: 'Concert Hall', tag: 'Concerts', image: G(5) },
  { id: 4, type: 'photo', title: 'Corporate soiree', location: 'Convention centre', tag: 'Corporate', image: G(7) },
  { id: 5, type: 'photo', title: 'Wedding ceremony', location: 'Botanic gardens', tag: 'Weddings', image: G(11) },
  { id: 6, type: 'photo', title: 'An evening with the choir', location: 'Melbourne', tag: 'Concerts', image: G(9) },
  { id: 7, type: 'photo', title: 'Wedding reception set', location: 'Hunter Valley', tag: 'Weddings', image: G(19) },
  { id: 8, type: 'photo', title: 'Concert by candlelight', location: 'Cathedral', tag: 'Concerts', image: G(13) },
  { id: 9, type: 'photo', title: 'Private performance', location: 'Private residence', tag: 'Private', image: G(23) },
  { id: 10, type: 'photo', title: 'The full chorus', location: 'Main stage', tag: 'Concerts', image: G(17) },
  { id: 11, type: 'photo', title: 'Harbour cruise', location: 'Sydney Harbour', tag: 'Private', image: G(27) },
  { id: 12, type: 'photo', title: 'International tour', location: 'Europe', tag: 'Tours', image: G(30) },
  { id: 13, type: 'photo', title: 'Encore', location: 'Festival Hall', tag: 'Concerts', image: G(21) },
  { id: 14, type: 'photo', title: 'Sacred concert', location: 'Benedictine Abbey', tag: 'Concerts', image: G(25) },
  { id: 15, type: 'photo', title: 'Guest festival set', location: 'Overseas festival', tag: 'Tours', image: G(38) },
  { id: 16, type: 'photo', title: 'Concert night', location: 'Adelaide Town Hall', tag: 'Concerts', image: G(29) },
  { id: 17, type: 'photo', title: 'On the road', location: 'Regional NSW', tag: 'Tours', image: G(34) },
  { id: 18, type: 'photo', title: 'Symphony chorus', location: 'Brisbane', tag: 'Concerts', image: G(33) },
  { id: 19, type: 'photo', title: 'Grand programme', location: 'Touring stage', tag: 'Concerts', image: G(37) },
  { id: 20, type: 'photo', title: 'Travelling choir', location: 'International', tag: 'Tours', image: G(47) },
  { id: 21, type: 'photo', title: 'Season finale', location: 'State Theatre', tag: 'Concerts', image: G(45) },
  { id: 22, type: 'photo', title: 'Festival headline', location: 'Outdoor stage', tag: 'Concerts', image: G(51) },
  { id: 23, type: 'photo', title: 'Acoustic afternoon', location: 'Recital hall', tag: 'Concerts', image: G(41) },
  { id: 24, type: 'photo', title: 'Backstage warm-up', location: 'Green room', tag: 'Private', image: G(43) },
  { id: 25, type: 'photo', title: 'Afterglow', location: 'Concert Hall', tag: 'Concerts', image: G(2) },
  { id: 26, type: 'photo', title: 'Festival chorus', location: 'Hobart', tag: 'Concerts', image: G(10) },
  { id: 27, type: 'photo', title: 'On tour', location: 'Regional NSW', tag: 'Tours', image: G(16) },
  { id: 28, type: 'photo', title: 'Concert suite', location: 'State Theatre', tag: 'Concerts', image: G(20) },
  { id: 29, type: 'photo', title: 'Industry dinner', location: 'City venue', tag: 'Corporate', image: G(22) },
  { id: 30, type: 'photo', title: 'House concert', location: 'Private home', tag: 'Private', image: G(26) },
  { id: 31, type: 'photo', title: '', location: '', tag: 'Gallery', image: G(54) },
  { id: 32, type: 'photo', title: '', location: '', tag: 'Gallery', image: G(55) },
  { id: 33, type: 'photo', title: '', location: '', tag: 'Gallery', image: G(56) },
  { id: 34, type: 'photo', title: '', location: '', tag: 'Gallery', image: G(57) },
  { id: 35, type: 'photo', title: '', location: '', tag: 'Gallery', image: G(58) },
  { id: 36, type: 'photo', title: '', location: '', tag: 'Gallery', image: G(59) },
  { id: 37, type: 'photo', title: '', location: '', tag: 'Gallery', image: G(60) },
  { id: 38, type: 'photo', title: '', location: '', tag: 'Gallery', image: G(61) },
  { id: 39, type: 'photo', title: '', location: '', tag: 'Gallery', image: G(62) },
  { id: 40, type: 'photo', title: '', location: '', tag: 'Gallery', image: G(63) },
  { id: 41, type: 'photo', title: '', location: '', tag: 'Gallery', image: G(64) },
  { id: 42, type: 'photo', title: '', location: '', tag: 'Gallery', image: G(65) },
]

export const videoItems = [
  { id: 1, title: 'Australian National Anthem · Advance Australia Fair', duration: '1:12', image: b('/images/poster-1.jpg'), src: b('/videos/video-1.mp4') },
  { id: 2, title: 'Bella Ciao', duration: '2:16', image: b('/images/poster-2.jpg'), src: b('/videos/video-2.mp4') },
  { id: 3, title: 'Those Were The Days, My Friend', duration: '3:51', image: b('/images/poster-3.jpg'), src: b('/videos/video-3.mp4') },
]

export const audioItems = [
  { id: 1, title: 'Advance Australia Fair', venue: 'Performed at Verbrugghen Hall, Sydney Conservatorium of Music', duration: '2:20', src: b('/audio/advance-australia-fair.mp3') },
  { id: 2, title: 'My Way', venue: 'Performed at Brisbane Multicultural Arts Centre', duration: '1:46', src: b('/audio/my-way.mp3') },
  { id: 3, title: 'Time · Inception', venue: 'Performed at Cabramatta Hall, Sydney', duration: '2:48', src: b('/audio/time-inception.mp3') },
]

export const socialLinks = [
  { name: 'Spotify', href: 'https://open.spotify.com', icon: 'spotify' },
  { name: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { name: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
]