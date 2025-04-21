export const getHomepage = async () => {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  const response = await fetch(`${strapiUrl}/homepage?populate=*`);
  return response.json();
};
