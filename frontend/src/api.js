import axios from 'axios';


const API_BASE = 'import.meta.env.VITE_API_BASE';

export const api = {
  submitContact: (data) => axios.post(`${API_BASE}/contact`, data),
  submitAdmission: (data) => axios.post(`${API_BASE}/admission`, data),
  getStudents: () => axios.get(`${API_BASE}/students`),
  deleteStudent: (id) => axios.delete(`${API_BASE}/student/${id}`),
};