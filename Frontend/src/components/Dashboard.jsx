import "./Dashboard.css";
import {useState} from "react";

const Dashboard=()=> {
  let [showForm,setShowForm]=useState(false);
  const [applications,setApplications]=useState([]);

  const handleSubmit=(e)=> {
    e.preventDefault();
    const formData=new FormData(e.target);
    const company=formData.get("company");
    const role=formData.get("role");
    const appliedDate=formData.get("appliedDate");
    const status=formData.get("status");
    const newApplications={
      company,
      role,
      appliedDate,
      status
    };
    console.log(company,role,appliedDate,status);
    setApplications(prev => [...prev,newApplications]);
    e.target.reset();
    setShowForm(false);
  }

  const handleDelete=(index)=> {
    setApplications(prev=> prev.filter((application,i)=> i !== index));
  }

  let countApp=applications.filter(application => 
    application.status==="Applied").length;

  let countInterview=applications.filter(application => 
    application.status==="Interview").length;

  let countOffer=applications.filter(application => 
    application.status==="Offer").length;

  return (
    <div>
      <section className="dashboard">
        <div className="dashboard-card">
          <label>Total Applications</label>
          <p>{applications.length}</p>
        </div>
        <div className="dashboard-card">
          <label>Total Applied</label>
          <p>{countApp}</p>
        </div>
        <div className="dashboard-card">
          <label>Total Interviews</label>
          <p>{countInterview}</p>
        </div>
        <div className="dashboard-card">
          <label>Total offers</label>
          <p>{countOffer}</p>
        </div>
      </section>
      <section className="application-section">
        <h2>Your Application</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Job Role</th>
                  <th>Status</th>
                  <th>Applied Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((application,index)=> (
                  <tr key={index}>
                      <td>{application.company}</td>
                      <td>{application.role}</td>
                      <td>{application.status}</td>
                      <td>{application.appliedDate}</td>
                      <td><button onClick={()=> handleDelete(index)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </section>
      <button onClick={()=>setShowForm(true)}>ADD Application</button>
      {showForm && (
        <>
          <h2>Add New Application</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Comapany Name</label>
              <input 
                type="text" 
                name="company" 
                placeholder="Enter Company Name" 
                required
              />
              <label>Job Role</label>
              <input 
               type="text" 
               name="role"
               placeholder="Enter Role" 
               required
              />
              <label>Applied Date</label>
              <input
                type="date"
                name="appliedDate"
                required
              />
              <label>Status</label>
              <select name="status" required>
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Offer">Offer</option>
              </select>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Dashboard;