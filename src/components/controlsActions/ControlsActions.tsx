import React from 'react'
import { Button, Col, Container, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

const ControlsActions = () => {

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <div>
      <h2 className="heading">Control Panel - Actions</h2>
      <p className="paragraph">Enable end users of the Report to execute actions on rows which are selected within the Report Grid. Select a default Action, or create any customized Action to meet bespoke requirements by entering custom Javascript below.</p>
      <Form.Label aria-required className="mt-3 formContent">
        Actions
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <i className="fa fa-question-circle ms-1"></i>
        </OverlayTrigger>
      </Form.Label>
      <Container className="rounded-1" style={{ backgroundColor: "white" }}>
        <Row>
          <Form.Group as={Col} className="d-flex">
            <Form.Label className="label">Title</Form.Label>
          </Form.Group>
          <Form.Group as={Col} className="d-flex">
            <Form.Label className="label">Type</Form.Label>
          </Form.Group>
        </Row>
        <hr />
        <Row>
          <Form.Label className="mt-2 formContent">
            Title
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <i className="fa fa-question-circle ms-1"></i>
            </OverlayTrigger>
            <i className="ms-1" style={{ color: "red" }}>*</i>
          </Form.Label>
          <Form.Group as={Col}>
            <Form.Control
              type="text"
              name="title"
              placeholder="Export to CSV"
              required
            />
          </Form.Group>
          <Form.Label className="mt-2 formContent">Type<i style={{ color: "red" }}>*</i></Form.Label>
          <Form.Group>
            <Form.Select aria-label="Default select example">
              <option value="exportCSV">Export CSV</option>
              <option value="downloadPDF">Download PDF</option>
              <option value="custom">Custom</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form>
            <Form.Label className="mt-2 formContent">Apply action for:</Form.Label>
            <div key='inline-radio' className="mb-3 d-flex">
              <Form.Check
                inline
                label="All Available Columns"
                name="group1"
                type="radio"
                id='inline-radio-1'
              />
              <Form.Check
                inline
                label="Visible Columns"
                name="group1"
                type="radio"
                id='inline-radio-2'
              />
            </div>
          </Form>
        </Row>
        <div className="d-flex mt-2">
          <Button>Save</Button>
          <Button variant="danger">Cancel</Button>
        </div>
      </Container>
      <Button className="d-flex mt-2"><i className="fa fa-plus me-2 mt-1"></i>Add Action</Button>
    </div>
  )
}

export default ControlsActions