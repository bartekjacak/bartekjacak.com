import styled from 'styled-components';

import Layout from '~/components/Layout';

const Intro = styled.div(() => ({
  padding: '168px 0 216px 0',
}));

const Heading = styled.h1(({ theme }) => ({
  ...theme.fontVariants.bold,
  fontSize: '40px',
  lineHeight: '50px',
  letterSpacing: '-0.9px',
  margin: '0 0 36px 0',
}));

const ParagraphsWrapper = styled.div(() => ({
  ['> * + *']: {
    marginTop: '32px',
  },
}));

const Paragraph = styled.p(() => ({
  fontSize: '18px',
  lineHeight: '32px',
  letterSpacing: '-0.4px',
  marginBottom: 0,
  ['a']: {
    textDecoration: 'underline',
    '-webkit-text-decoration-skip': 'none',
    [':hover']: {
      textDecoration: 'none',
      opacity: 0.7,
    },
  },
}));

const Homepage: React.VFC = () => (
  <Layout>
    <Intro>
      <Heading>I’m Bartłomiej, digital creator with artistic interests.</Heading>
      <ParagraphsWrapper>
        <Paragraph>
          Currently, I’m a Computer Science student at Warsaw University of Technology and a software engineer at{' '}
          <a href='https://www.swing.dev/' target='_blank' rel='noreferrer'>
            Swing
          </a>
          , where I help companies grow by making their products successful. My goal is to make web apps smooth and fast
          for all the users. All with use of modern web technologies.
        </Paragraph>
        <Paragraph>
          Besides, I’m a proud co-founder of{' '}
          <a href='http://flatpixels.pl/' target='_blank' rel='noreferrer'>
            flatpixels
          </a>
          . As for now, we’re focused on building native Mac apps, but we’ve had quite a journey in the past. From Unity
          games, to Ghost themes. We’ve tried it all.
        </Paragraph>
        <Paragraph>
          Ocasionally, I work as a semi-professional photographer. Mainly taking photorelations. Find my photos on{' '}
          <a href='https://www.instagram.com/bartekjacak/' target='_blank' rel='noreferrer'>
            Instagram
          </a>
          ,{' '}
          <a href='https://www.facebook.com/jacakfoto' target='_blank' rel='noreferrer'>
            Facebook Page
          </a>{' '}
          or my{' '}
          <a href='https://tookapic.com/bartlomiej' target='_blank' rel='noreferrer'>
            Tookapic
          </a>{' '}
          where I post them daily. One photo a day, for over 1700 days. Meaning that almost ¼ of my life is documented
          on everyday photos.
        </Paragraph>
      </ParagraphsWrapper>
    </Intro>
  </Layout>
);

export default Homepage;
