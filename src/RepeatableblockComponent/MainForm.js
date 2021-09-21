import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";

const MainForm = () => {
  const [inputFields, setInputFields] = useState([
    { firstName: "", lastName: "" },
    { firstName: "", lastName: "" },
  ]);

  const [allData, setAllData] = useState([]);

  const handleInputFields = (index, event) => {
    let name = event.target.name;
    let value = event.target.value;
    const inputValues = [...inputFields];
    inputValues[index][name] = value;
    setInputFields(inputValues);
  };

  const onSendHandler = (e) => {
    e.preventDefault();
    setAllData(inputFields);
  };

  const onRemoveInputFields = (index, event) => {
    const removedData = inputFields.filter((value, ind) => {
      if (index !== ind) {
        return value;
      }
    });
    console.log(removedData)
    setInputFields(removedData);
  };

  const onAddInputFields = (index, event) => {
    setInputFields([...inputFields, { firstName: "", lastName: "" }]);
  };

  return (
    <Container>
      <h3>Add new Member</h3>
      <form>
        {inputFields.map((inputField, index) => {
          return (
            <div key={index}>
              <TextField
                label="First Name"
                name="firstName"
                value={inputField.firstName}
                style={{ margin: "10px" }}
                onChange={(event) => handleInputFields(index, event)}
              />
              <TextField
                label="Last Name"
                name="lastName"
                value={inputField.lastName}
                style={{ margin: "10px" }}
                onChange={(event) => handleInputFields(index, event)}
              />

              <IconButton
                onClick={(event) => onRemoveInputFields(index, event)}
              >
                <RemoveIcon />
              </IconButton>

              <IconButton onClick={(event) => onAddInputFields(index, event)}>
                <AddIcon />
              </IconButton>
            </div>
          );
        })}
        <Button
          variant="contained"
          type="submit"
          color="primary"
          endIcon={<Icon>send</Icon>}
          onClick={onSendHandler}
        >
          Send
        </Button>
      </form>
    </Container>
  );
};

export default MainForm;
