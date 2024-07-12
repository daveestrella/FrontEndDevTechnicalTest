import React, { useState } from 'react';
import Review from './components/Review';
import './App.css';
import { Form } from 'react-bootstrap';

const data = [
  {
    type: "YTD Summary",
    message: "Employee Overview",
    submittedOn: new Date("07/09/2024"),
    downloadPdf: false,
    isReviewed: false
  },
  {
    type: "Generate T4",
    message: "t4 for 2024 have been completed and submitted on",
    submittedOn: new Date("07/10/2024"),
    downloadPdf: true,
    isReviewed: false
  },
  {
    type: "Generate T4A",
    message: "t4A for 2024 have been completed and submitted on",
    submittedOn: new Date("07/10/2024"),
    downloadPdf: true,
    isReviewed: false
  },
  {
    type: "Generate RL1",
    message: "RL1 for 2024 have been completed and submitted on",
    submittedOn: new Date("07/11/2024"),
    downloadPdf: true,
    isReviewed: false
  },
  {
    type: "YTD Summary",
    message: "Employee Overview",
    submittedOn: new Date("07/09/2022"),
    downloadPdf: false,
    isReviewed: false
  },
  {
    type: "Generate T4",
    message: "t4 for 2022 have been completed and submitted on",
    submittedOn: new Date("07/10/2022"),
    downloadPdf: true,
    isReviewed: false
  },
  {
    type: "Generate T4A",
    message: "t4A for 2022 have been completed and submitted on",
    submittedOn: new Date("07/10/2022"),
    downloadPdf: true,
    isReviewed: false
  },
  {
    type: "Generate RL1",
    message: "RL1 for 2022 have been completed and submitted on",
    submittedOn: new Date("07/11/2022"),
    downloadPdf: true,
    isReviewed: false
  },
  {
    type: "YTD Summary",
    message: "Employee Overview",
    submittedOn: new Date("07/09/2023"),
    downloadPdf: false,
    isReviewed: false
  },
  {
    type: "Generate T4",
    message: "t4 for 2023 have been completed and submitted on",
    submittedOn: new Date("07/10/2023"),
    downloadPdf: true,
    isReviewed: false
  },
  {
    type: "Generate T4A",
    message: "t4A for 2023 have been completed and submitted on",
    submittedOn: new Date("07/10/2023"),
    downloadPdf: true,
    isReviewed: false
  },
  {
    type: "Generate RL1",
    message: "RL1 for 2023 have been completed and submitted on",
    submittedOn: new Date("07/11/2023"),
    downloadPdf: true,
    isReviewed: false
  }
];

function App() {
  const [selectedYear, setSelectedYear] = useState('2024');

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredData = selectedYear
    ? data.filter(item => new Date(item.submittedOn).getFullYear() === parseInt(selectedYear)) : data;

  const uniqueYears = [...new Set(data.map(item => new Date(item.submittedOn).getFullYear()))];

  return (
    <div className="container">
      <h1>Review List</h1>
      <Form className="yearForm">
        <Form.Group controlId="yearSelect" className="d-flex align-items-center">
          <Form.Label>Filter by Year</Form.Label>
          <Form.Control className="ml-10" as="select" value={selectedYear} onChange={handleYearChange}>
            <option value="">All</option>
            {uniqueYears.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
      <div className="main">
        {filteredData.map((item, index) => (
          <Review key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
