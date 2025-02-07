// // src/context/MedicineContext.js
// import { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// const MedicineContext = createContext();
// export const useMedicine = () => useContext(MedicineContext);
// export const MedicineProvider = ({ children }) => {
//   const [medicines, setMedicines] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const fetchMedicines = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:5000/api/medicines');
//       setMedicines(response.data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchMedicines();
//   }, []);
//   return (
//     <MedicineContext.Provider value={{ medicines, fetchMedicines, loading }}>
//       {children}
//     </MedicineContext.Provider>
//   );
// };

/////////////Improved code
// import axios from 'axios';
// import { useMedicine } from '../context/MedicineContext';
// import { createContext, useContext, useState, useEffect } from 'react';

// export const useMedicineApi = () => {
//   const { fetchMedicines } = useMedicine();

//   const addMedicine = async (data) => {
//     try {
//       await axios.post('http://localhost:5000/api/medicines', data);
//       fetchMedicines();
//     } catch (err) {
//       console.error('Error adding medicine:', err);
//     }
//   };

//   const updateMedicine = async (id, data) => {
//     try {
//       await axios.put(`http://localhost:5000/api/medicines/${id}`, data);
//       fetchMedicines();
//     } catch (err) {
//       console.error('Error updating medicine:', err);
//     }
//   };

//   const deleteMedicine = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/medicines/${id}`);
//       fetchMedicines();
//     } catch (err) {
//       console.error('Error deleting medicine:', err);
//     }
//   };

//   return { addMedicine, updateMedicine, deleteMedicine };
// };

/////////////////Error Correction code

import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const MedicineContext = createContext();

export const useMedicine = () => useContext(MedicineContext);

export const MedicineProvider = ({ children }) => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMedicines = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/medicines');
      setMedicines(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  return (
    <MedicineContext.Provider value={{ medicines, fetchMedicines, loading }}>
      {children}
    </MedicineContext.Provider>
  );
};


