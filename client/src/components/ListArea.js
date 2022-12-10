import React from "react";

export const ListArea = ({ formList, handleOnDelete }) => {
  return (
    <div>
      <div className="row py-5">
        Form Details
        <hr />
        <table className="table table-bordered table-dark table-hover">
          <tbody id="formlist">
            {formList.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.fName}</td>
                  <td>{item.lName}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td className="text-end">
                    <button onClick={handleOnDelete}>
                      <i className="fa-solid fa-delete-left"></i>
                    </button>
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
