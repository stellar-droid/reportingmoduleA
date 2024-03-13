import React, { useEffect, useState } from 'react'
import { Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

const BasicSettings: React.FC = () => {

  const [basicSettingsData, setBasicSettingsData] = useState({
    reportTitle: "",
    reportName: "",
    itemsPerPage: 5,
    requestResult: false,
    cellMaxWidth: ""
  });

  useEffect(() => {
    console.log("Basic Settings Data : ", basicSettingsData); // JavaScript object
    const jsonData = JSON.stringify(basicSettingsData);
    console.log("JSON : ", jsonData); // Serialized string representation of the JavaScript object
  }, [basicSettingsData]);

  const basicSettingsHandleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setBasicSettingsData(prevState => ({
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
      <h2 className="heading">Report Setup - Basic Settings</h2>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label aria-required className="mt-2 formContent">Report Title<i style={{ color: "red" }}>*</i></Form.Label>
          <Form.Control
            type="text"
            name="reportTitle"
            placeholder="Report Title"
            onChange={basicSettingsHandleChange}
            value={basicSettingsData.reportTitle}
            required
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label aria-required className="mt-2 formContent">
            Report Name
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
            name="reportName"
            placeholder="Report Name"
            onChange={basicSettingsHandleChange}
            value={basicSettingsData.reportName}
          />
        </Form.Group>
      </Row>
      <h2 className="heading">Report Grid - Basic Settings</h2>
      <Row>
        <Form.Group as={Col}>
          <Form.Label aria-required className="mt-2 formContent">
            Items per page
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <i className="fa fa-question-circle ms-1"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Select aria-label="Default select example"
            name="itemsPerPage"
            onChange={basicSettingsHandleChange}
            value={basicSettingsData.itemsPerPage}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} className="checkBox-new">
          <Form.Check
            className="checkbox"
            name="requestResult"
            type="checkbox"
            id="inline-checkbox-1"
            onChange={basicSettingsHandleChange}
            checked={basicSettingsData.requestResult}
          />
          <Form.Label aria-required className="mt-2 ms-2">
            Enable to Store Request Result in the Cache
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
      <Row>
        <Form.Group as={Col}>
          <Form.Label className="mt-2 formContent">
            Cell max width
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
            name="cellMaxWidth"
            onChange={basicSettingsHandleChange}
            value={basicSettingsData.cellMaxWidth}
          />
        </Form.Group>
      </Row>
    </div>
  )
}

export default BasicSettings;