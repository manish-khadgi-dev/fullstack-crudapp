import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInputField } from "../CustomInputField/CustomInputField";
import { toast } from "react-toastify";
import { postUser } from "../helpers/axiosHelpers";

export const FormArea = ({ getUsers }) => {
  const [newUser, setNewUser] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await postUser(newUser);
    toast[status](message);

    status === "success" && getUsers();
  };

  const inputFields = [
    {
      name: "fName",
      label: "First Name",
      type: "text",
      required: true,
      placeholder: "",
    },
    {
      name: "lName",
      label: "last Name",
      type: "text",
      required: true,
      placeholder: "",
    },
    {
      name: "email",
      label: "Email",
      type: "text",
      required: true,
      placeholder: "",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      placeholder: "***************",
    },
  ];

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        {inputFields.map((item, i) => (
          <CustomInputField key={i} {...item} onChange={handleOnChange} />
        ))}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
