import "./Dashboard.css";
import {useState} from "react";

const Dashboard=()=> {
  let [showForm,setShowForm]=useState(false);
  const [applications,setApplications]=useState([]);
  const [editForm,setEditForm]=useState(null);

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
    if(editForm){
      setApplications(prev=> 
        prev.map((app,index)=> 
          index===editForm.index? newApplications:app
        )
      )
    }else{
      setApplications(prev => [...prev,newApplications]);
    }
    e.target.reset();
    setEditForm(null);
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
    <div className="dashboard-container">
      <div className="page-heading">
        <h1>Dashboard</h1>
        <p>Overview of your job search progress.</p>
      </div>
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
        <div className="application-header">
          <div>
              <h2>Your Applications</h2>
              <p>Track and manage your job applications.</p>
          </div>
          <button
              className="addAppBtn"
              onClick={() => {
                  setEditForm(null);
                  setShowForm(true);
              }}> + Add Application</button>
         </div>
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
                {applications.length===0? (
                  <tr>
                    <td colSpan="5" className="empty-state">
                      <h3>No applications yet</h3>
                      <p>Start tracking your job search by adding your first application.</p>
                    </td>
                  </tr>
                ):(applications.map((application,index)=> (
                  <tr key={index}>
                      <td>{application.company}</td>
                      <td>{application.role}</td>
                      <td>
                        <span className={`status-badge ${application.status.toLowerCase()}`}>
                          {application.status}
                        </span>
                      </td>
                      <td>{application.appliedDate}</td>
                      <td>
                        <button className="delBtn" onClick={()=> handleDelete(index)}>Delete</button>
                        <button className="editBtn" onClick={()=> {
                            setEditForm({...application,index});
                            setShowForm(true);
                          }
                        }>Edit</button>
                      </td>
                  </tr>
                )))}
              </tbody>
            </table>
          </div>
      </section>
      {showForm && (
        <div className="form-overlay">
          <div className="app-form">
            <h2>Add New Application</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Comapany Name</label>
                <input 
                  type="text" 
                  name="company" 
                  placeholder="Enter Company Name" 
                  defaultValue={editForm?.company || ""}
                  required
                />
                <label>Job Role</label>
                <input 
                type="text" 
                name="role"
                placeholder="Enter Role" 
                defaultValue={editForm?.role || ""}
                required
                />
                <label>Applied Date</label>
                <input
                  type="date"
                  name="appliedDate"
                  defaultValue={editForm?.appliedDate || ""}
                  required
                />
                <label>Status</label>
                <select 
                  name="status" 
                  defaultValue={editForm?.status || "Applied"}
                  required
                >
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Offer</option>
                </select>
                <button type='submit' className="submitBtn">Submit</button>
                <button 
                  type="button"
                  className="cancel-btn"
                  onClick={() => {
                    setShowForm(false);
                    setEditForm(null);
                    }}
                  >Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;