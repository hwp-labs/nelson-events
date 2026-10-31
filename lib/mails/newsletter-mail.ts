import { APP } from "@/constants/APP";
import { mailUtils } from "./utils";

export const newsletterMail = {
  subject: `${APP.name} Newsletter`,
  body: `
${mailUtils.cover}
<p></p>
Thank you for subscribing to ${APP.name} newsletter. 
<p></p>
You're now on our list for event planning tips, event checklists, and ideas to make your events run smoothly.
<p></p>
${mailUtils.regards}
`,
};
