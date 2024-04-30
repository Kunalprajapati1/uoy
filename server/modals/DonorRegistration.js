const mongoose = require("mongoose");

const  BloodGroupDonorSchema = mongoose.Schema(
  {
    DonorName : {
        type : String,
        required : [true,'Name Is Required']
    },
    DonorEmail: {
        type: String,
        required: [true, 'Email is required']
    },
    DonorPhone: {
        type: Number,
        required: [true, 'Phone number is required']
    },
    DonorBloodGroup: {
        type: String,
        required: [true, 'Blood Group is required']
    },
    DonorAddress: {
        type: String,
        required: [true, 'Address is required']
    },

  },
  { timeStamps: true }
);

module.exports = mongoose.model("BloodGroupDonor", BloodGroupDonorSchema);
