import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";

import { FormArea } from "./components/FormArea";
import { ListArea } from "./components/ListArea";
import { postForm, fetchForm, deleteForm } from "./helpers/axiosHelpers";

function App() {
  const [formList, setFormList] = useState([]);
  const [response, setResponse] = useState({});
  const [formToDelete, setFormtoDelete] = useState([]);

  useEffect(() => {
    //run code
    getTasks();
  }, []);
  //call axios to fetch all data
  const getTasks = async () => {
    const { status, users } = await fetchForm();
    status === "success" && setFormList(users);
  };

  const addTask = async (data) => {
    //send data to the api
    const result = await postForm(data);
    console.log(result);

    result?.status === "success" && getTasks();
    setResponse(response);
  };

  const handleOnDelete = async (_id) => {
    if (!window.confirm("Sorry La")) {
      return;
    }
    const result = await deleteForm(formToDelete);
    console.log(result);
    setResponse(result);
    setFormtoDelete([]);

    result.status === "success" && getTasks();
  };

  console.log(formList);
  return (
    <div className="wrapper">
      <Container>
        <FormArea addTask={addTask} handleOnDelete={handleOnDelete} />
        <ListArea formList={formList} handleOnDelete={handleOnDelete} />
      </Container>
    </div>
  );
}

export default App;
