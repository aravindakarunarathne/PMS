// import { useState, useEffect } from 'react';
// import { useMedicineApi } from '../hooks/useMedicineApi';
// const MedicineForm = ({ medicine, onClose }) => {
//   const { addMedicine, updateMedicine } = useMedicineApi();
//   const [formData, setFormData] = useState({ name: '', batch: '', expiry_date: '', price: '', quantity: '' });
//   useEffect(() => {
//     if (medicine) setFormData(medicine);
//   }, [medicine]);
//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (medicine) {
//       await updateMedicine(medicine.id, formData);
//     } else {
//       await addMedicine(formData);
//     }
//     onClose();
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//       <input type="text" name="batch" placeholder="Batch" value={formData.batch} onChange={handleChange} required />
//       <input type="date" name="expiry_date" value={formData.expiry_date} onChange={handleChange} required />
//       <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
//       <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required />
//       <button type="submit">{medicine ? 'Update' : 'Add'} Medicine</button>
//       <button type="button" onClick={onClose}>Cancel</button>
//     </form>
//   );
// };
// export default MedicineForm;

//////////////////Improved code

import { useState, useEffect } from 'react';
import { useMedicineApi } from '../hooks/useMedicineApi';

const MedicineForm = ({ medicine, onClose }) => {
  const { addMedicine, updateMedicine } = useMedicineApi();
  const [formData, setFormData] = useState({ name: '', batch: '', expiry_date: '', price: '', quantity: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    if (medicine) setFormData(medicine);
  }, [medicine]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (medicine) {
        await updateMedicine(medicine.id, formData);
      } else {
        await addMedicine(formData);
      }
      onClose();
      setFormData({ name: '', batch: '', expiry_date: '', price: '', quantity: '' }); // Reset form
    } catch (err) {
      setError('Failed to save medicine. Please try again.');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="batch" placeholder="Batch" value={formData.batch} onChange={handleChange} required />
      <input type="date" name="expiry_date" value={formData.expiry_date} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
      <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required />
      <button type="submit">{medicine ? 'Update' : 'Add'} Medicine</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default MedicineForm;