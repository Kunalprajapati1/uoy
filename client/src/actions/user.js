// import axios from 'axios';
// import { toast } from "react-toastify";

// export const contact = (userContact) => async dispatch => {
//     dispatch({type : 'USER_CONTACT_REQUEST'})
//     try {
//         const res = await axios.post('/api/user/contact',userContact);
//         dispatch({type : 'USER_CONTACT_SUCCESS'});
//         toast.success("Request Submitted Successfully!", {
//             position: "top-center",
//           });
//         // window.location.href = '/LoginDonator';

//     } catch (error) {
//         dispatch({type : 'USER_CONTACT_FAIL',payload : error});
//         toast.success(`Failed to send! ${error} encountered! Try again Later,`, {
//             position: "top-center",
//           });
//     }
// };
// export const bgRegistration = (donorSubmit) => async dispatch => {
//     dispatch({type : 'DONOR_REGISTRATION_REQUEST'})
//     try {
//         const res = await axios.post('/api/donor/submit',donorSubmit);
//         dispatch({type : 'DONOR_REGISTRATION_SUCCESS'});
//         toast.success("Details Submitted Successfully!", {
//             position: "top-center",
//           });
//         // window.location.href = '/LoginDonator';

//     } catch (error) {
//         dispatch({type : 'DONOR_REGISTRATION_FAIL',payload : error});
//         toast.success(`Failed to send! ${error} encountered! Try again Later,`, {
//             position: "top-center",
//           });
//     }
// };
// export const volunteerRegistration = (volunteerRegistrationrSubmit) => async dispatch => {
//     dispatch({type : 'VOLUNTEER_REGISTRATION_REQUEST'})
//     try {
//         const res = await axios.post('/api/volunteer/registration',volunteerRegistrationrSubmit);
//         dispatch({type : 'VOLUNTEER_REGISTRATION_SUCCESS'});
//         toast.success("Details Submitted Successfully!", {
//             position: "top-center",
//           });
//         // window.location.href = '/LoginDonator';

//     } catch (error) {
//         dispatch({type : 'VOLUNTEER_REGISTRATION_FAIL',payload : error});
//         toast.success(`Failed to send! ${error} encountered! Try again Later,`, {
//             position: "top-center",
//           });
//     }
// };

import axios from 'axios';
import { toast } from "react-toastify";

// Helper function for toast messages
const showToast = (message, type = "success") => {
    toast[type](message, {
        position: "top-center",
    });
};

export const contact = (userContact) => async (dispatch) => {
    dispatch({ type: 'USER_CONTACT_REQUEST' });
    try {
        await axios.post('/api/user/contact', userContact);
        dispatch({ type: 'USER_CONTACT_SUCCESS' });
        showToast("Request Submitted Successfully!");
        // Redirect after success
        // window.location.href = '/LoginDonator';
    } catch (error) {
        dispatch({ type: 'USER_CONTACT_FAIL', payload: error });
        showToast(`Failed to send! ${error.response.data}`, "error");
    }
};

export const bgRegistration = (donorSubmit) => async (dispatch) => {
    dispatch({ type: 'DONOR_REGISTRATION_REQUEST' });
    try {
        await axios.post('/api/donor/submit', donorSubmit);
        dispatch({ type: 'DONOR_REGISTRATION_SUCCESS' });
        showToast("Details Submitted Successfully!");
        // Redirect after success
        // window.location.href = '/LoginDonator';
    } catch (error) {
        dispatch({ type: 'DONOR_REGISTRATION_FAIL', payload: error });
        showToast(`Failed to send! ${error.response.data}`, "error");
    }
};

export const volunteerRegistration = (volunteerRegistrationSubmit) => async (dispatch) => {
    dispatch({ type: 'VOLUNTEER_REGISTRATION_REQUEST' });
    try {
        await axios.post('/api/volunteer/registration', volunteerRegistrationSubmit);
        dispatch({ type: 'VOLUNTEER_REGISTRATION_SUCCESS' });
        showToast("Details Submitted Successfully!");
        // Redirect after success
        // window.location.href = '/LoginDonator';
    } catch (error) {
        dispatch({ type: 'VOLUNTEER_REGISTRATION_FAIL', payload: error });
        showToast(`Failed to send! ${error.response.data}`, "error");
    }
};
