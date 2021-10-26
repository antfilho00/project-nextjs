import * as Styled from './styles';
import { Heading } from '../Heading';

export type LogoLinkProps = {
  text: string;
  srcImg?: string;
  link: string;
  newTab?: boolean;
};

export const LogoLink = ({
  text,
  srcImg = '',
  link,
  newTab = false,
}: LogoLinkProps) => {
  const target = newTab ? '_blank' : '_self';

  return (
    <Heading size="small" uppercase={true}>
      <Styled.LogoLink href={link} target={target}>
        {srcImg ? <img src={srcImg} alt={text} /> : text}
      </Styled.LogoLink>
    </Heading>
  );
};
