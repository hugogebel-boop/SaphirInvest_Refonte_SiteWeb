export const site = {
  name: "Saphir Invest SA",
  tagline: "Gestion de patrimoine",
  phone: "+41 21 648 00 16",
  address: {
    street: "Rue du Grand-Chêne 6",
    postal: "1003 Lausanne",
    country: "Suisse",
    full: "Rue du Grand-Chêne 6, 1003 Lausanne, Suisse",
  },
  mapUrl:
    "https://maps.google.com/maps?q=Rue%20du%20Grand-Ch%C3%AAne%206%2C%20Lausanne%2C%20Suisse&t=m&z=16&output=embed",
  footer: {
    art: "Art : 'Times Square' by Louis Magre",
    artUrl: "https://louismagre.com",
    copyright: "© 2013-2026 - Saphir Invest SA",
    impressumFr: "/mentions-legales",
    impressumEn: "/impressum",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Bienvenue" },
  { href: "/valeurs/", label: "Approche et Valeurs" },
  { href: "/equipe/", label: "Équipe" },
  { href: "/nous-contacter/#contact", label: "Contact" },
  { href: "/en/welcome/", label: "English" },
] as const;
