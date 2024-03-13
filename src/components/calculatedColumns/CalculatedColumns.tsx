import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, OverlayTrigger, Row, Table, Tooltip } from 'react-bootstrap'

const CalculatedColumns = () => {

  const [calculatedColumnsData, setCalculatedColumnsData] = useState({
    columnTitle: "",
    columnKey: "",
    operator: "arraySize"
  });

  const [calculatedColumnsTableData, setCalculatedColumnsTableData] = useState<{[key: string]: { columnTitle: string, columnKey: string, operator: string }[]}>({ calculatedColumns: [] });

  useEffect(() => {
    console.log("Calculated Columns Data : ", calculatedColumnsData);
    console.log("Calculated Columns Table Data : ", calculatedColumnsTableData);
  }, [calculatedColumnsData, calculatedColumnsTableData]);

  const calculatedColumnsHandleChange = (e: any) => {
    const { name, value } = e.target;    
    setCalculatedColumnsData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const printCalculatedColumnsData = () => {
    setCalculatedColumnsTableData(prevData => ({
      ...prevData,
      calculatedColumns: [...prevData.calculatedColumns, calculatedColumnsData]
    }));
    // Clear form fields after saving
    setCalculatedColumnsData({
      columnTitle: '',
      columnKey: '',
      operator: 'arraySize'
    });
  };

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <div>
      <h2 className="heading">Report Setup - Calculated Columns</h2>
      <p className="paragraph">Here you can add additional columns to the Report Grid that do not exist in the the Data Source Forms. These columns` value(s) will be calculated based on the fields of the Data Source Forms.</p>
      <Container className="bg-white">
        <Row>
          <Form.Group as={Col} className="d-flex">
            <Form.Label className="label">Column Title</Form.Label>
          </Form.Group>
          <Form.Group as={Col} className="d-flex">
            <Form.Label className="label">Operator</Form.Label>
          </Form.Group>
        </Row>
        <hr />
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label aria-required className="mt-2 formContent">Column Title<i style={{ color: "red" }}>*</i></Form.Label>
            <Form.Control
              type="text"
              name="columnTitle"
              onChange={calculatedColumnsHandleChange}
              value={calculatedColumnsData.columnTitle}
              required
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label aria-required className="mt-2 formContent">Column Key</Form.Label>
            <Form.Control
              type="text"
              name="columnKey"
              onChange={calculatedColumnsHandleChange}
              value={calculatedColumnsData.columnKey}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label aria-required className="mt-2 formContent">
              Operator
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <i className="fa fa-question-circle ms-1"></i>
              </OverlayTrigger>
              <i className="ms-1" style={{ color: "red" }}>*</i>
            </Form.Label>
            <Form.Select aria-label="Default select example"
              name="operator"
              onChange={calculatedColumnsHandleChange}
              value={calculatedColumnsData.operator}
              required
            >
              <option value="arraySize">Array Size</option>
              <option value="concatenateStrings">Concatenate Strings</option>
              <option value="dateDifference">Date Difference</option>
              <option value="dayofMonth">Day of Month</option>
              <option value="dayofWeek">Day of Week</option>
              <option value="dayofYear">Day of Year</option>
              <option value="monthNumber">Month Number</option>
              <option value="weekNumber">Week Number</option>
              <option value="year">Year</option>
              <option value="divide">Divide</option>
              <option value="summarize">Summarize</option>
              <option value="multiply">Multiply</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <div className="d-flex mt-2">
          <Button onClick={printCalculatedColumnsData}>Save</Button>
          <Button variant="danger">Cancel</Button>
        </div>
      </Container>
      <div className="btn-calculated-columns">
        <Button className="mt-3"><i className="fa fa-plus me-2"></i>Add Column</Button>
      </div>
      <Container className="rounded-1 mt-2 bg-white">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Column Title</th>
              <th>Column Key</th>
              <th>Operator</th>
            </tr>
          </thead>
          <tbody>
            {calculatedColumnsTableData.calculatedColumns.map((data, index) => (
              <tr key={index}>
                <td>{data.columnTitle}</td>
                <td>{data.columnKey}</td>
                <td>{data.operator}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default CalculatedColumns