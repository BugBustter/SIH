export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface Translation {
  [key: string]: string;
}

export interface Translations {
  [key: string]: Translation;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  image: string;
  available: boolean;
}

export interface Hospital {
  id: string;
  name: string;
  address: string;
  phone: string;
  distance: number;
  lat: number;
  lng: number;
}

export interface SarthiBooth {
  id: string;
  name: string;
  address: string;
  phone: string;
  distance: number;
  services: string[];
  lat: number;
  lng: number;
}