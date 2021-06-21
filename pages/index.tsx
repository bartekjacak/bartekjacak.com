import styled from 'styled-components';

import Layout from '~/components/Layout';
import LinksBar from '~/components/LinksBar';
import { Caption, Heading, Headline, Body } from '~/components/Typography';

import { INTRO_DATA, PROJECTS_DATA } from '~/data/Homepage';
import { ProjectData } from '~/data/Homepage/types';

const Intro = styled.section(({ theme }) => ({
  padding: '168px 0 216px 0',

  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    padding: '68px 0 120px 0',
  },
}));

const Projects = styled.section(() => ({
  paddingBottom: '120px',
}));

const ProjectsList = styled.div(() => ({
  marginTop: '48px',

  '> * + *': {
    marginTop: '72px',
  },
}));

const Project = ({ name, period, body, links }: ProjectData) => (
  <div>
    <Caption style={{ marginBottom: '12px' }}>{period}</Caption>
    <Heading style={{ marginBottom: '16px' }}>{name}</Heading>
    <Body content={body} style={{ marginBottom: '36px' }} />
    <LinksBar links={links} />
  </div>
);

const Homepage: React.VFC = () => (
  <Layout>
    <Intro>
      <Headline style={{ marginBottom: '36px' }}>{INTRO_DATA.headline}</Headline>
      <Body content={INTRO_DATA.body} style={{ marginBottom: '40px' }} />
      <LinksBar links={INTRO_DATA.links} />
    </Intro>
    <Projects>
      <Headline>{PROJECTS_DATA.headline}</Headline>
      <ProjectsList>
        {PROJECTS_DATA.list.map(project => (
          <Project key={project.name} {...project} />
        ))}
      </ProjectsList>
    </Projects>
  </Layout>
);

export default Homepage;
