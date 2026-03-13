import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Table, Badge, Alert } from 'react-bootstrap';
import { FaSearch, FaHospital } from "react-icons/fa";
import './findBlood.css';

const cityList = ["Delhi","Mumbai","Bangalore","Kolkata","Chennai","Pune"];

const dummyResults = [
  { bank: "PulseBlood Bank", group: "A+", units: 5, location: "Delhi", contact: "9999991111" },
  { bank: "Red Cross Mumbai", group: "O-", units: 2, location: "Mumbai", contact: "8888881234" }
];

const FindBlood = () => {
  const [filter, setFilter] = useState({ bloodGroup:"", city:"" });
  const [results, setResults] = useState([]);
  const [alert, setAlert] = useState("");
  const [searching, setSearching] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setAlert('');
    setResults([]);
    setSearching(true);

    setTimeout(() => {
      const { bloodGroup, city } = filter;

      if (!bloodGroup || !city.trim()) {
        setAlert("Please select both blood group and city.");
        setSearching(false);
        return;
      }

      const filtered = dummyResults.filter(
        r => r.group === bloodGroup &&
             r.location.toLowerCase().includes(city.trim().toLowerCase())
      );

      if (filtered.length === 0) {
        setAlert("No results found for your criteria.");
      } else {
        setResults(filtered);
      }
      setSearching(false);
    }, 800);
  };

  return (
    <div className="findblood-bg">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={9} md={12}>
            <Card className="findblood-card shadow border-0 p-4">
              <h2 className="mb-4 text-center text-danger fw-bold">Find Blood Availability</h2>
              <Form onSubmit={handleSearch}>
                <Row className="g-3">
                  <Col md={5}>
                    <Form.Label className="fw-bold small">Blood Group</Form.Label>
                    <Form.Select 
                      value={filter.bloodGroup} 
                      onChange={e => setFilter(f => ({ ...f, bloodGroup: e.target.value }))}
                      required
                    >
                      <option value="">Select Group</option>
                      <option>A+</option><option>A-</option>
                      <option>B+</option><option>B-</option>
                      <option>O+</option><option>O-</option>
                      <option>AB+</option><option>AB-</option>
                    </Form.Select>
                  </Col>
                  <Col md={5}>
                    <Form.Label className="fw-bold small">City</Form.Label>
                    <Form.Control
                      value={filter.city}
                      onChange={e => setFilter(f => ({ ...f, city: e.target.value }))}
                      list="cities-list"
                      placeholder="Enter city name..."
                      required
                    />
                    <datalist id="cities-list">
                      {cityList.map(c => <option value={c} key={c}/>)}
                    </datalist>
                  </Col>
                  <Col md={2} className="d-flex align-items-end">
                    <Button variant="danger" type="submit" className="w-100 py-2 fw-bold" disabled={searching}>
                      {searching ? "..." : <><FaSearch /> Search</>}
                    </Button>
                  </Col>
                </Row>
              </Form>

              {alert && <Alert variant="warning" className="mt-4 border-0 shadow-sm">{alert}</Alert>}

              {/* Results Table */}
              {results.length > 0 &&
                <Card className="mt-4 border-0 results-card overflow-hidden">
                  <Card.Body className="p-0">
                    <Table responsive hover className="mb-0">
                      <thead className="bg-danger text-white">
                        <tr>
                          <th className="py-3">Bank Name</th>
                          <th className="py-3">Group</th>
                          <th className="py-3">Units</th>
                          <th className="py-3">City</th>
                          <th className="py-3">Contact</th>
                          <th className="py-3">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results.map((r, i) => (
                          <tr key={i}>
                            <td className="py-3"><FaHospital className="me-2 text-danger" />{r.bank}</td>
                            <td><Badge bg="danger" className="px-3">{r.group}</Badge></td>
                            <td className="fw-bold">{r.units}</td>
                            <td>{r.location}</td>
                            <td>{r.contact}</td>
                            <td><Button variant="outline-primary" size="sm" className="rounded-pill px-3">Request</Button></td>
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