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

export interface Rooms {
  name: string;
  description: string;
  image: string;
}

export interface ButtonProps {
  primary?: boolean;
  label: string;
  link: string;
}
