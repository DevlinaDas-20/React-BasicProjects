import React, { useState } from "react";
import ErrorModal from "./ErrorModal";

const MainForm = () => {
  const [user, setUser] = useState({ name: "", age: "" });
  const [userList, setUserList] = useState([]);
  const takingInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const [error,setError] = useState([0,'']);
  const createList = () => {
    
    if (user.name.trim().length == 0 || user.age.trim().length == 0) {
      //alert('enter data pls!')
      setError([1,'enter data pls!'])
    } else if (user.age < 1) {
      //alert('enter age greater than 0')
      setError([2,'enter age greater than 0'])
    } else {
      setUserList([...userList, user]);
      setUser({ name: "", age: "" });
    }
  };

  const RenderList = () => {
    return userList.map((value) => {
      return (
        <div key={new Date().getUTCMilliseconds() + Math.random()}>
          <label>{value.name}</label>
          <label>{value.age}</label>
        </div>
      );
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Enter Name"
        onChange={takingInput}
      />
      <input
        type="text"
        name="age"
        value={user.age}
        placeholder="Enter Age"
        onChange={takingInput}
      />
      <button onClick={createList}>Submit</button>

      <RenderList />
      {(error[0] == 1 || error[0] == 2) ? <ErrorModal message={error[1]} data={error} setdata={setError} /> : ''}
    </div>
  );
};

export default MainForm;
