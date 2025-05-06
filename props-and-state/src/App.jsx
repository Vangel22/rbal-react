import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { FirstApp } from "./components/FirstApp";
import { EventBubblingExample } from "./events/EventBubbling";
import { EventPreventDefault } from "./events/EventPreventDefault";
import { Playing } from "./events/Playing";
import { Input } from "./components/Input";
import { Greeting } from "./components/Greeting";
import { Accordion } from "./components/Accordion";
import { Messenger } from "./components/Messenger";

function App() {
  function onSmash() {
    alert("Click me button smashed!");
  }

  const cardData = [
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Emily Carter",
      age: 28,
      email: "emily.carter@example.com",
      isVerified: true,
      address: "123 Maple Street, Springfield, IL 62704",
    },
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "James Thompson",
      age: 35,
      email: "james.thompson@example.com",
      isVerified: false,
      address: "456 Oak Avenue, Denver, CO 80203",
    },
    {
      image: "https://randomuser.me/api/portraits/women/21.jpg",
      name: "Sophia Nguyen",
      age: 31,
      email: "sophia.nguyen@example.com",
      isVerified: true,
      address: "789 Pine Lane, Seattle, WA 98101",
    },
  ];

  const [name, setName] = useState("");

  // name = "Not to do"

  return (
    <>
      {/* <FirstApp
        title="My first app"
        subtitle="First course in React"
        name="Semos"
        // disabled={true}
        // disabled
        onSmash={onSmash}
      /> */}

      {/* <Playing /> */}
      {/* <EventBubblingExample /> */}
      {/* <EventPreventDefault /> */}
      {/* <Counter /> */}
      {/* Lifting state up */}
      {/* <Input name={name} setName={setName} />
      <Greeting name={name} /> */}
      {/* Passing state through components */}
      {/* <Accordion /> */}
      {/* Persist and reset state */}
      <Messenger />
    </>
  );
}

export default App;
