// import { useState } from 'react';
// import { useMedicine } from '../context/MedicineContext';
// import { useMedicineApi } from '../hooks/useMedicineApi';
// import MedicineForm from './MedicineForm';
// const MedicineList = () => {
//   const { medicines, loading } = useMedicine();
//   const { deleteMedicine } = useMedicineApi();
//   const [editingMedicine, setEditingMedicine] = useState(null);
//   if (loading) return <p>Loading...</p>;
//   return (
//     <div>
//       <h1>Medicine Stock</h1>
//       <MedicineForm onClose={() => setEditingMedicine(null)} />
//       <ul>
//         {medicines.map((medicine) => (
//           <li key={medicine.id}>
//             {medicine.name} - {medicine.quantity} units
//             <button onClick={() => setEditingMedicine(medicine)}>Edit</button>
//             <button onClick={() => deleteMedicine(medicine.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       {editingMedicine && <MedicineForm medicine={editingMedicine} onClose={() => setEditingMedicine(null)} />}
//     </div>
//   );
// };
// export default MedicineList;

//////////////// Improved code

// import { useState } from 'react';
// import { useMedicine } from '../context/MedicineContext';
// import { useMedicineApi } from '../hooks/useMedicineApi';
// import MedicineForm from './MedicineForm';

// const MedicineList = () => {
//   const { medicines, loading, fetchMedicines } = useMedicine();
//   const { deleteMedicine } = useMedicineApi();
//   const [editingMedicine, setEditingMedicine] = useState(null);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1>Medicine Stock</h1>
//       <button onClick={() => setEditingMedicine({})}>Add New Medicine</button>
//       <ul>
//         {medicines.map((medicine) => (
//           <li key={medicine.id}>
//             {medicine.name} - {medicine.quantity} units
//             <button onClick={() => setEditingMedicine(medicine)}>Edit</button>
//             <button onClick={() => deleteMedicine(medicine.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       {editingMedicine && (
//         <MedicineForm
//           medicine={editingMedicine}
//           onClose={() => setEditingMedicine(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default MedicineList;

/////////////////Error correction code

import { useState } from 'react';
import { useMedicine } from '../context/MedicineContext';
import { useMedicineApi } from '../hooks/useMedicineApi';
import MedicineForm from './MedicineForm';

const MedicineList = () => {
  const { medicines, loading } = useMedicine();
  const { deleteMedicine } = useMedicineApi();
  const [editingMedicine, setEditingMedicine] = useState(null);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Medicine Stock</h1>
      <button onClick={() => setEditingMedicine({})}>Add New Medicine</button>
      <ul>
        {medicines.map((medicine) => (
          <li key={medicine.id}>
            {medicine.name} - {medicine.quantity} units
            <button onClick={() => setEditingMedicine(medicine)}>Edit</button>
            <button onClick={() => deleteMedicine(medicine.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {editingMedicine && (
        <MedicineForm
          medicine={editingMedicine}
          onClose={() => setEditingMedicine(null)}
        />
      )}
    </div>
  );
};

export default MedicineList;

