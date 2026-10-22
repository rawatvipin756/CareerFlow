import "./Dashboard.css";

const Dashboard=()=> {
  return (
    <div>
      <section className="dashboard">
        <div className="dashboard-card">
          <label>Total Applications</label>
          <p>12</p>
        </div>
        <div className="dashboard-card">
          <label>Total Applied</label>
          <p>6</p>
        </div>
        <div className="dashboard-card">
          <label>Total Interviews</label>
          <p>4</p>
        </div>
        <div className="dashboard-card">
          <label>Total offers</label>
          <p>2</p>
        </div>
      </section>
      <section>
        <h2>Your Application</h2>
      </section>
      <button>ADD Application</button>
    </div>
  );
};

export default Dashboard;