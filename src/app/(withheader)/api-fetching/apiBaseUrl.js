const fallbackBaseUrl = "https://aks-furniture-server.onrender.com/web-api/";

export const apiBaseUrl = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL || fallbackBaseUrl;
  return baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
};
