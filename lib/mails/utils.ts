import { APP } from "@/constants/APP";

const cover = `<a href="${APP.url}">
  <img src="${APP.url}/images/cover.png" alt="" width="100%" />
</a>
<p></p>`;

const regards = `<p style="margin-top:25px;"></p>
Regards,<br/>
<a href="${APP.url}">
  <img src="${APP.url}/icon.png" alt="" width="48" />
</a><br/>
${APP.name}`;

export const mailUtils = {
  cover,
  regards,
};
