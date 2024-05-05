import React from 'react';
import './AdminDashboardDone.css'; // Ensure CSS is correctly linked


function Dashboard() {

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-GB', {
      weekday: 'long', // long, short, narrow
      day: 'numeric', // numeric, 2-digit
      month: 'short', // numeric, 2-digit, long, short, narrow
      year: 'numeric' // numeric, 2-digit
  });
    return (
        <div className="dashboard">
            <div className="dashboard-header">
              <div className="date">{formattedDate}</div>
                <div className="stats">
                    <div className="stat-card revenue">
                        <span className="value">RM10,234.5</span>
                        <span className="label">Total Revenue</span>
                    </div>
                    <div className="stat-card dishes">
                        <span className="value">23,456</span>
                        <span className="label">Total Dishes Ordered</span>
                    </div>
                    <div className="stat-card customers">
                        <span className="value">1,234</span>
                        <span className="label">Total Customers</span>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="left-panel">
                    <div className="order-report panel">
                        <h2>Order Report</h2>
                        {/* Order report table or list */}
                        <table>
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Time</th>
                                    <th>Total Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1234</td>
                                    <td>05/05/2024</td>
                                    <td>$XXX</td>
                                    <td>Delivered</td>
                                </tr>
                                <tr>
                                    <td>1235</td>
                                    <td>05/05/2024</td>
                                    <td>$XXX</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <td>1236</td>
                                    <td>05/05/2024</td>
                                    <td>$XXX</td>
                                    <td>Delivered</td>
                                </tr>
                                <tr>
                                    <td>1237</td>
                                    <td>05/05/2024</td>
                                    <td>$XXX</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <td>1238</td>
                                    <td>05/05/2024</td>
                                    <td>$XXX</td>
                                    <td>Delivered</td>
                                </tr>
                                <tr>
                                    <td>1239</td>
                                    <td>05/05/2024</td>
                                    <td>$XXX</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <td>1240</td>
                                    <td>05/05/2024</td>
                                    <td>$XXX</td>
                                    <td>Delivered</td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                </div>
                <div className="right-panel">
                    <div className="most-ordered panel">
                        <h2>Most Ordered</h2>
                        {/* List of most ordered items */}
                    </div>
                    <div className="order-types panel">
                        <h2>Most Type of Order</h2>
                        {/* Chart for order types */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
