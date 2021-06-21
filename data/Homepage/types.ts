import { BarLink } from '~/components/LinksBar/types';

export interface IntroData {
  headline: string;
  body: string | string[];
  links: BarLink[];
}

export interface ProjectData {
  name: string;
  period: string;
  body: string | string[];
  links: BarLink[];
}

export interface ProjectsData {
  headline: string;
  list: ProjectData[];
}
