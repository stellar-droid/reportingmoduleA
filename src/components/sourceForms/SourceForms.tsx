import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, OverlayTrigger, Row, Tab, Tooltip } from 'react-bootstrap';
import Select from "react-select";

const SourceForms = () => {

  const [selectedForm, setSelectedForm] = useState();

  const [sourceFormsData, setSourceFormsData] = useState({
    multipleForms: ""
  });

  useEffect(() => {
    console.log("Source Forms Data : ", sourceFormsData);
  }, [sourceFormsData]);

  const sourceFormssHandleChange = (e: any) => {
    const { name, value } = e.target;    
    setSourceFormsData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const options = [
    { value: "form1", label: "Form 1" },
    { value: "form2", label: "Form 2" },
    { value: "form3", label: "Form 3" },
    { value: "form4", label: "Form 4" },
    { value: "form5", label: "Form 5" },
  ];

  function handleSelect(data: any) {
    setSelectedForm(data);
  };

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <div>      
      <Form>
        <h2 className="heading">Report Setup - Source Forms</h2>
        <p className="paragraph">A report can aggregate Submission Data submitted against one or more Forms. Many times, Reports aggregate data from multiple Forms which allow a singular Report UI to visualize connected data stemming from multiple Form Sources.</p>
        <Row>
          <Form.Group as={Col}>
            <Form.Label aria-required className="mt-2 formContent">
              Choose from the Forms within this Project
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <i className="fa fa-question-circle ms-1"></i>
              </OverlayTrigger>
              <i className="ms-1" style={{ color: "red" }}>*</i>
            </Form.Label>
            <Select
              name="multipleForms"
              options={options}
              placeholder=""
              value={selectedForm}
              onChange={(selectedOption) => {
                handleSelect(selectedOption);
                sourceFormssHandleChange({
                  target: {
                    name: "multipleForms",
                    value: selectedOption,
                  },
                });
              }}
              isSearchable={true}
              isMulti
              required
            />
          </Form.Group>
        </Row>
        <Form.Label aria-required className="mt-3 formContent">
          Forms Connections
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <i className="fa fa-question-circle ms-1"></i>
          </OverlayTrigger>
        </Form.Label>
        <Container style={{ backgroundColor: "white" }}>
          <Row>
            <Form.Group as={Col} className="d-flex">
              <Form.Label className="label">Base Form</Form.Label>
            </Form.Group>
            <Form.Group as={Col} className="d-flex">
              <Form.Label className="label">Joining Form</Form.Label>
            </Form.Group>
          </Row>
          <hr />
          <Row>
            <Form.Group as={Col}>
              <Form.Label aria-required className="mt-2 formContent">
                Base Form
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <i className="fa fa-question-circle ms-1"></i>
                </OverlayTrigger>
                <i style={{ color: "red" }}>*</i>
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Source Form</option>
                <option value="form1">Form 1</option>
                <option value="form2">Form 2</option>
                <option value="form3">Form 3</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label aria-required className="mt-2 formContent">
                Joining Form
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <i className="fa fa-question-circle ms-1"></i>
                </OverlayTrigger>
                <i style={{ color: "red" }}>*</i>
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Source Form</option>
                <option value="form1">Form 1</option>
                <option value="form2">Form 2</option>
                <option value="form3">Form 3</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col}>
              <Form.Label aria-required className="mt-2 formContent">
                Connecting field of base Form
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <i className="fa fa-question-circle ms-1"></i>
                </OverlayTrigger>
                <i style={{ color: "red" }}>*</i>
              </Form.Label>
              <Form.Control
                type="text"
                name="connectingFieldBaseForm"
                placeholder="Connecting Field"
                required
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label aria-required className="mt-2 formContent">
                Connecting field of joining Form
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <i className="fa fa-question-circle ms-1"></i>
                </OverlayTrigger>
                <i style={{ color: "red" }}>*</i>
              </Form.Label>
              <Form.Control
                type="text"
                name="connectingFieldJoiningForm"
                placeholder="Connecting Field"
                required
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col}>
              <Form.Label aria-required className="mt-2 formContent">Base Form path to connecting value<i style={{ color: "red" }}>*</i></Form.Label>
              <Form.Control
                type="text"
                name="connectingFieldJoiningForm"
                placeholder="Path"
                required
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label aria-required className="mt-2 formContent">Joining Form path to connecting value<i style={{ color: "red" }}>*</i></Form.Label>
              <Form.Control
                type="text"
                name="connectingFieldJoiningForm"
                placeholder="Path"
                required
              />
            </Form.Group>
          </Row>
          <div className="d-flex mt-2">
            <Button type="submit">Save</Button>
            <Button variant="danger">Cancel</Button>
          </div>
        </Container>
      </Form>      
    </div>
  )
}

export default SourceForms