import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import DOMAIN from "../../../environmentVariables";

const FeaturesCard = () => {
  const [heading, setHeading] = useState(["", "", "", ""]);
  const [descriptions, setDescriptions] = useState(["", "", "", ""]);
  const [featuresArr, setFeaturesArr] = useState([]);

  const handleHeadingInputChange = (index, value) => {
    const newHeadings = [...heading];
    newHeadings[index] = value;
    setHeading(newHeadings);
  };

  const handleDescriptionInputChange = (index, value) => {
    const newDescriptions = [...descriptions];
    newDescriptions[index] = value;
    setDescriptions(newDescriptions);
  };

  const handleSubmit = async (index) => {
    try {
      const response = await axios.post(
        `${DOMAIN}/update-feature`,
        {
          number: index + 1,
          heading: heading[index],
          description: descriptions[index],
        },
        {
          headers: {
            Authorization: localStorage.getItem("humzabaan-token"),
          },
        }
      );
      if (response.status === 200) {
        toast.success("Feature Added Successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update");
    }
  };

  const handleView = async () => {
    try {
      const response = await axios.get(`${DOMAIN}/view-features`);
      if (response.status === 200) {
        setFeaturesArr(response.data.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to view features");
    }
  };

  useEffect(() => {
    handleView();
  }, []);

  useEffect(() => {
    if (featuresArr.length >= 4) {
      setHeading(featuresArr.map((feature) => feature.heading));
      setDescriptions(featuresArr.map((feature) => feature.description));
    }
  }, [featuresArr]);

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
        <p className="text-danger m-0 p-0">write description only 198 letters</p>
      </div>
      <div className="row">
        <button className="btn btn-primary w-auto mt-4" onClick={() => handleSubmit(index)}>Submit</button>
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
