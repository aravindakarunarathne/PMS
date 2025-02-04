import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Medicines = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/medicines')
      .then(response => setMedicines(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Medicines</h1>
      <ul>
        {medicines.map(medicine => (
          <li key={medicine.id}>{medicine.name} - {medicine.quantity} units</li>
        ))}
      </ul>
    </div>
  );
};

export default Medicines;