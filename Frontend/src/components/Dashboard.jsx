import "./Dashboard.css";
import {useState} from "react";

const Dashboard=()=> {
  let [showForm,setShowForm]=useState(false);
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
                <tr>
                  <td>Relience</td>
                  <td>Technician</td>
                  <td>Pending</td>
                  <td>20-10-2026</td>
                  <td>Delete</td>
                </tr>
              </tbody>
            </table>
          </div>
      </section>
      <button onClick={()=>setShowForm(true)}>ADD Application</button>
      {showForm && (
        <>
          <h2>Add New Application</h2>
          <form>
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
               name="Job role"
               placeholder="Enter Role" 
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