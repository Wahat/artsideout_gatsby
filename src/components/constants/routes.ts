interface Routes {
  name: string;
  route: string;
}

const NavLinks: Routes[] = [
  { name: 'Special Projects', route: '/special-projects' },
  { name: 'Studio', route: '/installations' },
  { name: 'Performance', route: '/performances' },
  { name: 'Workshops', route: '/workshops' },
  { name: 'artists', route: '/artists' },
  { name: 'ASO x Soundwaves', route: '/soundwaves' },
  { name: 'Sponsors', route: '/sponsors' }
];

const FestivalLinks: Routes[] = [
  { name: 'Special Projects', route: '/installations' },
  { name: 'Studio', route: '/installations' },
  { name: 'Performance', route: '/performances' },
  { name: 'Workshops', route: '/performances' }
];

const AdditionalLinks: Routes[] = [
  { name: 'Artists', route: '/artists' },
  { name: 'Team', route: '/team' },
  { name: 'ASO X SOUNDWAVES', route: '/soundwaves' }
];

const SocialLinks: Routes[] = [
  { name: 'Instagram', route: 'https://www.instagram.com/artsideout_/' },
  { name: 'Facebook', route: 'https://www.facebook.com/ARTSIDEOUT/' },
  { name: 'Twitter', route: 'https://twitter.com/ARTSIDEOUT' },
  { name: 'Website', route: 'https://artsideout.ca/' },
  { name: 'CSEC Website', route: 'https://csec.club' }
];

export { NavLinks, FestivalLinks, AdditionalLinks, SocialLinks };
