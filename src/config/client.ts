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
    { name: "Mr JLB", rating: 5, text: "Alick and his team did an outstanding job transforming our front garden. The design exceeded all our expectations and the quality of work is exceptional. We’ve had many compliments from people passing by—it’s truly a standout feature of our home now.", date: "9 months ago" },
    { name: "Morven West", rating: 5, text: "Working with Alick was a dream. He really listened to what I wanted and help me think differently and be braver. The end result is a spectacular garden oasis.  ", date: "2 years ago" },
    { name: "Lucinda Lewis", rating: 5, text: "We are absolutely delighted with our garden. Alick and his team are extremely talented and professional. The entire process from the initial designs to the final delivery was thorough, expertly managed and stress free. Alick was patient and …  ", date: "2 years ago" },
    { name: "Steve Bustin, Speech coach and speaker", rating: 5, text: "Alick at Fern and Pine has designed a stunning garden for us, taking in pretty much everything we had on our wish list but also taking it further, making suggestions that have resulted in a garden we love and is more beautiful than I could …  ", date: "4 years ago" },
    { name: "PaulMM", rating: 5, text: "Alick and the team at Fern & Pine designed our garden for us in 2021 and we were very pleased with the result. After moving to a new home, we had a blank canvas from which to start and Alick created a garden that works for the whole family. …  ", date: "4 years ago" },
    { name: "Jim Brown", rating: 5, text: "We wanted to say how extremely pleased we both are with the design you provided for our garden.  You listened to what we wanted for our space and also provided lots of insightful ideas we hadn’t thought of.  The result is beautiful and …  ", date: "3 years ago" },
    { name: "Michelle O'Neill", rating: 5, text: "Having known and worked with Alick for many years, I cannot recommend him highly enough, both personally and professionally. Alick is passionate about the industry and committed to making his clients' ideas come to life by working closely …  ", date: "5 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Fern and Pine Garden Design Studio | Landscaper in Brighton",
    description: "Professional landscaper in Brighton. 5.0-star rated on Google. Call for a free quote.",
  },
};
