import { useEffect, useRef, useState } from "react";
import DragImg from "../../assets/images/dragInput.svg";
import { toast } from "react-toastify";
import axios from "axios";
import DOMAIN from "../../../environmentVariables";

const Testimonial = () => {
  const [testimonialArr, setTestimonialArr] = useState([]);
  const [ratings, setRatings] = useState([1, 1, 1]);
  const [files, setFiles] = useState([null, null, null]);
  const [backendImages, setBackendImages] = useState(["", "", ""]);
  const fileInputRefs = [useRef(null), useRef(null), useRef(null)];
  const [descriptions, setDescriptions] = useState(["", "", ""]);
  const [names, setNames] = useState(["", "", ""]);

  const handleStarFill = (index, value) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);
  };

  const handleImageClick = (index) => {
    fileInputRefs[index].current.click();
  };

  const handleFileChange = (index, event) => {
    const selectedFile = event.target.files[0];
    const newFiles = [...files];
    newFiles[index] = selectedFile;
    setFiles(newFiles);
  };

  const handleInputChange = (setter, index, value) => {
    const newValues = [...setter];
    newValues[index] = value;
    setter(newValues);
  };

  const handleSubmit = async (index) => {
    try {
      const formData = new FormData();
      formData.append("rating", ratings[index]);
      formData.append("profileImage", files[index]);
      formData.append("image", files[index]?.name || "");
      formData.append("description", descriptions[index]);
      formData.append("name", names[index]);
      const response = await axios.post(
        `${DOMAIN}/update-testimonial-${index + 1}`,
        formData
      );
      if (response.status === 200) {
        toast.success("Testimonial added successfully");
      }
    } catch (error) {
      toast.error("Failed to update");
    }
  };

  const handleViewTestimonial = async () => {
    try {
      const response = await axios.post(`${DOMAIN}/view-testimonial`, {
        headers: {
          Authorization: localStorage.getItem("humzabaan-token"),
        },
      });
      if (response.status === 200) {
        setTestimonialArr(response.data.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to view Testimonial");
    }
  };

  useEffect(() => {
    handleViewTestimonial();
  }, []);

  useEffect(() => {
    if (testimonialArr.length >= 3) {
      setRatings(testimonialArr.map((t) => t.rating));
      setDescriptions(testimonialArr.map((t) => t.description));
      setNames(testimonialArr.map((t) => t.name));
      setBackendImages(testimonialArr.map((t) => t.image));
    }
  }, [testimonialArr]);

  const renderTestimonial = (index) => (
    <div className="card row m-0 p-4 pt-3 mt-5 mb-5 rounded-5" key={index}>
      <p className="m-0 p-0 text-secondary">{`Testimonial-${index + 1}`}</p>
      <div className="row m-0 p-0 justify-content-between mt-3">
        <div className="w-auto m-0 p-0">
          <p className="m-0 p-0 fw-semibold mb-2">Upload Profile photo</p>
          {files[index] ? (
            <img
              src={URL.createObjectURL(files[index])}
              alt=""
              onClick={() => handleImageClick(index)}
              style={{ cursor: "pointer", width: "200px", height: "100px" }}
              className="rounded-4 overflow-hidden"
            />
          ) : backendImages[index] ? (
            <img
              src={`${DOMAIN}/uploads/${backendImages[index]}`}
              alt=""
              onClick={() => handleImageClick(index)}
              style={{ cursor: "pointer", width: "200px", height: "100px" }}
              className="rounded-4 overflow-hidden"

            />
          ) : (
            <img
              src={DragImg}
              alt=""
              onClick={() => handleImageClick(index)}
              style={{ cursor: "pointer", width: "200px", height: "100px" }}
            />
          )}

          <input
            type="file"
            ref={fileInputRefs[index]}
            style={{ display: "none" }}
            onChange={(e) => handleFileChange(index, e)}
          />
          {files[index] && <p>{files[index].name}</p>}
        </div>
        <div className="w-auto">
          <p className="m-0 p-0 fw-semibold  mb-2">Name/Person-Name</p>
          <input
            type="text"
            placeholder="Name"
            className="input-group  p-2 rounded-3 border border-1 bg-light"
            value={names[index]}
            onChange={(e) => handleInputChange(setNames, index, e.target.value)}
          />
        </div>
        <div className="w-auto">
          <p className="m-0 p-0 fw-semibold  mb-2">Select Rating</p>
          <div className="row m-0 p-0">
            {[...Array(5)].map((_, starIndex) => (
              <i
                key={starIndex}
                className={`bi ${
                  ratings[index] >= starIndex + 1 ? "bi-star-fill" : "bi-star"
                } w-auto text-warning m-0 p-0 pe-2 fs-1`}
                onClick={() => handleStarFill(index, starIndex + 1)}
                style={{ cursor: "pointer" }}
              ></i>
            ))}
          </div>
        </div>
      </div>
      <div className="row m-0 p-0 mt-4">
        <p className="m-0 p-0 fw-semibold mb-2">Description</p>
        <textarea
          className="m-0 p-2 rounded-3 border border-1 bg-light"
          placeholder="Write Description"
          value={descriptions[index]}
          onChange={(e) =>
            handleInputChange(setDescriptions, index, e.target.value)
          }
        ></textarea>
        <p className="text-danger m-0 p-0">write description only 198 letters</p>
      </div>
      <div className="row">
        <button
          className="btn btn-primary w-auto mt-4"
          onClick={() => handleSubmit(index, `update-testimonial-${index + 1}`)}
        >
          Submit
        </button>
      </div>
    </div>
  );

  return (
    <div className="dashboard-testimonial m-0 p-5">
      {Array.from({ length: 3 }).map((_, index) => renderTestimonial(index))}
    </div>
  );
};

export default Testimonial;
