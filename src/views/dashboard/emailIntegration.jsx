import axios from "axios";
import { toast } from "react-toastify";
import DOMAIN from "../../../environmentVariables";
import { useEffect, useState } from "react";
import { json2csv } from "json-2-csv";

const EmailIntegration = () => {
  const [messageArr, setMessageArr] = useState([]);

  const handleViewMessages = async () => {
    try {
      const response = await axios.post(`${DOMAIN}/view-messages`, {
        headers: {
          Authorization: localStorage.getItem("humzabaan-token"),
        },
      });
      if (response.status === 200) {
        setMessageArr(response.data.data);
      }
    } catch (error) {
      console.log("Error in view messages:", error);
      toast.error("Failed to view messages");
    }
  };

  useEffect(() => {
    handleViewMessages();
  }, []);

  const exportToCsv = () => {
    const dataToConvert = messageArr.map((item) => ({
      name: item.name,
      email: item.email,
      message: item.message,
    }));

    json2csv(dataToConvert, (err, csv) => {
      if (err) {
        console.error("Error converting to CSV:", err);
        return;
      }

      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.setAttribute("download", "messages.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <div className="email-section m-0 p-5 ">
      <p className="m-0 p-0 text-secondary">Query Form</p>
      <div className="card row m-0 p-4 pt-3 mt-2 mb-5 rounded-5">
        <div className="row m-0 mb-4 p-0">
          <div className="col-1 m-0 p-0">
            <p className="m-0 p-0 fw-semibold fs-5">Sr.No.</p>
          </div>
          <div className="col-2 m-0 p-0">
            <p className="m-0 p-0 fw-semibold fs-5">Username</p>
          </div>
          <div className="col-3 m-0 p-0">
            <p className="m-0 p-0 fw-semibold fs-5">Email</p>
          </div>
          <div className="col-4 m-0 p-0">
            <p className="m-0 p-0 fw-semibold fs-5">Message</p>
          </div>
        </div>
        {Array.isArray(messageArr) &&
          messageArr.map((item, index) => (
            <div
              key={item._id}
              className="message-item-row row m-0 p-0 pb-3 pt-3 align-items-center border border-1 border-top-0 border-start-0 border-end-0"
            >
              <div className="col-1 m-0 p-0">
                <p className="m-0 p-0 ">{index + 1}</p>
              </div>
              <div className="col-2 m-0 p-0">
                <p className="m-0 p-0 ">{item.name}</p>
              </div>
              <div className="col-3 m-0 p-0">
                <p className="m-0 p-0 ">{item.email}</p>
              </div>
              <div className="message-cell col-4 m-0 p-0">
                <p className="m-0 p-0 ">{item.message}</p>
              </div>
              <div className="col-2">
                <div
                  className="w-auto d-flex align-items-center justify-content-center py-1 px-2 rounded-3"
                  style={{ backgroundColor: "#E3FCE2", cursor: "pointer" }}
                >
                  <i className="bi bi-eye text-success w-auto fs-5 me-2"></i>
                  <p className="m-0 p-0 text-success w-auto">View</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <button onClick={exportToCsv} className="btn btn-primary">
        Export to CSV
      </button>
    </div>
  );
};

export default EmailIntegration;
