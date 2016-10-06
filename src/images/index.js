/** UTILS **/
function generatePNG(data) {
  return "data:image/png;base64," + data;
}

export const imageDefault = {
  avatar: generatePNG(require("base64!./avatarDefault.png"))
}