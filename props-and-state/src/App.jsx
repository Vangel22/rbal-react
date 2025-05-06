import "./App.css";
import { FirstApp } from "./components/FirstApp";
import { EventBubblingExample } from "./events/EventBubbling";
import { EventPreventDefault } from "./events/EventPreventDefault";
import { Playing } from "./events/Playing";

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
      <EventPreventDefault />
    </>
  );
}

export default App;
