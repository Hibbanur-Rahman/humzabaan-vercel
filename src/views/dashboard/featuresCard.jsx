import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import DOMAIN from "../../../environmentVariables";

const FeaturesCard = () => {
  const [heading, setHeading] = useState(["", "", "", ""]);
  const [descriptions, setDescriptions] = useState(["", "", "", ""]);

  const handleHeadingInputChange = (index, value) => {
    setHeading([...heading]);
    heading[index] = value;
    setHeading([...heading, heading[index]]);
  };
  const handleDescriptionInputChange = (index, value) => {
    setDescriptions([...descriptions]);
    descriptions[index] = value;
    setDescriptions([...descriptions, descriptions[index]]);
  };

  const handleSubmit = async (index) => {
    try {
      const response = await axios.post(`${DOMAIN}/feature-${index}`, {
        heading: heading[index],
        description: descriptions[index],
      });
      if(response.status===200){
        toast.success("Feature Added Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update");
    }
  };

  const renderCard = (index) => (
    <div className="card row m-0 p-4 pt-3 mt-5 mb-5 rounded-5" key={index}>
      <p className="m-0 p-0 text-secondary">{`card-${index + 1}`}</p>
      <div className="row m-0 p-0 justify-content-between mt-3">
        <p className="m-0 p-0 fw-semibold  mb-2">Heading</p>
        <input
          type="text"
          placeholder="Name"
          className="input-group  p-2 rounded-3 border border-1 bg-light"
          value={heading[index]}
          onChange={(e) => handleHeadingInputChange(index, e.target.value)}
        />
      </div>
      <div className="row m-0 p-0 mt-4">
        <p className="m-0 p-0 fw-semibold mb-2">Description</p>
        <textarea
          className="m-0 p-2 rounded-3 border border-1 bg-light"
          placeholder="Write Description"
          value={descriptions[index]}
          onChange={(e) => handleDescriptionInputChange(index, e.target.value)}
        ></textarea>
        <p className="text-danger m-0 p-0">
          write description only 198 letters
        </p>
      </div>
      <div className="row">
        <button className="btn btn-primary w-auto mt-4">Submit</button>
      </div>
    </div>
  );

  return (
    <div className="features-section  m-0 p-5">
      {Array.from({ length: 4 }).map((_, index) => renderCard(index))}
    </div>
  );
};

export default FeaturesCard;
