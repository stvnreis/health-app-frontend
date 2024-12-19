export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "HealthApp",
  description: "Acompanhe seus treinos e alimentação.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Exercícios",
      href: "/exercicios",
    },
  ],
  navMenuItems: [
    {
      label: "Exercícios",
      href: "/exercicios",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
