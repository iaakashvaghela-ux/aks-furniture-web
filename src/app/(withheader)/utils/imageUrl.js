export const resolveImageUrl = (path, image, fallback = "") => {
  if (!image) return fallback;
  if (/^(https?:|data:image\/)/i.test(image)) return image;
  if (!path) return fallback;
  return `${path.replace(/\/?$/, "/")}${image}`;
};
