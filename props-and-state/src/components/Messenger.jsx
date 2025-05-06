// Perserving and reseting state

import { useState } from "react";

const contacts = [
  {
    name: "Taylor",
    email: "taylor@mail.com",
  },
  {
    name: "John",
    email: "john@mail.com",
  },
  {
    name: "Jane",
    email: "jane@mail.com",
  },
];

export const Messenger = () => {
  const [to, setTo] = useState(contacts[0]); // taylor object

  console.log("to", to);

  return (
    <div
      style={{
        // Direct styling in react component
        backgroundColor: `${to.name === "Taylor" ? "red" : "green"}`,
        // background-color in css
      }}
    >
      <ContactList
        contacts={contacts}
        selectedContact={to} // Taylor initially
        onSelect={(contact) => setTo(contact)}
      />
      <Chat key={to.email} contact={to} />
    </div>
  );
};

const ContactList = ({ contacts, selectedContact, onSelect }) => {
  return (
    <section>
      <h1>{selectedContact.name}</h1>
      {/* Taylor */}
      {contacts.length > 0 && // contacts.length = 2
        contacts.map(
          (
            contact // Taylor, John, Jane -> OBJECTS
          ) => <button onClick={() => onSelect(contact)}>{contact.name}</button>
        )}
    </section>
  );
};

const Chat = ({ contact }) => {
  const [text, setText] = useState("");

  return (
    <section key={contact.email}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={`Chat to: ${contact.name}`}
        // Template literal inside a tag
      />
      <br />
      <button>Send text to {contact.name}</button>
    </section>
  );
};
