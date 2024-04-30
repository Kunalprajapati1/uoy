const mongoose = require("mongoose");

const  volunteerRegistrationSchema = mongoose.Schema(
  {
    VolunteerName : {
        type : String,
        required : [true,'Name Is Required']
    },
    VolunteerEmail: {
        type: String,
        required: [true, 'Email is required']
    },
    VolunteerPhone: {
        type: Number,
        required: [true, 'Phone number is required']
    },
    VolunteerBloodGroup: {
        type: String,
        required: [true, 'Blood Group is required']
    },
    VolunteerAddress: {
        type: String,
        required: [true, 'Address is required']
    },

  },
  { timeStamps: true }
);

module.exports = mongoose.model("volunteerregistration", volunteerRegistrationSchema);
