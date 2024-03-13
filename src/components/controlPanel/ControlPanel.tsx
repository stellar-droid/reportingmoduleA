import React, { useEffect, useState } from 'react'
import { Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

const ControlPanel = () => {

  const [controlPanelData, setControlPanelData] = useState({
    enableControlPanel: false,
    controlPanelTitle: "",
    controlPanelTheme: "Default",
    initiallyCollapsed: false
  });

  useEffect(() => {
    console.log("Control Panel Data : ", controlPanelData);
  }, [controlPanelData]);

  const controlPanelHandleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setControlPanelData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <div>
      <h2 className="heading">Control Panel - Basic Settings</h2>
      <p className="paragraph">In addition to the Report Grid, a Control Panel can be enabled and customized here. This includes a Columns Selection UI, customized Filters, and Actions that can be performed on rows which are selected in the grid.</p>
      <Row className="mb-3">
        <Form.Group as={Col} className="checkBox-new">
          <Form.Check
            className="checkbox"
            name="enableControlPanel"
            type="checkbox"
            id="inline-checkbox-1"
            onChange={controlPanelHandleChange}
            checked={controlPanelData.enableControlPanel}
          />
          <Form.Label aria-required className="mt-2 ms-2">
            Enable Control Panel
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <i className="fa fa-question-circle ms-1"></i>
            </OverlayTrigger>
          </Form.Label>
        </Form.Group>
      </Row>
      <h4 className="heading">Report Controls - Basic Settings</h4>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label aria-required className="mt-2 formContent">
            Control Panel Title
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
            name="controlPanelTitle"
            onChange={controlPanelHandleChange}
            value={controlPanelData.controlPanelTitle}
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col}>
          <Form.Label aria-required className="mt-2 formContent">Control Panel Theme</Form.Label>
          <Form.Select aria-label="Default select example"
            name="controlPanelTheme"
            onChange={controlPanelHandleChange}
            value={controlPanelData.controlPanelTheme}
          >
            <option value="default">Default</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} className="checkBox-new">
          <Form.Check
            className="checkbox"
            name="initiallyCollapsed"
            type="checkbox"
            id="inline-checkbox-1"
            onChange={controlPanelHandleChange}
            checked={controlPanelData.initiallyCollapsed}
          />
          <Form.Label aria-required className="mt-2 ms-2">
            Initially Collapsed
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <i className="fa fa-question-circle ms-1"></i>
            </OverlayTrigger>
          </Form.Label>
        </Form.Group>
      </Row>
    </div>
  )
}

export default ControlPanel