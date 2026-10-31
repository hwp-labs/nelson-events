import { APP } from "@/constants/APP";
import { mailUtils } from "./utils";

export const contactUsMail = {
  subject: `Thank You For Contacting Us`,
  body: `
${mailUtils.cover}
<p></p>
Thank you for contacting ${APP.name}. 
<p></p>
We have received your message and will get back to you within 1-2 business days with more details to share about your event.
<p></p>
${mailUtils.regards}
`,
};
