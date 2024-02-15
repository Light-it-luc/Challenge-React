import { BravoIcon, AlphaIcon, CharlieIcon, ExtraIcon } from "../ui/icons";

export const subscriptions = {
  bravo: {
    name: "Bravo",
    monthlyPrice: 10,
    weeklyPrice: 3,
    subheading: "Complete documentation",
    description: "Working materials in Sketch",
    icon: BravoIcon,
    featured: false,
  },
  alpha: {
    name: "Alpha",
    monthlyPrice: 67,
    weeklyPrice: 23,
    subheading: "Working materials in EPS",
    description: "6 months access to the library",
    icon: AlphaIcon,
    featured: true,
  },
  charlie: {
    name: "Charlie",
    monthlyPrice: 69,
    weeklyPrice: 25,
    subheading: "Working materials in PSD",
    description: "1 year access to the library",
    icon: CharlieIcon,
    featured: false,
  },
  extra: {
    name: "Extra",
    monthlyPrice: 159,
    weeklyPrice: 42,
    subheading: "Complete documentation",
    description: "2GB cloud storage",
    icon: ExtraIcon,
    featured: false,
  },
};
