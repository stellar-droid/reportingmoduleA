import React from 'react'
import { Button, Col, Container, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import AddRemoveInputField from '../../AddRemoveInputField';

const Aggregation = () => {

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <div>
      <h2 className="heading">Report Setup - Aggregated Columns</h2>
      <p className="text-start">You can create an <strong>aggregated report</strong> that groups the selected Forms' submissions by one or several fields (e.g. department ID or employee ID). Using the Ul below, select the fields that will be used as criteria for the grouping. Then, add columns to your Reporting Grid that will be calculated per group based on the existing selected Forms fields or the Grid Calculated Extra Fields.</p>
      <p className="paragraph fw-bold">Please note that only Aggregated Columns will be available to display in the Reporting Grid for Aggregated Reports.</p>
      <Form.Label className="mt-2 formContent">
        Fields to group by
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <i className="fa fa-question-circle ms-1"></i>
        </OverlayTrigger>
      </Form.Label>
      <AddRemoveInputField /* setFormData={setFormData} */ />
      <Form.Label className="mt-2 formContent">
        Calculated Aggregation Columns
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <i className="fa fa-question-circle ms-1"></i>
        </OverlayTrigger>
      </Form.Label>
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
              required
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label aria-required className="mt-2 formContent">Column Key</Form.Label>
            <Form.Control
              type="text"
              name="columnKey"
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
            <Form.Select aria-label="Default select example">
              <option value="average">Average</option>
              <option value="count">Count</option>
              <option value="max">Max</option>
              <option value="min">Min</option>
              <option value="sum">Sum</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <div className="d-flex mt-2">
          <Button>Save</Button>
          <Button variant="danger">Cancel</Button>
        </div>
      </Container>
      <div className="btn-calculated-columns">
        <Button className="mt-3"><i className="fa fa-plus me-2"></i>Add Column</Button>
      </div>
    </div>
  )
}

export default Aggregation