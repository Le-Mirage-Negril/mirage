export const getWedding = async () => {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  const response = await fetch(`${strapiUrl}/wedding-page?populate=*`);
  const data = await response.json();
  console.log("data", data);
  return data;
};

export const getWeddingGCards = async () => {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  const response = await fetch(`${strapiUrl}/wedding-cards?populate=*`);
  const data = await response.json();
  console.log("data", data);
  return data;
};
