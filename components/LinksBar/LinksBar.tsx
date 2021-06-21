import styled from 'styled-components';
import clsx from 'clsx';

import { Props } from './types';

const Bar = styled.div(() => ({
  minHeight: '42px',
  boxShadow: '0 0.5px 0 rgba(0, 0, 0, 0.3)',
}));

const Link = styled.a(({ theme }) => ({
  ...theme.fontVariants.regular,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '20px',
  fontSize: '18px',
  lineHeight: '18px',
  textDecoration: 'none',
  marginRight: '20px',

  ':hover': {
    opacity: 0.7,
  },

  '> * + *': {
    marginLeft: '8px',
  },

  ':last-of-type': {
    marginRight: 0,
  },

  [`@media (min-width: ${theme.breakpoints.md}px)`]: {
    marginRight: '32px',
    lineHeight: '38px',
  },
}));

const LinkArrow = () => (
  <svg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg' style={{ marginTop: '-3px' }}>
    <path d='M1 9L9 1M9 1H1M9 1V9' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const externalProps = {
  target: '_blank',
  rel: 'noreferrer',
};

const LinksBar: React.FC<Props> = ({ links }) => (
  <Bar>
    {links.map(({ label, href, isExternal, isDesktopOnly }) => {
      return (
        <Link
          key={label}
          href={href}
          className={clsx(isDesktopOnly && 'desktopOnly')}
          {...(isExternal && externalProps)}
        >
          <span>{label}</span>
          <LinkArrow />
        </Link>
      );
    })}
  </Bar>
);

export default LinksBar;
