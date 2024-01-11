import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import './style.css';

const data = [
  { name: "Sales Team", value: 75 },
  { name: "Marketing Team", value: 50 },
  { name: "Engineers", value: 80 },
  { name: "Interns", value: 25 },
  { name: "Helpers", value: 20 },
];

const COLORS = ['blue', '#00C49F', '#FFBB28', '#FF8042','green'];

const Profile = () => {
  return (
    <div className="centered-chart">
      <div className="Profile">
        <h1 style={{ textAlign: "center" }}><strong>Total Employees</strong></h1>
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Profile;
