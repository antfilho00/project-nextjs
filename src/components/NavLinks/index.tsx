import { MenuLink, MenuLinkProps } from '../MenuLink';
import * as Styled from './styles';

export type NavLinksProps = {
  links?: MenuLinkProps[];
};

export const NavLinks = ({ links = [] }: NavLinksProps) => {
  return (
    <Styled.NavLink>
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.NavLink>
  );
};
