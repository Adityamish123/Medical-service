import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Table, Badge, Alert } from 'react-bootstrap';
import { FaSearch, FaHospital } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './findBlood.css';

const cityList = ["Delhi","Mumbai","Bangalore","Kolkata","Chennai","Pune"];

const dummyResults = [
  { bank: "PulseBlood Bank", group: "A+", units: 5, location: "Delhi", contact: "9999991111" },
  { bank: "Red Cross Mumbai", group: "O-", units: 2, location: "Mumbai", contact: "8888881234" }
];

const FindBlood = () => {
  const [filter, setFilter] = useState({bloodGroup:"",city:""});
  const [results, setResults] = useState([]);
  const [alert, setAlert] = useState("");
  const [searching, setSearching] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setAlert('');
    setResults([]);
    setSearching(true);
    // Simulate async API call
    setTimeout(()=>{
      if(!filter.bloodGroup || !filter.city){
        setAlert("Please select both blood group and city.");
      }else{
        // Replace dummyResults with real API result
        setResults(dummyResults.filter(
          r=> (filter.bloodGroup === "" || r.group === filter.bloodGroup) &&
              (filter.city === "" || r.location.toLowerCase().includes(filter.city.toLowerCase()))
        ));
        if(results.length === 0) setAlert("No results found for your criteria.");
      }
      setSearching(false);
    },800);
  };

  return (
    <div className="findblood-bg">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={7} md={10}>
            <Card className="findblood-card shadow border-0 p-4">
              <h2 className="mb-3 text-center text-danger">Find Blood Availability</h2>
              <Form onSubmit={handleSearch}>
                <Row>
                  <Col md={5} sm={6} xs={12} className="mb-2">
                    <Form.Select value={filter.bloodGroup} onChange={e=>setFilter(f=>({...f,bloodGroup:e.target.value}))} required>
                      <option value="">Select Blood Group</option>
                      <option>A+</option><option>A-</option>
                      <option>B+</option><option>B-</option>
                      <option>O+</option><option>O-</option>
                      <option>AB+</option><option>AB-</option>
                    </Form.Select>
                  </Col>
                  <Col md={5} sm={6} xs={12} className="mb-2">
                    <Form.Control
                      value={filter.city}
                      onChange={e=>setFilter(f=>({...f,city:e.target.value}))}
                      list="cities-list"
                      placeholder="Enter city" required
                    />
                    <datalist id="cities-list">
                      {cityList.map(c => <option value={c} key={c}/>)}
                    </datalist>
                  </Col>
                  <Col md={2} xs={12} className="d-grid mb-2">
                    <Button variant="danger" type="submit" disabled={searching}>
                      {searching ? "Searching..." : (<><FaSearch/> Search</>)}
                    </Button>
                  </Col>
                </Row>
              </Form>
              {alert && <Alert variant="warning" className="mt-3 py-2">{alert}</Alert>}
              {!alert && results.length > 0 &&
                <Card className="mt-4 mb-1 border-0 bg-white bg-opacity-75">
                  <Card.Body className="p-0">
                    <Table responsive striped bordered hover>
                      <thead>
                        <tr><th>Bank</th><th>Group</th><th>Units</th><th>City</th><th>Contact</th><th></th></tr>
                      </thead>
                      <tbody>
                        {results.map((r,i) => (
                          <tr key={i}>
                            <td><FaHospital className="me-1 text-danger"/>{r.bank}</td>
                            <td><Badge bg="danger">{r.group}</Badge></td>
                            <td>{r.units}</td>
                            <td>{r.location}</td>
                            <td>{r.contact}</td>
                            <td><Button variant="outline-primary" size="sm">Request</Button></td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              }
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FindBlood;
