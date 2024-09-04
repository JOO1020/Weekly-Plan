// src/pages/WeeklyPlanner.js
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import "./WeeklyPlanner.css"
import Footer from './Footer';
import { Container } from 'react-bootstrap';

const WeeklyPlanner = () => {
  const [planner, setPlanner] = useState({
    Saturday: ["", "", "", "", ""],
    Sunday: ["", "", "", "", ""],
    Monday: ["", "", "", "", ""],
    Tuesday: ["", "", "", "", ""],
    Wednesday: ["", "", "", "", ""],
    Thursday: ["", "", "", "", ""],
    Friday: ["", "", "", "", ""],
  });

  const handleInputChange = (day, index, value) => {
    const updatedDay = [...planner[day]];
    updatedDay[index] = value;
    setPlanner({ ...planner, [day]: updatedDay });
  };

  const downloadPDF = () => {
    const pdf = new jsPDF('p', 'mm', 'a4');

    pdf.setFontSize(24);
    pdf.setTextColor('#007bff');
    pdf.text('Weekly Planner', 105, 20, null, null, 'center');

    pdf.setFontSize(16);
    pdf.setTextColor(0, 0, 0);
    pdf.setFillColor(230, 230, 250);

    const startY = 40;
    const lineHeight = 10;

    let y = startY;
    Object.keys(planner).forEach((day, index) => {
      pdf.setFontSize(18);
      pdf.setFillColor(200, 200, 255);
      pdf.rect(10, y, 190, lineHeight, 'F');
      pdf.text(day, 15, y + 7);

      y += lineHeight;

      planner[day].forEach((task, taskIndex) => {
        pdf.setFontSize(14);
        pdf.setTextColor(50, 50, 50);
        pdf.text(`Task ${taskIndex + 1}: ${task || 'Empty'}`, 20, y + 7);

        y += lineHeight;
      });

      y += 5;
    });

    pdf.save('styled_weekly_planner.pdf');
  };

  return (
    <Container>
    
    <div style={styles.container}>
      <h2>Weekly Planner</h2>
      <table id="planner-table" style={styles.table}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Task 1</th>
            <th>Task 2</th>
            <th>Task 3</th>
            <th>Task 4</th>
            <th>Task 5</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(planner).map((day, index) => (
            <tr key={index}>
              <td>{day}</td>
              {planner[day].map((task, taskIndex) => (
                <td key={taskIndex}>
                  <input
                    type="text"
                    value={task}
                    onChange={(e) =>
                      handleInputChange(day, taskIndex, e.target.value)
                    }
                    style={styles.input}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={downloadPDF} style={styles.button}>
        Download PDF
      </button>
    </div>
    <Footer/>
    </Container>

  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  table: {
    width: '100%',
    margin: '20px 0',
    borderCollapse: 'collapse',
  },
  input: {
    width: '100%',
    padding: '10px',
  },
  button: {
    marginTop: '5px',
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default WeeklyPlanner;
