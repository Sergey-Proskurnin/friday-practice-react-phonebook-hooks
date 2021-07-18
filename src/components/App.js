import React, { useEffect, useState } from "react";
import Statistics from "./Feedback/Section/Section";
import Phonebook from "./Phonebook/Phonebook";

// helpers
import filterContacts from "../helpers/filterContacts";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
  contacts: [],
  showFilter: false,
  filter: "",
};

function App() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const contactsFromLocal = JSON.parse(localStorage.getItem("contacts"));
    setState((prev) => ({
      ...prev,
      contacts: contactsFromLocal !== null ? contactsFromLocal : [],
      showFilter:
        contactsFromLocal !== null ? contactsFromLocal.length > 1 : false,
    }));
  }, []);

  const handleAddContact = (contact) => {
    localStorage.setItem(
      "contacts",
      JSON.stringify([...state.contacts, contact])
    );
    setState((prev) => ({
      ...prev,
      contacts: [...prev.contacts, contact],
      showFilter: prev.contacts.length > 0,
    }));
  };

  const handleChangeStats = (name) => {
    setState((prev) => ({
      ...prev,
      [name]: prev[name] + 1,
    }));
  };

  const handleDeleteContact = (e) => {
    const contacts = state.contacts.filter((el) => el.id !== e.target.id);
    setState((prev) => ({
      ...prev,
      contacts: contacts,
      showFilter: contacts.length > 1,
    }));
    localStorage.setItem("contacts", JSON.stringify(contacts));
  };

  const handleChangeFilter = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getTotal = () => {
    const { good, bad, neutral } = state;
    return good + bad + neutral;
  };

  const getPositiveFeedback = () => {
    const { good } = state;
    return good ? Math.ceil((good / getTotal()) * 100) + "%" : 0 + "%";
  };

  const contacts = filterContacts(state.contacts, state.filter);

  return (
    <div style={{ textAlign: "center" }} className="App">
      <h1>Feedback</h1>
      <Statistics
        positiveFeedback={getPositiveFeedback()}
        total={getTotal()}
        handleChange={handleChangeStats}
        stats={state}
      />
      <Phonebook
        onDeleteContact={handleDeleteContact}
        onSetFilter={handleChangeFilter}
        filterValue={state.filter}
        showFilter={state.showFilter}
        contacts={contacts}
        addContact={handleAddContact}
      />
    </div>
  );
}

export default App;
