const MedicineModel = require('../models/medicineModel');

class MedicineService {
  static async addMedicine(data) {
    return await MedicineModel.create(data);
  }

  static async getAllMedicines() {
    return await MedicineModel.findAll();
  }

  static async updateMedicine(id, data) {
    return await MedicineModel.update(id, data);
  }

  static async deleteMedicine(id) {
    return await MedicineModel.delete(id);
  }
}

module.exports = MedicineService;
