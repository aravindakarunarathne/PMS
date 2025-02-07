// import { useContext } from "react";
// import axios from "axios";
// import { MedicineContext } from "../context/MedicineContext"; // Import if you are using context
// import { useMedicine } from "../hooks/useMedicine";

// export const useMedicineApi = () => {
//     const { fetchMedicines } = useMedicine();
    
//     const addMedicine = async (data) => {
//       await axios.post('http://localhost:5000/api/medicines', data);
//       fetchMedicines();
//     };
  
//     const updateMedicine = async (id, data) => {
//       await axios.put(`http://localhost:5000/api/medicines/${id}`, data);
//       fetchMedicines();
//     };
  
//     const deleteMedicine = async (id) => {
//       await axios.delete(`http://localhost:5000/api/medicines/${id}`);
//       fetchMedicines();
//     };
  
//     return { addMedicine, updateMedicine, deleteMedicine };
//   };

//////////////Error Correction

import axios from 'axios';
import { useMedicine } from '../context/MedicineContext'; // Correct import path

export const useMedicineApi = () => {
  const { fetchMedicines } = useMedicine();

  const addMedicine = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/medicines', data);
      fetchMedicines();
    } catch (err) {
      console.error('Error adding medicine:', err);
    }
  };

  const updateMedicine = async (id, data) => {
    try {
      await axios.put(`http://localhost:5000/api/medicines/${id}`, data);
      fetchMedicines();
    } catch (err) {
      console.error('Error updating medicine:', err);
    }
  };

  const deleteMedicine = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/medicines/${id}`);
      fetchMedicines();
    } catch (err) {
      console.error('Error deleting medicine:', err);
    }
  };

  return { addMedicine, updateMedicine, deleteMedicine };
};
