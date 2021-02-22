
export type Image = {
  src: string;
  alt: string;
};

export type Favicon = {
  src: string;
};

export type Project = {
  name: string;
  description: string;
  homepage: string;
  repository: string;
  type: string;
  publishedDate: string;
  logo: Image;
};

export type AboutMe = {
  markdown: string;
  profile: Image;
};

export type SocialLink = {
  url: string;
  name: string;
  icon: string;
};

export type Landing = {
  name: string;
  roles: string[];
  description: string;
  socialLinks: SocialLink[];
};
