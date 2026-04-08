
export type Language = 'NL' | 'EN' | 'IT' | 'ES' | 'SE';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string;
}

export interface NavLink {
  label: string;
  href: string;
}
