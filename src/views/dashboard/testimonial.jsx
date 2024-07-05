import { useEffect, useRef, useState } from "react";
import DragImg from "../../assets/images/dragInput.svg";
import { toast } from "react-toastify";
import axios from "axios";
import DOMAIN from "../../../environmentVariables";

const Testimonial = () => {
  const [testimonialArr, setTestimonialArr] = useState([]);
  const [ratings, setRatings] = useState([1, 1, 1]);
  const [files, setFiles] = useState([null, null, null]);
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

  const handleSubmit = async (index, endpoint) => {
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
      setRatings(testimonialArr.map(t => t.rating));
      setDescriptions(testimonialArr.map(t => t.description));
      setNames(testimonialArr.map(t => t.name));
    }
  }, [testimonialArr]);

  const renderTestimonial = (index) => (
    <div className="card row m-0 p-3 pt-1 mt-3 mb-3" key={index}>
      <p className="m-0 p-0 text-secondary">{`Testimonial-${index + 1}`}</p>
      <div className="row m-0 p-0 justify-content-between">
        <div className="w-auto m-0 p-0">
          <p className="m-0 p-0 fw-semibold">Upload Profile photo</p>
          <img
            src={files[index] ? URL.createObjectURL(files[index]) : DragImg}
            alt=""
            onClick={() => handleImageClick(index)}
            style={{ cursor: "pointer", width: "200px", height: "100px" }}
          />
          <input
            type="file"
            ref={fileInputRefs[index]}
            style={{ display: "none" }}
            onChange={(e) => handleFileChange(index, e)}
          />
          {files[index] && <p>{files[index].name}</p>}
        </div>
        <div className="w-auto">
          <p className="m-0 p-0 fw-semibold">Name/Person-Name</p>
          <input
            type="text"
            placeholder="Name"
            className="input-group rounded-2 p-2"
            value={names[index]}
            onChange={(e) => handleInputChange(setNames, index, e.target.value)}
          />
        </div>
        <div className="w-auto">
          <p className="m-0 p-0 fw-semibold">Select Rating</p>
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
      <div className="row m-0 p-0">
        <p className="m-0 p-0 fw-semibold">Description</p>
        <textarea
          placeholder="Write Description"
          value={descriptions[index]}
          onChange={(e) =>
            handleInputChange(setDescriptions, index, e.target.value)
          }
        ></textarea>
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
