export default function Clean({ data }) {
  const banned = [
    "<p>",
    "</p>",
    "<br>",
    "</br>",
    "<strong>",
    "</strong>",
    "&oacute;",
    "&aacute;",
    "&eacute;",
    "&iacute;",
    "&uacute;",
    "&Oacute;",
    "&Aacute;",
    "&Eacute;",
    "&Iacute;",
    "&Uacute;",
    "&nbsp;",
    "&lt;",
    "&rsquo;",
    "&nbsp;",
    "&Ntilde;",
  ];
  function cleanUp({ data }) {
    let cleaned = { data }.data;
    for (let i = 0; i < banned.length; i++)
      cleaned = cleaned.replaceAll(banned[i], "");
    return cleaned;
  }
  return cleanUp({ data });
}
