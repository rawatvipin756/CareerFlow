import "./Dashboard.css";
import {useState} from "react";

const Dashboard=()=> {
  let showForm=(true);
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
      <button>ADD Application</button>
    </div>
  );
};

export default Dashboard;