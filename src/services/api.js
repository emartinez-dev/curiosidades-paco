import axios from 'axios';

const baseURL = 'http://econolistos.com:8000'

const API = axios.create({ baseURL });

export default {
  // Get all facts
  getFacts() {
    return API.get('/facts/');
  },
  // Get a random fact
  getRandomFact() {
    return API.get('/random/');
  },
  // Get a fact by id
  getFactById(factId) {
    return API.get(`/facts/${factId}/`);
  },
  // Create a new fact
  createFact(data) {
    return API.post('/facts/', data);
  },
  // Delete a fact by id (assuming password is also required)
  deleteFact(factId, password) {
    return API.delete(`/facts/${factId}/${password}`);
  },
};;