export const contact = {
  /** Add the office phone before publish. Leave blank to show “Request for Call”. */
  phone: "",
  /** Add the office inbox before publish. Enquiries are also saved in data/enquiries.json. */
  email: "",
  city: "Jalgaon, Maharashtra",
};

export type NavItem = {
  href: string;
  label: string;
  enquire?: boolean;
};

export const leftNav: NavItem[] = [
  { href: "/about", label: "About Us" },
  { href: "/homes", label: "Homes" },
  { href: "/#location", label: "The Location" },
  { href: "/#features", label: "Project Features" },
];

export const rightNav: NavItem[] = [
  { href: "/gallery", label: "Project Gallery" },
  { href: "/#enquire", label: "Enquire Now", enquire: true },
  { href: "/buyers", label: "Buyers" },
];

export type Home = {
  id: string;
  name: string;
  short: string;
  label: string;
  bhk: string;
  size: string;
  image: string;
  alt: string;
  card: string;
  points: string[];
};

export const homes: Home[] = [
  {
    id: "lane",
    name: "The Lane Row",
    short: "Lane Row",
    label: "Row 1",
    bhk: "2 BHK",
    size: "About 1,150 sq ft",
    image: "/images/hero-row.jpg",
    alt: "A row of two-storey sandstone homes with a garden path in front",
    card: "A 2 BHK row house with the living room toward the lane, a kitchen beside a small utility, and two bedrooms upstairs. The parking bay sits at your own front door.",
    points: [
      "Ground plus one floor",
      "Living room opening to a front court",
      "Kitchen with a side utility",
      "Two bedrooms and two bathrooms",
      "Parking bay on the lane",
    ],
  },
  {
    id: "family",
    name: "The Family Row",
    short: "Family Row",
    label: "Row 2",
    bhk: "3 BHK",
    size: "About 1,550 sq ft",
    image: "/images/overview-row.jpg",
    alt: "A curved row of brick and glass row houses facing a lawn",
    card: "A 3 BHK for a larger family. The extra room works as a study or a grandparent’s bedroom. Glass along the garden side keeps the afternoons bright.",
    points: [
      "Ground plus one floor",
      "Three bedrooms and a puja niche",
      "Kitchen opening to a rear utility",
      "A small open-to-sky patch at the back",
      "Covered parking on the lane",
    ],
  },
  {
    id: "corner",
    name: "The Corner Home",
    short: "Corner Home",
    label: "Row 3",
    bhk: "3 BHK",
    size: "About 1,800 sq ft",
    image: "/images/garden-lane.jpg",
    alt: "A tree-lined lane with row houses and benches on both sides",
    card: "An end home with a side setback, so light comes from two directions and there is room for a narrow garden along the wall.",
    points: [
      "End plot with a side setback",
      "Three bedrooms",
      "Windows on two sides",
      "Garden strip along the side wall",
      "Parking bay and a wider front court",
    ],
  },
];

export const stats = [
  {
    title: "Row Houses",
    text: "2 and 3 BHK homes. Each one has its own front door on the lane.",
  },
  {
    title: "Home Size",
    text: "From about 1,150 sq ft, planned as ground plus one floor.",
  },
  {
    title: "Private Parking",
    text: "A bay at the door, wide internal lanes, and a gated entry.",
  },
  {
    title: "Open Garden",
    text: "Shared lawns and shaded sit-outs between the rows.",
  },
];

export type Standard = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
};

export const standards: Standard[] = [
  {
    id: "design",
    title: "Design",
    subtitle: "Premium living space",
    image: "/images/living-row.jpg",
    alt: "A living and dining room opening onto a private garden",
  },
  {
    id: "open",
    title: "Open Spaces",
    subtitle: "Landscape gardens",
    image: "/images/garden-lane.jpg",
    alt: "A green pedestrian lane between two rows of homes",
  },
  {
    id: "facility",
    title: "Facility",
    subtitle: "Security and parking",
    image: "/images/gate-day.jpg",
    alt: "A gated entry with a security cabin and parking inside",
  },
  {
    id: "care",
    title: "Lane Care",
    subtitle: "Gardens and upkeep",
    image: "/images/hero-row.jpg",
    alt: "Maintained front gardens along a row of homes",
  },
];

export const gallery = [
  { src: "/images/hero-row.jpg", alt: "Sandstone row houses and a garden path", group: "Exteriors" },
  { src: "/images/overview-row.jpg", alt: "Brick and glass row houses along a lawn", group: "Exteriors" },
  { src: "/images/garden-lane.jpg", alt: "Shaded lane between the rows", group: "Exteriors" },
  { src: "/images/lane-dusk.jpg", alt: "Row houses at dusk with scooters by the doors", group: "Exteriors" },
  { src: "/images/gate-day.jpg", alt: "Gated entrance, security cabin and parking", group: "Exteriors" },
  { src: "/images/living-row.jpg", alt: "Living and dining looking into the garden", group: "Interiors" },
  { src: "/images/kitchen-row.jpg", alt: "Kitchen with a window onto a small side yard", group: "Interiors" },
];

export const buyerSteps = [
  {
    n: "01",
    title: "Walk the lane",
    text: "Visit Jalgaon and see the row in person — the width of the lane, the light in the living room, and where the scooter parks.",
  },
  {
    n: "02",
    title: "Choose a home",
    text: "Pick a 2 BHK or a 3 BHK, and say if you want a middle home or a corner with the side garden.",
  },
  {
    n: "03",
    title: "Reserve it",
    text: "The token, the agreement and the payment stages are explained at the office before anything is signed.",
  },
  {
    n: "04",
    title: "Move in",
    text: "Possession follows once your home is ready. The lane, gardens and gate stay in shared care after that.",
  },
];
