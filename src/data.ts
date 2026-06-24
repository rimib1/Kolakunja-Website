import { DanceStyle, Branch, GalleryItem } from './types';

export const DANCE_STYLES: DanceStyle[] = [
  {
    id: 'kathak',
    name: 'Kathak',
    description: 'The rhythmic footwork and storytelling elegance.',
    details: 'Originating from the nomadic bards of ancient northern India, Kathak is a mesmerizing dance form characterized by intricate footwork (Tatkar), rapid spins (Chakkars), and expressive storytelling through hand gestures (Mudras) and facial expressions (Abhinaya). Training includes mastery over rhythmic cycles (Taals) and speed variations.',
    image: '/src/assets/images/rimi_b3.jpg'
  },
  {
    id: 'odissi',
    name: 'Odissi',
    description: 'The fluid sculpturesque poses and spiritual grace.',
    details: 'Hailing from the ancient temples of Odisha, Odissi is famous for its lyrical grace and unique body postures, particularly the Tribhanga (three-bend posture) and the Chowka (square stance resembling Lord Jagannath). Students learn to embody temple sculptures brought to life, blending intense devotion with fluid, poetic movements.',
    image: '/src/assets/images/rimi_b4.jpg'
  },
  {
    id: 'folk',
    name: 'Folk Dance',
    description: 'Celebrating vibrant regional traditions and joyful rhythms.',
    details: 'Indian folk dances are a celebration of life, seasons, and festivals. We offer training in various colorful folk dances of India (including Rabindra Nritya, Bengali Folk, and energetic regional styles). This style emphasizes high-energy movements, community bonding, traditional rhythm patterns, and theatrical group storytelling.',
    image: '/src/assets/images/492006963_1243496857788228_5316364385916042134_n.jpg'
  },
  {
    id: 'creative',
    name: 'Creative Dance',
    description: 'Blending contemporary expressions with traditional roots.',
    details: 'Our Creative Dance module merges the discipline of classical Indian dance grammar with modern, contemporary, and free-flowing expressive movements. It allows students to explore innovative themes, self-choreography, and physical storytelling, creating a bridges between age-old traditions and modern-day expressions.',
    image: '/src/assets/images/612151920_1468984501906128_9164998535453393567_n.jpg'
  }
];

export const BRANCHES: Branch[] = [
  {
    id: 'agarpara',
    name: 'Agarpara Branch (Principal)',
    address: 'Anima Apartment Ground Floor, Ellias Road, Agarpara, Kolkata, West Bengal, India, 700058',
    status: 'Active',
    tagline: 'Our premier state-of-the-art facility featuring spacious mirrored halls and regular masterclasses with Principal Rimi Bhowal.',
    phone: '+91 80171 17152'
  },
  {
    id: 'birbhum',
    name: 'Birbhum Branch (Lauberia)',
    address: 'Lauberia 2nd Branch, Birbhum, West Bengal, India',
    status: 'Active',
    tagline: 'Bringing classical heritage closer to the heart of Bengal with dedicated weekly intensive workshops and local festival showcases.',
    phone: '+91 80171 17152'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Kolakunja Classical Stage Showcase',
    category: 'Stage Performances',
    image: '/src/assets/images/613560304_1468984375239474_4491075980113228936_n.jpg'
  },
  {
    id: 'g2',
    title: 'Group Performance & Student Milestones',
    category: 'Student Achievements',
    image: '/src/assets/images/612371681_1468984158572829_4046969719088055024_n.jpg'
  },
  {
    id: 'g3',
    title: 'Grand Dance Festival Celebrations',
    category: 'Festivals',
    image: '/src/assets/images/612151920_1468984501906128_9164998535453393567_n.jpg'
  },
  {
    id: 'g4',
    title: 'Odissi & Kathak Regular Workshops',
    category: 'Workshops',
    image: '/src/assets/images/530610933_1335943155210264_4133410140756325542_n.jpg'
  },
  {
    id: 'g5',
    title: 'Vibrant Stage Group Choreography',
    category: 'Stage Performances',
    image: '/src/assets/images/492006963_1243496857788228_5316364385916042134_n.jpg'
  },
  {
    id: 'g6',
    title: 'Annual Academy Stage Event Poster',
    category: 'Student Achievements',
    image: '/src/assets/images/poster-1.jpg'
  },
  {
    id: 'g7',
    title: 'Cultural Festival Banner Poster',
    category: 'Festivals',
    image: '/src/assets/images/poster_.jpg'
  },
  {
    id: 'g8',
    title: 'Rimi Bhowal Classical Solo',
    category: 'Stage Performances',
    image: '/src/assets/images/rimi_b3.jpg'
  },
  {
    id: 'g9',
    title: 'Syllabus & Mudra Masterclass',
    category: 'Workshops',
    image: '/src/assets/images/rimi_b4.jpg'
  },
  {
    id: 'g10',
    title: 'Traditional Abhinaya Expression',
    category: 'Student Achievements',
    image: '/src/assets/images/rimi_b5.jpg'
  }
];
