export const APP_DOMAIN = "nelsonseventplanningcorp.com";
export const APP_ADDRESS =
  "5839 Heronrise Crescent Drive, Lithia, FL 33547-5884";

export const APP = {
  name: "Nelson's Event Planning Corp",
  shortName: "Nelson's",
  slug: "nelsons-event-planning-corp",
  title: "Premium Event Planning Services",
  description: `Premium event planning services in ${APP_ADDRESS}`,
  colors: {
    blue: "#014874",
    green: "#72c825",
  },
  domain: APP_DOMAIN,
  url: `https://${APP_DOMAIN}`,
  email: `info@${APP_DOMAIN}`,
  tel: "+1 (813) 784-4766",
  telHref: "tel:+18137844766",
  address: APP_ADDRESS,
  workHours: "Monday to Friday, 9am - 5pm | Saturday 10am - 4pm",
  workHoursRichText: "Monday to Friday,<br/>9am - 5pm | Saturday 10am - 4pm",
} as const;
