import React, { useState } from "react";

export const FormArea = ({ addTask }) => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    addTask(form);
    console.log(form);
  };
  console.log(form);

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="formarea ">
          <div className="py-1">
            <input
              name="fName"
              type="text"
              className="form-control"
              placeholder="First Name"
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="py-1">
            <input
              name="lName"
              type="text"
              className="form-control"
              placeholder="Last Name"
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="py-1">
            <input
              name="email"
              type="mail"
              className="form-control"
              placeholder="email"
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="py-1">
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              required
              onChange={handleOnChange}
            />
          </div>

          <div className="">
            <button className="btn btn-primary" type="submit">
              <i className="fa-solid fa-plus"></i>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
