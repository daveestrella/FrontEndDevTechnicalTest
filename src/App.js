import React from 'react';
import Review from './components/Review';
import './App.css';

const data = [
  {
    type: "YTD Summary",
    message: "Employee Overview",
    submittedOn: new Date("07/09/2024"),
    downloadPdf: false
  },
  {
    type: "Generate T4",
    message: "t4 for 2024 have been completed and submitted on",
    submittedOn: new Date("07/10/2024"),
    downloadPdf: true
  },
  {
    type: "Generate T4A",
    message: "t4A for 2024 have been completed and submitted on",
    submittedOn: new Date("07/10/2024"),
    downloadPdf: true
  },
  {
    type: "Generate RL1",
    message: "RL1 for 2024 have been completed and submitted on",
    submittedOn: new Date("07/11/2024"),
    downloadPdf: true
  }
];

function App() {
  return (
    <div className="container">
      <h1>Review List</h1>
      <div className="main">
        {data.map((item, index) => (
          <Review key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
