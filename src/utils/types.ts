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
