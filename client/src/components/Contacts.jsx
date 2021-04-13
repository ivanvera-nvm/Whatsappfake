import React from "react";
import { useContacts } from "../contexts/ContactsProvider";

import { ListGroup } from "react-bootstrap";

const Contacts = () => {
  const { contacts } = useContacts();

  return (
    <div>
      <ListGroup variant="flush">
        {contacts.map((contact) => (
          <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Contacts;
