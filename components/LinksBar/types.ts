import { Link } from '~/data/types';

export interface BarLink extends Link {
  isDesktopOnly?: boolean;
}

export interface Props {
  links: BarLink[];
}
