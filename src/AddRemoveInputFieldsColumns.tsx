import React, { useState, ChangeEvent, useEffect } from 'react'
import { Button, Col, Container, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

interface InputField {
  availableColumn: string;
  displayTitle: string;
}

const AddRemoveInputFieldsColumns: React.FC<{ setFormData: any }> = ({ setFormData }) => {

  const [inputFields, setInputFields] = useState<{[key: string]: InputField[]}>({
    availableColumns: [{
      availableColumn: "", 
      displayTitle: ""   
    }]
  });

  useEffect(() => {
    setFormData((prevData: any) => ({
      ...prevData,
      availableColumns: inputFields,
    }))
    console.log("Input Fields : ", inputFields);
  }, [inputFields]);

  const addInputField = () => {
    setInputFields(inputFields => ({
      ...inputFields,
      availableColumns: [...inputFields.availableColumns, { availableColumn: "", displayTitle: "" }]
    }));
  };

  const removeInputFields = (index: number) => {    
    setInputFields(inputFields => ({
      ...inputFields,
      availableColumns: inputFields.availableColumns.filter((_, i) => i !== index)
    }));
  };  

  const handleChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputFields(prevInputFields => ({
      ...prevInputFields,
      availableColumns: prevInputFields.availableColumns.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    }));
  };

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Row>
              <Col className='d-flex col-5'>
                <Form.Group>
                  <Form.Label>Column<i className='ms-1' style={{ color: "red" }}>*</i></Form.Label>
                </Form.Group>
              </Col>

              <Col className='d-flex col-5'>
                <Form.Group>
                  <Form.Label>
                    Display Title
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <i className="fa fa-question-circle ms-1"></i>
                    </OverlayTrigger>
                  </Form.Label>
                </Form.Group>
              </Col>

              <Col>
              </Col>
            </Row>
            {inputFields.availableColumns.map((data, index) => {
              return (
                <Row>
                  <Col className='col-5'>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(index, event)}
                        value={data.availableColumn}
                        name="availableColumn"
                        placeholder="Available Column"
                      />
                    </Form.Group>
                  </Col>

                  <Col className='col-5'>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(index, event)}
                        value={data.displayTitle}
                        name="displayTitle"                      
                      />
                    </Form.Group>
                  </Col>

                  <Col>
                    {inputFields.availableColumns.length !== 1 && (
                      <Button variant="outline-danger" onClick={() => removeInputFields(index)}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                      </Button>
                    )}
                  </Col>
                </Row>
              );
            })}
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
  )
}

export default AddRemoveInputFieldsColumns;

/* import React, { useState, ChangeEvent, useEffect } from 'react'
import { Button, Col, Container, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

interface InputField {
  availableColumn: string;
  displayTitle: string;
}

const AddRemoveInputFieldsColumns: React.FC = () => {

  const [inputFields, setInputFields] = useState<InputField[]>([{ 
    availableColumn: "", 
    displayTitle: ""   
  }]);

  useEffect(() => {
    console.log("Input Fields : ", inputFields);
  }, [inputFields]);

  const addInputField = () => {
    setInputFields([...inputFields, { availableColumn: "", displayTitle: "" }]);
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

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Row>
              <Col className='d-flex col-5'>
                <Form.Group>
                  <Form.Label>Column<i className='ms-1' style={{ color: "red" }}>*</i></Form.Label>
                </Form.Group>
              </Col>

              <Col className='d-flex col-5'>
                <Form.Group>
                  <Form.Label>
                    Display Title
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <i className="fa fa-question-circle ms-1"></i>
                    </OverlayTrigger>
                  </Form.Label>
                </Form.Group>
              </Col>

              <Col>
              </Col>
            </Row>
            {inputFields.map((data, index) => {
              return (
                <Row>
                  <Col className='col-5'>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(index, event)}
                        value={data.availableColumn}
                        name="availableColumn"
                        placeholder="Available Column"
                      />
                    </Form.Group>
                  </Col>

                  <Col className='col-5'>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(index, event)}
                        value={data.displayTitle}
                        name="displayTitle"                      
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
              );
            })}
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
  )
}

export default AddRemoveInputFieldsColumns; */