export interface Links {
  name: string;
  link: string;
  submenu: boolean;
  sublinks?: Sublinks[];
}

export interface Sublinks {
  name: string;
  link: string;
}

export interface AmenitiesCardData {
  index: number;
  src: string;
  title: string;
  body: string;
  link: string;
}
