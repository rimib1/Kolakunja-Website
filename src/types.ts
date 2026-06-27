export interface Inquiry {
  id: string;
  studentName: string;
  age: number;
  parentName?: string;
  phoneNumber: string;
  email: string;
  preferredBranch: 'Agarpara' | 'Birbhum' | 'Online';
  preferredDanceStyle: 'Kathak' | 'Odissi' | 'Folk' | 'Rabindranritya' | 'Creative';
  message: string;
  status: 'Pending' | 'Contacted' | 'Enrolled' | 'Archived';
  createdAt: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  status: 'Active' | 'Upcoming';
  tagline: string;
  phone?: string;
}

export interface DanceStyle {
  id: string;
  name: string;
  description: string;
  details: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Stage Performances' | 'Workshops' | 'Student Achievements' | 'Festivals' | '';
  image: string;
}
