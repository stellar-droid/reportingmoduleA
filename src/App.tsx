import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Container, Tab, Row, Col, Nav, Button, Form, Tooltip, OverlayTrigger, Table } from "react-bootstrap";
import Select from "react-select";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import AddRemoveInputField from "./AddRemoveInputField";
import AddRemoveMultipleInputFields from "./AddRemoveMultipleInputFields";
import AddRemoveInputFieldsColumns from "./AddRemoveInputFieldsColumns";

function App() {

  const [activeTab, setActiveTab] = useState<string | null>("basicSettings");

  const [selectedForm, setSelectedForm] = useState();

  const [formData, setFormData] = useState<any>({});

  const [basicSettingsData, setBasicSettingsData] = useState({
    reportTitle: "",
    reportName: "",
    itemsPerPage: 5,
    requestResult: false,
    cellMaxWidth: ""
  });

  const [sourceFormsData, setSourceFormsData] = useState({
    multipleForms: ""
  });

  const [calculatedColumnsData, setCalculatedColumnsData] = useState({
    columnTitle: "",
    columnKey: "",
    operator: "arraySize"
  });

  const [calculatedColumnsTableData, setCalculatedColumnsTableData] = useState<{[key: string]: { columnTitle: string, columnKey: string, operator: string }[]}>({ calculatedColumns: [] });

  const [controlPanelData, setControlPanelData] = useState({
    enableControlPanel: false,
    controlPanelTitle: "",
    controlPanelTheme: "Default",
    initiallyCollapsed: false
  });

  useEffect(() => {
    const allFormData = { ...basicSettingsData, ...sourceFormsData, ...calculatedColumnsTableData, ...controlPanelData };
    setFormData(allFormData);
  }, [basicSettingsData, sourceFormsData, calculatedColumnsTableData, controlPanelData]);

  console.log("Form Data : ", formData);

  useEffect(() => {
    console.log("Basic Settings Data : ", basicSettingsData); // JavaScript object
    const jsonData = JSON.stringify(basicSettingsData);
    console.log("JSON : ", jsonData); // Serialized string representation of the JavaScript object
  }, [basicSettingsData]);

  useEffect(() => {
    console.log("Source Forms Data : ", sourceFormsData);
  }, [sourceFormsData])

  useEffect(() => {
    console.log("Calculated Columns Data : ", calculatedColumnsData);
    console.log("Calculated Columns Table Data : ", calculatedColumnsTableData);
  }, [calculatedColumnsData, calculatedColumnsTableData]);
  
  useEffect(() => {
    console.log("Control Panel Data : ", controlPanelData);
  }, [controlPanelData]);

  const basicSettingsHandleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setBasicSettingsData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const sourceFormssHandleChange = (e: any) => {
    const { name, value } = e.target;    
    setSourceFormsData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

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

  const controlPanelHandleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setControlPanelData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
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

  const handleNext = () => {    
    switch (activeTab) {
      case "basicSettings":
        setActiveTab("sourceForms");
        break;
      case "sourceForms":
        setActiveTab("calculatedForms");
        break;
      case "calculatedForms":
        setActiveTab("aggregation");
        break;
      case "aggregation":
        setActiveTab("columns");
        break;
      case "columns":
        setActiveTab("controlPanel");
        break;
      case "controlPanel":
        setActiveTab("filters");
        break;
      case "filters":
        setActiveTab("controlsActions");
        break;
      default:       
        break;
    }
  };

  const handlePrevious = () => {    
    switch (activeTab) {
      case "sourceForms":
        setActiveTab("basicSettings");
        break;
      case "calculatedForms":
        setActiveTab("sourceForms");
        break;
      case "aggregation":
        setActiveTab("calculatedForms");
        break;
      case "columns":
        setActiveTab("aggregation");
        break;
      case "controlPanel":
        setActiveTab("columns");
        break;
      case "filters":
        setActiveTab("controlPanel");
        break;
      case "controlsActions":
        setActiveTab("filters");
        break;
      default:        
        break;
    }
  };

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <div className="App">
      <h1 className="text-center">Basic Settings</h1>
      <Container>
        <Tab.Container id="left-tabs-example" activeKey={activeTab || "basicSettings"} onSelect={(key: string | null) => setActiveTab(key)}>
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column sticky-top">
                <Nav.Item>                  
                  <Nav.Link eventKey="basicSettings" className="first-tab">Basic Settings</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sourceForms" className="tab">Source Forms</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="calculatedForms" className="tab">Calculated Columns</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="aggregation" className="tab">Aggregation</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="columns" className="tab">Columns</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="controlPanel" className="tab">Control Panel</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="filters" className="tab">Filters</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="controlsActions" className="tab">Contols Actions</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="basicSettings" className="tabContent">
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
                </Tab.Pane>

                <Tab.Pane eventKey="sourceForms" className="tabContent">
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
                    <Container style={{backgroundColor: "white"}}>
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
                </Tab.Pane>

                <Tab.Pane eventKey="calculatedForms" className="tabContent">
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
                </Tab.Pane>

                <Tab.Pane eventKey="aggregation" className="tabContent">
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
                  <AddRemoveInputField setFormData={setFormData} />
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
                </Tab.Pane>

                <Tab.Pane eventKey="columns" className="tabContent">
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
                      <AddRemoveInputFieldsColumns setFormData={setFormData} />
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
                </Tab.Pane>

                <Tab.Pane eventKey="controlPanel" className="tabContent">
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
                </Tab.Pane>

                <Tab.Pane eventKey="filters" className="tabContent">
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
                </Tab.Pane>

                <Tab.Pane eventKey="controlsActions" className="tabContent">
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
                  <Container className="rounded-1" style={{backgroundColor: "white"}}>
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
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        <div className="d-flex">
          <Button variant="dark" href="#" className="btn">Cancel</Button>
          <Button onClick={handlePrevious} className="btn" hidden={activeTab === "basicSettings"}>Previous</Button>        
          <Button onClick={handleNext} className="btn" hidden={activeTab === "controlsActions"}>Next</Button>
          {activeTab === "controlsActions" && (
            <Button type="submit" className="btn">Submit Form</Button>
          )}
        </div>
      </Container>      
    </div>
  );
}

export default App;
