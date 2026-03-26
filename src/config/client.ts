export const client = {
  // Business Details
  name: "Fern and Pine Garden Design Studio",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Brighton.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01273 906912",
  email: "",
  website: "",

  // Location
  address: "Brighton",
  city: "Brighton",
  county: "",
  postcode: "",
  basedIn: "Brighton",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "7",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "1939", rating: 5, text: "We are simply bowled over with our garden, just cannot recommend Alick and his lovely, talented team at Fern and Pine highly enough! The process of turning a fuzzy idea into a garden that is an absolute joy to be in and use, has been totally brilliant – and a lot of fun!  Alick listened carefully to our ideas - based around our favourite Marrakech gardens - and what we wanted out of it, a place to sit in and relax, with a separate dining area, exotic planting, and, of course, a little bit of Morocco.  The process of translating this into a garden that ‘just works’ was a breeze, brought to life through mood boards, CAD drawings and a really well curated range of tiling, lighting, water features and planting options. The attention to detail (even the drain cover!) was fantastic. Throughout, it felt like a proper collaboration at every step of the way, guided by Alick’s expert eye, inspiration and nous – and very practical approach, really maximising the impact of our budget.  A big shout out too to Cemlyn and his brilliant team of landscape gardeners at Grove Gardens for executing all this to such very high standards and level of finish, and to Todd for the very creative lighting!", date: "4 months ago" },
    { name: "Mr JLB", rating: 5, text: "Alick and his team did an outstanding job transforming our front garden. The design exceeded all our expectations and the quality of work is exceptional. We’ve had many compliments from people passing by—it’s truly a standout feature of our home now. Highly recommended!", date: "9 months ago" },
    { name: "Richie Rumbelow", rating: 5, text: "Couldn’t recommend Alick and the team more highly! Alick is a fabulous designer and incorporated everything we wanted into the designs for both our front and back gardens. We were delighted with the end results. Having the garden professionally designed has changed how we use the space and we feel like we’ve gained a whole new room.", date: "a year ago", badge: "Local Guide" },
    { name: "Raad Pharaon", rating: 5, text: "Fantastic!! I absolutely loved working with Alick and Carly on my rooftop project, nothing was too much trouble and they are very responsive, professional and have a brilliant eye. I would recommend Fine & Pine to all!! 10/10", date: "a year ago", badge: "Local Guide" },
    { name: "Morven West", rating: 5, text: "Working with Alick was a dream. He really listened to what I wanted and help me think differently and be braver. The end result is a spectacular garden oasis.", date: "2 years ago", badge: "Local Guide" },
    { name: "Lucinda Lewis", rating: 5, text: "We are absolutely delighted with our garden. Alick and his team are extremely talented and professional. The entire process from the initial designs to the final delivery was thorough, expertly managed and stress free. Alick was patient and worked on our  brief transforming our garden into something way beyond our expectations. We have and would highly recommend him to anyone looking to transform their outdoor space.", date: "2 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Fern and Pine Garden Design Studio | Landscaper in Brighton",
    description: "Professional landscaper in Brighton. 5.0-star rated on Google. Call for a free quote.",
  },
};
