import React from "react";
import PhonebookForm from "./PhonebookForm";
import PhonebookList from "./PhonebookList";
import PhonebookFilter from "./PhonebookFilter";

function Phonebook({
  onSetFilter,
  addContact,
  contacts,
  filterValue,
  showFilter,
  onDeleteContact,
}) {
  return (
    <div>
      <h1>Phonebook</h1>
      <PhonebookForm addContact={addContact} />
      {showFilter && (
        <PhonebookFilter filterValue={filterValue} onSetFilter={onSetFilter} />
      )}
      <PhonebookList contacts={contacts} onDeleteContact={onDeleteContact} />
    </div>
  );
}

export default Phonebook;
