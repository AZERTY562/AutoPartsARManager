import axios from 'axios';

const API_URL = 'http://your-api-url.com/api';

export const fetchPartDetails = async (partId: string) => {
  try {
    const response = await axios.get(`${API_URL}/parts/${partId}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des détails de la pièce:', error);
    throw error;
  }
};

export const updatePartStock = async (partId: string, quantity: number) => {
  try {
    const response = await axios.put(`${API_URL}/parts/${partId}/stock`, { quantity });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du stock de la pièce:', error);
    throw error;
  }
};

export const syncWithExternalStock = async (partId: string) => {
  try {
    const response = await axios.post(`${API_URL}/parts/${partId}/sync-stock`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la synchronisation avec le stock externe:', error);
    throw error;
  }
};

export const reservePart = async (partId: string, quantity: number) => {
  try {
    const response = await axios.post(`${API_URL}/parts/${partId}/reserve`, { quantity });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la réservation de la pièce:', error);
    throw error;
  }
};

