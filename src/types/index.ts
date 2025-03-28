export interface Puppy {
  id: string;
  name: string;
  breed: string;
  age: string;
  price: number;
  image: string;
  available: boolean;
  description: string;
}

export interface Parent {
  id: string;
  name: string;
  breed: string;
  age: string;
  image: string;
  certifications: string[];
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  image?: string;
  rating: number;
  date: string;
}