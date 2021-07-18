import React, { useState } from "react";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import shortId from "shortid";

const styles = {
  display: "flex",
  width: "300px",
  flexDirection: "column",
  justifyContent: "center",
  margin: "0 auto",
};

const initialState = {
  id: "",
  name: "",
  number: "",
};

function PhonebookForm(props) {
  const [state, setState] = useState(initialState);

  const handleSetState = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container>
      <FormControl style={styles}>
        <TextField
          onInput={handleSetState}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={state.name}
          id="2"
          label="Введите имя"
          variant="outlined"
        />
        <TextField
          onInput={handleSetState}
          style={{ marginTop: "20px" }}
          id="outlined-number"
          label="Number"
          value={state.number}
          type="number"
          name="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <Button
          onClick={() => {
            const { name, number } = state;
            props.addContact({ name, number, id: shortId.generate() });
            setState((prev) => ({
              ...prev,
              name: "",
              number: "",
            }));
          }}
          style={{ marginTop: "20px" }}
          variant="contained"
          color="primary"
        >
          Send
        </Button>
      </FormControl>
    </Container>
  );
}

export default PhonebookForm;
