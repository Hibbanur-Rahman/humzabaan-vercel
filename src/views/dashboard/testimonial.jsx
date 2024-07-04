const Testimonial = () => {
  return (
    <div className="dashboard-testimonial  m-0 p-5">
      <div className="card row m-0 p-3 pt-1">
        <p className="m-0 p-0 text-secondary">Testimonial-1</p>
        <div className="row m-0 p-0">
          <div className="col-6 m-0 p-0">
            <p className="m-0 p-0 fw-semibold">Upload Profile photo</p>
            <input type="file" />
          </div>
          <div className="col-6">
            <p className="m-0 p-0 fw-semibold">Name/Person-Name</p>
            <input type="text" placeholder="Mirza Ghalib"/>
          </div>
        </div>
        <div className="row m-0 p-0">
          <p className="m-0 p-0 fw-semibold">Description</p>
          <textarea name="" id="" placeholder="Write Description"></textarea>
        </div>
      </div>
      
    </div>
  );
};

export default Testimonial;
