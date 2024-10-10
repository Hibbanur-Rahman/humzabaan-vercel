import { useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ButtonNew from "../components/buttonNew";
import { toast } from "react-toastify";
import "../assets/styles/main.scss";
import "../assets/styles/privacyPolicy.scss";

const ManageYourData = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async () => {
    try {
      toast.success("Message submitted successfully");

      const submitModal = document.getElementById("submitModal");

      // Initialize Bootstrap modal programmatically and show it
      const bootstrapModal = new bootstrap.Modal(submitModal);
      bootstrapModal.show();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="community-guidelines row m-0 p-0 flex-column bg-white align-items-center overflow-x-hidden">
      <Navbar />
      <div
        className="community-guidelines-container col-10 p-0 position-relative mt-5"
        style={{ marginBottom: "10rem" }}
      >
        <h2>Request to Delete Personal Data</h2>
        <p>
          We respect your privacy and are committed to protecting your personal
          information. If you would like us to delete your account and
          associated data, please fill out the form below, and we will process
          your request within 15 days.
        </p>

        <h3>Process Outline</h3>
        <ul className="ps-5">
          <li className="font-semibold fs-5">How the process works</li>
          <ul className="ps-3">
            <li>Step 1: Fill out the form with the requested information.</li>
            <li>Step 2: Our team will review your request.</li>
            <li>
              Step 3: We will process your request and permanently delete the
              data within 15 days.
            </li>
          </ul>
        </ul>

        <div className="row d-flex justify-content-center align-items-center my-5">
          <form className="col-12 col-lg-6 m-0 p-0">
            <h3>Account & Data Deletion Request Form</h3>

            <div className="row m-0 p-0 mb-3">
              <label htmlFor="fullName" className="mb-2 fw-semibold m-0 p-0">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                className="rounded-4 p-2 px-3"
                style={{ border: "1px solid #808080", outline: "none" }}
                type="text"
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="row m-0 p-0 mb-3">
              <label htmlFor="email" className="mb-2 fw-semibold m-0 p-0">
                Email *
              </label>
              <input
                id="email"
                name="email"
                className="rounded-4 p-2 px-3"
                style={{ border: "1px solid #808080", outline: "none" }}
                type="email"
                required
                placeholder="Enter the email address associated with your account"
              />
              <p className="m-0 p-0">
                Note: This email will be used to contact you regarding your
                request.
              </p>
            </div>

            <div className="row m-0 p-0 mb-3">
              <label
                htmlFor="reasonForDeletion"
                className="mb-2 fw-semibold m-0 p-0"
              >
                Reason for Deletion
              </label>
              <select
                id="reasonForDeletion"
                name="reasonForDeletion"
                className="rounded-4 p-2 px-3"
                style={{ border: "1px solid #808080", outline: "none" }}
              >
                <option value="privacy concerns">Privacy concerns</option>
                <option value="no longer using the service">
                  No longer using the service
                </option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="row m-0 p-0 mb-3">
              <label
                htmlFor="additionalComments"
                className="mb-2 fw-semibold m-0 p-0"
              >
                Additional Comments
              </label>
              <textarea
                id="additionalComments"
                className="rounded-4 p-2 px-3"
                style={{
                  border: "1px solid #808080",
                  outline: "none",
                  resize: "none",
                  height:'150px'
                }}
                placeholder="Provide any additional information to help us process your request."
              />
            </div>

            <div className="d-flex m-0 p-0 mb-3 align-items-center gap-3">
              <input type="checkbox" id="confirmDeletion" className="m-0 p-0" />
              <label htmlFor="confirmDeletion" className="m-0 p-0">
                I understand this action will result in permanent deletion of my
                account and data.
              </label>
            </div>

            <div
              className="d-flex w-auto justify-content-center align-items-center"
              onClick={handleSubmit}
            >
              <ButtonNew
                content="Submit"
                btnCtmBackground="radial-gradient(#3e60f4 , #041ec8)"
                boxShadow="0px 4px #00139e"
                lineBackground="#3e60f4"
                outerBtnBorder="1px solid #000d9c"
                innerBtnBorder="2px dashed #fff"
                lineUpperOverlayBg="#1d3ae2"
              />
            </div>
          </form>
        </div>
      </div>

      <div
        class="modal fade"
        id="submitModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered">
          <div className="bg-white d-flex flex-column  justify-content-center align-items-center w-100 p-5 rounded-5">
            <h4 className="text-center">Thank you for your request!</h4>
            <p className="text-center">
              We have received your request to delete your personal data. Our
              team will review your submission and reach out to you via email
              within the next 5 business days. If your request is approved, your
              data will be permanently deleted within 15 days.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ManageYourData;
