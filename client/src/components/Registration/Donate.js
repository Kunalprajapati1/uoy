import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { bgRegistration } from "../../actions/user";

const Donate = () => {
  const [DonorName, setDonorName] = useState("");
  const [DonorEmail, setDonorEmail] = useState("");
  const [DonorPhone, setDonorPhone] = useState("");
  const [DonorBloodGroup, setDonorBloodGroup] = useState("");
  const [DonorAddress, setDonorAddress] = useState("");
  // const [DonationAmount, setDonationAmount] = useState("");
  const dispatch = useDispatch();

  const submitDonation = async (e) => {
    e.preventDefault();

    // Email validation using a regular expression
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(DonorEmail)) {
      toast.warn("Please enter a valid email address.", {
        position: "top-center",
      });
      return;
    }

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(DonorPhone)) {
      toast.warn("Please enter a valid 10-digit phone number.", {
        position: "top-center",
      });
      return;
    }
    if (
      DonorName.trim() === "" ||
      DonorEmail.trim() === "" ||
      DonorPhone.trim() === "" ||
      DonorBloodGroup.trim() === "" ||
      DonorAddress.trim() === ""
    ) {
      toast.warn("Please fill out all required fields.", {
        position: "top-center",
      });
    } else {
      const donorSubmit = {
        DonorName,
        DonorEmail,
        DonorPhone,
        DonorBloodGroup,
        DonorAddress,
      };
      dispatch(bgRegistration(donorSubmit));
      setDonorName("");
      setDonorEmail("");
      setDonorPhone("");
      setDonorAddress("");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="relative">
        <video
          src="videos/rr.mp4"
          autoPlay={true}
          loop
          muted
          className="h-[500px] w-full object-cover opacity-100 transition-opacity duration-500 ease-in-out"
        />
        <div className="absolute backdrop-blur-md bg-[#f48d5e18] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <div className=" text-center p-8 rounded-lg">
            <h1 className=" font-main font-bold  text-xl text-center text-[#f48d5e] ">
              | Blood Donor Registration Form
            </h1>
            <h2 className="text-[#eeecf2] text-4xl mt-7 mb-1 md:p-0 px-6 text-center translate-x-[0px] font-semibold md:text-8xl font-main title-font">
             Blood Donation
            </h2>
            <h1 className="leading-relaxed md:text-3xl text-center  md:mb-5 md:w-full md:mt-10 w-full p-6 md:p-0 text-[#f48d5e]">
              Please share all your necessary details to make a donation and
              support our cause.
            </h1>
          </div>
        </div>
      </div>
      <div className="p-2  bg-[#fed5c2] md:w-full">
        <div className="  mb-20 md:w-full flex justify-center mt-20 w-full h-full ">
          <div className=" w-full flex justify-center md:w-full ">
            <div className="w-full  md:w-[1000px] rounded-xl   md:rounded-2xl bg-[#f26522] shadow-[#393939] shadow-2xl  rounded-lgdark:border  dark:border-[#f45c43]">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form className="  space-y-4 md:space-y-6">
                  <div className="w-full md:w-full p-3">
                    <label className="block">
                      <input
                        className="p-4 w-full text-[#ffffff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-[#f45c43] transition duration-200"
                        id="signUpInput1-1"
                        type="text"
                        value={DonorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        required
                        placeholder="Donor's Name*"
                      />
                    </label>
                  </div>
                  <div className="w-full md:w-full p-3">
                    <label className="block">
                      <input
                        className="p-4 w-full text-[#ffffff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-[#f45c43] transition duration-200"
                        id="signUpInput1-1"
                        type="text"
                        value={DonorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        required
                        placeholder="Donor's Email*"
                      />
                    </label>
                  </div>
                  <div className="w-full md:w-full p-3">
                    <label className="block">
                      <input
                        className="p-4 w-full text-[#ffffff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-[#f45c43] transition duration-200"
                        id="signUpInput1-1"
                        type="text"
                        value={DonorBloodGroup}
                        onChange={(e) => setDonorBloodGroup(e.target.value)}
                        required
                        placeholder="Donor's Blood Group*"
                      />
                    </label>
                  </div>
                  <div className="w-full md:w-full p-3">
                    <label className="block">
                      <input
                        className="p-4 w-full text-[#ffffff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-[#f45c43] transition duration-200"
                        id="signUpInput1-1"
                        type="number"
                        value={DonorPhone}
                        onChange={(e) => setDonorPhone(e.target.value)}
                        required
                        placeholder="Donor's Phone Number*"
                      />
                    </label>
                  </div>

                  <div className="w-full md:w-full p-3">
                    <label className="block">
                      <input
                        className="p-4 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-[#f45c43] transition duration-200"
                        id="signUpInput1-2"
                        type="email"
                        value={DonorAddress}
                        required
                        onChange={(e) => setDonorAddress(e.target.value)}
                        placeholder="Donor's Address*"
                      />
                    </label>
                  </div>

                  <div className="w-full flex justify-center p-3">
                    <button
                      type="button"
                      onClick={submitDonation}
                      className="md:translate-x-[10px] transform delay-50 bg-[#328cc141] ease-in inline-block rounded bg-primary border-2 md:hover:bg-[#73a9c8fe] px-7 pb-2.5 pt-3 text-sm font-bold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Register as Donor
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
