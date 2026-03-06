import React, { useState } from 'react';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';
// Hum ek modal component banayenge blood unit add karne ke liye
// import AddNewBloodUnitModal from '../../components/AddNewBloodUnitModal'; 

const Inventory = () => {
  // Abhi ke liye dummy data
  const [bloodStock, setBloodStock] = useState([
    { id: 'BLD001', donorId: 'DNR056', bloodGroup: 'A+', dateOfIntake: '2024-08-10', status: 'Available' },
    { id: 'BLD002', donorId: 'DNR089', bloodGroup: 'O+', dateOfIntake: '2024-08-11', status: 'Available' },
    { id: 'BLD003', donorId: 'DNR102', bloodGroup: 'B-', dateOfIntake: '2024-08-12', status: 'Reserved' },
  ]);

  const [showModal, setShowModal] = useState(false);

  return (
    <Container fluid className="mt-4">
      <Row className="align-items-center mb-3">
        <Col>
          <h3>Blood Inventory</h3>
        </Col>
        <Col className="text-end">
          <Button variant="danger" onClick={() => setShowModal(true)}>
            + Add New Blood Unit
          </Button>
        </Col>
      </Row>
      
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Blood Unit ID</th>
            <th>Donor ID</th>
            <th>Blood Group</th>
            <th>Date of Intake</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bloodStock.map((unit) => (
            <tr key={unit.id}>
              <td>{unit.id}</td>
              <td>{unit.donorId}</td>
              <td>{unit.bloodGroup}</td>
              <td>{unit.dateOfIntake}</td>
              <td>{unit.status}</td>
              <td>
                <Button variant="secondary" size="sm">Update</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* 
        Yeh Modal component hum agle step me bana sakte hain.
        <AddNewBloodUnitModal show={showModal} handleClose={() => setShowModal(false)} /> 
      */}
    </Container>
  );
};

export default Inventory;