import { DanceStyle, Branch, GalleryItem } from './types';

// Import images as ES modules so Vite can resolve them in production builds
import rimi_b3 from './assets/images/rimi_b3.jpg';
import rimi_b4 from './assets/images/rimi_b4.jpg';
import rimi_b5 from './assets/images/rimi_b5.jpg';
import image_492006963 from './assets/images/492006963_1243496857788228_5316364385916042134_n.jpg';
import image_612151920 from './assets/images/612151920_1468984501906128_9164998535453393567_n.jpg';
import image_613560304 from './assets/images/613560304_1468984375239474_4491075980113228936_n.jpg';
import image_612371681 from './assets/images/612371681_1468984158572829_4046969719088055024_n.jpg';
import image_530610933 from './assets/images/530610933_1335943155210264_4133410140756325542_n.jpg';
import poster_1 from './assets/images/poster-1.jpg';
import poster_ from './assets/images/poster_.jpg';
import dsc_0158 from './assets/images/dsc_0158.jpg';
import img_wa0113 from './assets/images/img_wa0113.jpg';
import titas_3 from './assets/images/titas_3.jpeg';

import kathak_img from './assets/images/kathak.jpeg';
import odisi_img from './assets/images/odisi.jpeg';
import folk_dance_img from './assets/images/folk_dance.jpeg';
import creative_img from './assets/images/creative.jpg';

export const DANCE_STYLES: DanceStyle[] = [
  {
    id: 'kathak',
    name: 'Kathak',
    description: 'The rhythmic footwork and storytelling elegance.',
    details: 'Originating from the nomadic bards of ancient northern India, Kathak is a mesmerizing dance form characterized by intricate footwork (Tatkar), rapid spins (Chakkars), and expressive storytelling through hand gestures (Mudras) and facial expressions (Abhinaya). Training includes mastery over rhythmic cycles (Taals) and speed variations.',
    image: kathak_img
  },
  {
    id: 'odissi',
    name: 'Odissi',
    description: 'The fluid sculpturesque poses and spiritual grace.',
    details: 'Hailing from the ancient temples of Odisha, Odissi is famous for its lyrical grace and unique body postures, particularly the Tribhanga (three-bend posture) and the Chowka (square stance resembling Lord Jagannath). Students learn to embody temple sculptures brought to life, blending intense devotion with fluid, poetic movements.',
    image: odisi_img
  },
  {
    id: 'folk',
    name: 'Folk Dance',
    description: 'Celebrating vibrant regional traditions and joyful rhythms.',
    details: 'Indian folk dances are a celebration of life, seasons, and festivals. We offer training in various colorful folk dances of India (including Rabindra Nritya, Bengali Folk, and energetic regional styles). This style emphasizes high-energy movements, community bonding, traditional rhythm patterns, and theatrical group storytelling.',
    image: folk_dance_img
  },
  {
    id: 'creative',
    name: 'Creative Dance',
    description: 'Blending contemporary expressions with traditional roots.',
    details: 'Our Creative Dance module merges the discipline of classical Indian dance grammar with modern, contemporary, and free-flowing expressive movements. It allows students to explore innovative themes, self-choreography, and physical storytelling, creating a bridges between age-old traditions and modern-day expressions.',
    image: creative_img
  }
];

export const BRANCHES: Branch[] = [
  {
    id: 'agarpara',
    name: 'Main Branch (Agarpara, Kolkata)',
    address: 'Anima Apartment Ground Floor, Ellias Road, Agarpara, Kolkata, West Bengal, India, 700058',
    status: 'Active',
    tagline: 'Our premier state-of-the-art facility featuring spacious mirrored halls and regular masterclasses with Gurumaa Rimi Bhowal.',
    phone: '+91 80171 17152'
  },
  {
    id: 'birbhum',
    name: 'Birbhum Branch (Khoyrashol, Lauberia)',
    address: 'Lauberia 2nd Branch, Khoyrashol, Birbhum, West Bengal, India',
    status: 'Active',
    tagline: 'Bringing classical heritage closer to the heart of Bengal with dedicated weekly intensive workshops and local festival showcases.',
    phone: '+91 8478841659'
  },
  {
    id: 'online',
    name: 'Global Online Classes',
    address: 'Distance Learning (Interactive Virtual Batches)',
    status: 'Active',
    tagline: 'Online classes available for our international or distance students with customized schedules and personal progress tracking.',
    phone: '+91 80171 17152'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g_titas_3',
    title: 'Titas & Senior Group Classical Choreography',
    category: 'Stage Performances',
    image: titas_3
  },
  {
    id: 'g_img_wa0113',
    title: 'Kolakunja Classroom Training & Mudra Practice',
    category: 'Stage Performances',
    image: img_wa0113
  },
  {
    id: 'g1',
    title: 'Kolakunja Classical Stage Showcase',
    category: 'Stage Performances',
    image: image_613560304
  },
  {
    id: 'g2',
    title: 'Group Performance & Student Milestones',
    category: 'Festivals',
    image: image_612371681
  },
  {
    id: 'g3',
    title: 'Grand Dance Festival Celebrations',
    category: 'Festivals',
    image: image_612151920
  },
  {
    id: 'g4',
    title: 'Odissi & Kathak Regular Workshops',
    category: 'Festivals',
    image: image_530610933
  },
  {
    id: 'g5',
    title: 'Vibrant Stage Group Choreography',
    category: 'Student Achievements',
    image: image_492006963
  },
  {
    id: 'g6',
    title: 'Annual Academy Stage Event Poster',
    category: 'Workshops',
    image: poster_1
  },
  {
    id: 'g7',
    title: 'Cultural Festival Banner Poster',
    category: 'Workshops',
    image: poster_
  },
  {
    id: 'g8',
    title: 'Rimi Bhowal Classical Solo',
    category: 'Stage Performances',
    image: rimi_b3
  },
  {
    id: 'g9',
    title: 'Syllabus & Mudra Masterclass',
    category: 'Stage Performances',
    image: rimi_b4
  },
  {
    id: 'g10',
    title: 'Traditional Abhinaya Expression',
    category: '',
    image: rimi_b5
  }
];
