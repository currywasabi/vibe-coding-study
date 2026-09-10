export interface Project {
  title: string;
  status: string;
  url: string;
}

export interface Link {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  major: string;
  intro: string;
  projects: Project[];
  interests: string[];
  hobbies: string[];
  links: Link[];
}
