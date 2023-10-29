import React from "react";
import { Form } from "react-bootstrap";

const CustomInputField = ({
  classname,
  name,
  action,
  labelname,
  placeholder,
  type,
  error,
  important,
  labelText,
}) => {
  return (
    <div>
      <div>
        <label className="common-head-fw mb-2 py-0 fw-500">
          {labelname ? labelname : ""}
          {important && <span className="text-danger"> *</span>}
        </label>{" "}
        <span className="fs-7">{labelText ? `(${labelText})` : ""}</span>
      </div>
      <Form.Control
        className={"custom-input mt-3"}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={action}
      />
      <p className="text-danger">{error}</p>
    </div>
  );
};

export default CustomInputField;
