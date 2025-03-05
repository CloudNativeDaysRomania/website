import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    { text: 'Speakers', ...LINKS.speakers },
    // { text: 'Schedule', ...LINKS.schedule },
    { text: 'Workshops', ...LINKS.workshops },
    { text: 'Sponsors', ...LINKS.sponsors },
    { text: 'Team', ...LINKS.team },
    { text: 'Archive 2024', ...LINKS.archive2024 },
  ],
  footer: [
    // { text: 'Code of Conduct', ...LINKS.conduct },
    { text: 'Mission Statement', ...LINKS.mission },
    { text: 'Team', ...LINKS.team },
    // { text: 'Data Privacy', ...LINKS.privacy },
  ],
  mobile: [
    { text: 'Speakers', ...LINKS.speakers },
    // { text: 'Schedule', ...LINKS.schedule },
    { text: 'Workshops', ...LINKS.workshops },
    { text: 'Sponsors', ...LINKS.sponsors },
    // { text: 'Get your tickets now', ...LINKS.tickets },
    { text: 'Team', ...LINKS.team },
    { text: 'Archive 2024', ...LINKS.archive2024 },
  ],
};

export default MENUS;
