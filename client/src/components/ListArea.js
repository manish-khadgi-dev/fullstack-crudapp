import React from "react";
import { Button } from "react-bootstrap";
import { deleteUsers } from "../helpers/axiosHelpers";
import { toast } from "react-toastify";

export const ListArea = ({ userslist, getUsers }) => {
  const handleOndelete = async (_id) => {
    if (window.confirm("Are you sure you want to delete this user..?"));
    const { status, message } = await deleteUsers(_id);
    getUsers();
    toast[status](message);
  };

  const handleOnEdit = () => {
    setShow();
  };

  return (
    <div>
      <div className="row py-5">
        Form Details
        <hr />
        <table className="table table-bordered table-dark table-hover">
          <tbody id="formlist">
            {userslist.map(({ _id, fName, lName, email }) => {
              return (
                <tr key={_id}>
                  <td>{fName}</td>
                  <td>{lName}</td>
                  <td>{email}</td>
                  <td>
                    <Button variant="warning">Edit</Button>
                    <Button
                      variant="danger"
                      onClick={() => handleOndelete(_id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
