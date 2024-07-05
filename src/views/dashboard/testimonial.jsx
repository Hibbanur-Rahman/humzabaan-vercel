import { useRef, useState } from "react";
import DragImg from "../../assets/images/dragInput.svg";
import { toast } from "react-toastify";
import axios from "axios";
import DOMAIN from "../../../environmentVariables";

const Testimonial = () => {
  const [rating, setRating] = useState(1);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  const handleStarFill = (value) => {
    setRating(value);
    console.log(rating);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };
  const hadleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleNameInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("rating", rating);
      formData.append("profileImage", file); 
      formData.append("image", file.name); 
      formData.append("description", description);
      formData.append("name", name);
      const response = await axios.post(
        `${DOMAIN}/update-testimonial-1`,
        formData
      );
      if (response.status === 200) {
        toast.success("Testimonial added successfully");
      }
    } catch (error) {
      toast.error("Failed to update");
    }
  };

  return (
    <div className="dashboard-testimonial m-0 p-5">
      <div className="card row m-0 p-3 pt-1 ">
        <p className="m-0 p-0 text-secondary">Testimonial-1</p>

        <div className="row m-0 p-0 justify-content-between">
          <div className="w-auto m-0 p-0">
            <p className="m-0 p-0 fw-semibold">Upload Profile photo</p>
            <img
              src={file ? URL.createObjectURL(file) : DragImg}
              alt=""
              onClick={handleImageClick}
              style={{ cursor: "pointer", width: "200px", height: "100px" }}
            />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            {file && <p>{file.name}</p>}
          </div>
          <div className="w-auto">
            <p className="m-0 p-0 fw-semibold">Name/Person-Name</p>
            <input
              type="text"
              placeholder="Mirza Ghalib"
              className="input-group rounded-2 p-2"
              name="name"
              id="name"
              onChange={handleNameInputChange}
            />
          </div>
          <div className="w-auto">
            <p className="m-0 p-0 fw-semibold">Select Rating</p>

            <div className="row m-0 p-0 ">
              {[...Array(5)].map((_, index) => (
                <i
                  key={index}
                  className={`bi ${
                    rating >= index + 1 ? "bi-star-fill" : "bi-star"
                  } w-auto text-warning m-0 p-0 pe-2 fs-1`}
                  onClick={() => handleStarFill(index + 1)}
                  style={{ cursor: "pointer" }}
                ></i>
              ))}
            </div>
          </div>
        </div>
        <div className="row m-0 p-0">
          <p className="m-0 p-0 fw-semibold">Description</p>
          <textarea
            name="description"
            id="description"
            placeholder="Write Description"
            onChange={hadleDescriptionChange}
            value={description}
          ></textarea>
        </div>
        <div className="row">
          <button
            className="btn btn-primary w-auto mt-4"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
