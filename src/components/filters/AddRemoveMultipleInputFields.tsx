import React, { useState, ChangeEvent } from "react";
import { Container, Row, Col, Form, Button, Tooltip, OverlayTrigger } from "react-bootstrap";

interface InputField {
  emailField: string;
  filterType: string;
  filterTitle: string;
}

const AddRemoveMultipleInputFields: React.FC = () => {
  const [inputFields, setInputFields] = useState<InputField[]>([{ emailField: "", filterType: "", filterTitle: "" }]);

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  const addInputField = () => {
    setInputFields([...inputFields, { emailField: "", filterType: "", filterTitle: "" }]);
  };

  const removeInputFields = (index: number) => {
    const updatedInputFields = inputFields.filter((_, i) => i !== index);
    setInputFields(updatedInputFields);
  };

  const handleChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const updatedInputFields = [...inputFields];
    updatedInputFields[index][name as keyof InputField] = value;
    setInputFields(updatedInputFields);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Row>
              <Form.Group as={Col}>
                <Form.Label className="d-flex p-2">Field <span style={{ color: "red" }}>*</span></Form.Label>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="d-flex p-2">
                  Filter Type
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <i className="fa fa-question-circle ms-1"></i>
                  </OverlayTrigger>
                  <span className="ms-1" style={{ color: "red" }}>*</span>
                </Form.Label>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="d-flex p-2">
                  Filter Title
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <i className="fa fa-question-circle ms-1"></i>
                  </OverlayTrigger>
                </Form.Label>
              </Form.Group>

              <Form.Group as={Col}></Form.Group>
            </Row>
            {inputFields.map((data, index) => (
              <Row className="my-3" key={index}>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(index, event)}
                      value={data.emailField}
                      name="emailField"
                      placeholder="Email(Email Application/email)"
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>                    
                    <Form.Control
                      type="text"
                      onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(index, event)}
                      value={data.filterType}
                      name="filterType"
                      placeholder="Filter Type"
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>                    
                    <Form.Control
                      type="text"
                      onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(index, event)}
                      value={data.filterTitle}
                      name="filterTitle"                      
                    />
                  </Form.Group>
                </Col>

                <Col>
                  {inputFields.length !== 1 && (
                    <Button variant="outline-danger" onClick={() => removeInputFields(index)}>
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </Button>
                  )}
                </Col>
              </Row>
            ))}
            <hr />
            <Row>
              <Col>
                <Button variant="primary" onClick={addInputField} className="d-flex">
                  <i className="fa fa-plus me-2 mt-1"></i>
                  Add Another
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddRemoveMultipleInputFields;