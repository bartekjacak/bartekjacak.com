import styled from 'styled-components';
import { BodyProps } from './types';

export const Headline = styled.h1(({ theme }) => ({
  ...theme.fontVariants.bold,
  fontSize: '40px',
  lineHeight: '50px',
  letterSpacing: '-0.9px',
}));

export const Heading = styled.h2(({ theme }) => ({
  ...theme.fontVariants.bold,
  fontSize: '28px',
  lineHeight: '35px',
  letterSpacing: '-0.9px',
}));

export const Paragraph = styled.p(({ theme }) => ({
  ...theme.fontVariants.regular,
  fontSize: '18px',
  lineHeight: '32px',
  letterSpacing: '-0.4px',
}));

export const Caption = styled.h6(({ theme }) => ({
  ...theme.fontVariants.regular,
  fontSize: '14px',
  lineHeight: '14px',
  letterSpacing: '0.3px',
}));

const ParagraphsWrapper = styled.div(() => ({
  '> * + *': {
    marginTop: '32px',
  },
}));

export const Body: React.FC<BodyProps> = ({ content, ...props }) => (
  <>
    {typeof content === 'string' ? (
      <Paragraph dangerouslySetInnerHTML={{ __html: content }} {...props} />
    ) : (
      <ParagraphsWrapper {...props}>
        {content.map(paragraph => (
          <Paragraph key={paragraph.slice(0, 30)} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </ParagraphsWrapper>
    )}
  </>
);
