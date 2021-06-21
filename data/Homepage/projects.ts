import { ProjectsData } from './types';

export const PROJECTS_DATA: ProjectsData = {
  headline: 'Exciting projects I participated in',
  list: [
    {
      name: 'MonoFocus',
      period: '2018 – present',
      body: 'Native Mac application helping you beat distractions and get things done. Have your focused task always visible in a menu bar and get reminder to go back on track after getting distracted. Created in cooperation with flatpixels.',
      links: [{ label: 'Visit Websites', href: 'http://monofocus.app/', isExternal: true }],
    },
    {
      name: '1440',
      period: '2019',
      body: `Native Mac application helping to keep a track of how many minutes you have left until the day is over. Each day has only 1440 minutes so let's try to get the most out of it. Created in cooperation with flatpixels.`,
      links: [
        { label: 'Visit Website', href: 'http://1440app.com/', isExternal: true },
        { label: 'Watch Video', href: 'https://youtu.be/rLzBDSNyiXo', isExternal: true },
      ],
    },
    {
      name: 'GitPigeon',
      period: '2020',
      body: 'Native Mac application bringing the most important GitHub notifications to your Mac. Get notified when someone mentions you, replies to or requests your review, and more. Created in cooperation with flatpixels.',
      links: [
        { label: 'Visit Website', href: 'http://gitpigeon.com/', isExternal: true },
        { label: 'Watch Video', href: 'https://youtu.be/wP1Dg4d5wJc', isExternal: true },
      ],
    },
  ],
};
