import React, { useEffect, useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import { Button } from "react-bootstrap";

interface InputField {
  email: string;
  [key: string]: string; // Index signature
}

interface Props {
  setFormData: React.Dispatch<React.SetStateAction<InputField[]>>;
}

function AddRemoveInputField(/* { setFormData }: Props */) {

  const [inputFields, setInputFields] = useState<InputField[]>([
    { email: "" },
  ]);

  // useEffect(() => {
  //   setFormData((prevData: any) => ({
  //     ...prevData,
  //     aggregatedColumnsEmail: inputFields
  //   }));
  //   console.log("Email : ", inputFields);
  // }, [inputFields]);

  const addInputField = () => {
    setInputFields([...inputFields, { email: "" }]);    
  };

  const removeInputField = (index: number) => {
    const updatedInputFields = inputFields.filter((_, i) => i !== index);
    setInputFields(updatedInputFields);
  };

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const updatedInputFields = [...inputFields];
    updatedInputFields[index][name] = value;
    setInputFields(updatedInputFields);
  };

  return (
    <div className="container bg-white">
      <div className="row">
        {inputFields.map((data, index) => (
          <div className="row my-3" key={index}>
            <div className="col-10">
              <div className="form-group">
                <input
                  type="text"
                  onChange={(event) => handleChange(index, event)}
                  value={data.email}
                  name="email"
                  className="form-control"
                  placeholder="Email (Employee Application/email)"
                />
              </div>
            </div>
            <div className="col-2">
              {inputFields.length !== 1 && (
                <button
                  className="btn btn-outline-danger"
                  onClick={() => removeInputField(index)}
                >
                  x
                </button>
              )}
            </div>
          </div>
        ))}
        <hr />
        <div className="row">
          <div className="d-flex">
            <Button onClick={addInputField}>
              <i className="fa fa-plus me-2"></i>
              Add Field
            </Button>
          </div>
        </div>        
      </div>
    </div>
  );
}

export default AddRemoveInputField;
