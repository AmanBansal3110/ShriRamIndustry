import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Replace with your actual API base URL

export const fetchProducts = async ({ categoryid, page = 1, limit = 12, searchTerm = '', priceRange = 1000, sortOrder = 'asc' }) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/category/${categoryid}/products`, {
      params: {
        page,
        limit,
        search: searchTerm,
        maxPrice: priceRange,
        sort: sortOrder
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchCategory = async (categoryid) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/category/${categoryid}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching category:', error);
    throw error;
  }
};
