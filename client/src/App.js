import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";

import { FormArea } from "./components/FormArea";
import { ListArea } from "./components/ListArea";
import { ToastContainer } from "react-toastify";
import { fetchUsers } from "./helpers/axiosHelpers";

function App() {
  const [userslist, setUserslist] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const { users } = await fetchUsers();
    setUserslist(users);
  };

  return (
    <div className="wrapper">
      <Container>
        <FormArea getUsers={getUsers} />
        <div className="py-5"> {userslist.length} users found</div>
        <ListArea userslist={userslist} getUsers={getUsers} />
      </Container>
      <ToastContainer />
    </div>
  );
}

export default App;
