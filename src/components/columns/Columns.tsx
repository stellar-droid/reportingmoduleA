import React from 'react'
import { Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import AddRemoveInputFieldsColumns from '../../AddRemoveInputFieldsColumns';

const Columns = () => {

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <div>
      <h2 className="heading">Report Setup - Columns</h2>
      <p className="paragraph">Use the UI below to choose which columns are available to the end user of the Report. Then, select which columns the end user has available by default. The end user will start out with the default columns shown visually, with an option to choose which of the available columns they wish to see based on their requirements at runtime.</p>
      <Row className="mb-3">
        <Form.Label aria-required className="mt-2 formContent">
          Available Columns
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
          <AddRemoveInputFieldsColumns /* setFormData={setFormData} */ />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label aria-required className="mt-2 formContent">
            Default Columns
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <i className="fa fa-question-circle ms-1"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control
            type="text"
            name="defaultColumns"
          />
        </Form.Group>
      </Row>
    </div>
  )
}

export default Columns