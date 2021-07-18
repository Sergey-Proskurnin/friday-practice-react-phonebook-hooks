import React from "react";
import { Container } from "@material-ui/core";

const PhonebookList = ({ contacts, onDeleteContact }) => {
  return (
    <Container>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            <h4>Имя: {name}</h4>
            <p>Телефон: {number}</p>
            <button id={id} onClick={onDeleteContact}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default PhonebookList;
