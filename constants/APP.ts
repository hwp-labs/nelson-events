export const APP_DOMAIN = "nelsonseventplanningcorp.com";

export const APP = {
  name: "Nelson's Event Planning Corp",
  shortName: "Nelson's",
  slug: "nelsons-event-planning-corp",
  title:
    "Nelson's Event Planning Corp - Premium Event Planning Services in Lithia, FL",
  description: "Premium Event Planning Services in Lithia, FL",
  colors: {
    blue: "#014874",
    green: "#72c825",
  },
  domain: APP_DOMAIN,
  url: `https://${APP_DOMAIN}`,
  email: `info@${APP_DOMAIN}`,
  tel: "+1 (813) 784-4766",
  telHref: "tel:+18137844766",
  address: "5839 Heronrise Crescent Drive, Lithia, FL 33547-5884",
  workHours: "Monday to Friday, 9.00 - 17.00",
} as const;
