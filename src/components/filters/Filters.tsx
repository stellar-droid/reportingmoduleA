import React from 'react'
import { Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import AddRemoveMultipleInputFields from './AddRemoveMultipleInputFields';

const Filters = () => {

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <div>
      <h2 className="heading">Control Panel - Filters</h2>
      <p className="paragraph">Filters enable end users of this report to view any subset of data needed at runtime. Customize Filters for your Report Below.</p>
      <Row>
        <Form.Group as={Col}>
          <Form.Label aria-required className="mt-2 formContent">
            Number Of Filters Per Row
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <i className="fa fa-question-circle ms-1"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col}>
          <Form.Label aria-required className="mt-2 formContent">
            Filter Label Position
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <i className="fa fa-question-circle ms-1"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col}>
          <Form.Label aria-required className="mt-2 formContent">
            Control Panel Filters
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <i className="fa fa-question-circle ms-1"></i>
            </OverlayTrigger>
          </Form.Label>
          <AddRemoveMultipleInputFields />
        </Form.Group>
      </Row>
    </div>
  )
}

export default Filters