import { APP } from "@/constants/APP";

const cover = `<a href="${APP.url}">
  <img src="${APP.url}/social-preview.png" alt="" width="100%" />
</a>`;

const regards = `Warmly,<br/>
${APP.name}<br/>
<a href="${APP.url}">
  <img src="${APP.url}/icon.png" alt="" width="48" />
</a>`;

export const mailUtils = {
  cover,
  regards,
};
