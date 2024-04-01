import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Schedule', ...LINKS.schedule },
    { text: 'Sponsors', ...LINKS.sponsors },
    { text: 'Team', ...LINKS.team },
  ],
  footer: [
    { text: 'Code of Conduct', ...LINKS.conduct },
    { text: 'Mission Statement', ...LINKS.mission },
    { text: 'Team', ...LINKS.team },
    { text: 'Data Privacy', ...LINKS.privacy },
  ],
  mobile: [
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Schedule', ...LINKS.schedule },
    { text: 'Sponsors', ...LINKS.sponsors },
    { text: 'Team', ...LINKS.team },
  ],
};

export default MENUS;
