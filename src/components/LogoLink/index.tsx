import * as Styled from './styles';
import { Heading } from '../Heading';

export type LogoLinkProps = {
  text: string;
  srcImg?: string;
  link: string;
};

export const LogoLink = ({ text, srcImg = '', link }: LogoLinkProps) => {
  return (
    <Heading size="small" uppercase={true}>
      <Styled.LogoLink href={link}>
        {srcImg ? <img src={srcImg} alt={text} /> : text}
      </Styled.LogoLink>
    </Heading>
  );
};
