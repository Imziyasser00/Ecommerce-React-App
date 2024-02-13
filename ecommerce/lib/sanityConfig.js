import axios from 'axios';

const projectId = 't1dg8ne4';
const dataset = 'production';
const apiVersion = '2024-02-13';
const sanityToken = process.env.NEXT_PUBLIC_SANITY_TOKEN;
const useCdn = true;

const baseUrl = `https://${projectId}.api.sanity.io/v1`;
const cdnUrl = useCdn ? `${baseUrl}/cdn` : baseUrl;

export const urlFor = (source) => {
  const imageUrl = `${cdnUrl}/images/${dataset}/${apiVersion}/${encodeURIComponent(source)}`;

  // If a Sanity token is provided, add it to the URL
  const finalUrl = sanityToken ? `${imageUrl}?token=${sanityToken}` : imageUrl;

  return finalUrl;
};

// Example of using axios to fetch data from Sanity
export const fetchDataFromSanity = async (documentId) => {
  try {
    const response = await axios.get(`${baseUrl}/data/${dataset}/${apiVersion}/documents/${documentId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    throw error;
  }
};
