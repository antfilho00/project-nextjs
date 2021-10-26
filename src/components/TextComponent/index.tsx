import * as Styled from './styles';

export type TextComponentProps = {
  children: string;
};

export const TextComponent = ({ children }: TextComponentProps) => {
  return <Styled.Paragraph dangerouslySetInnerHTML={{ __html: children }} />;
};
