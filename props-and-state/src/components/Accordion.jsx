import { useState } from "react";

// Passing state through components
export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>Almaty, Kazahstan</h2>
      <Panel
        title="First panel"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
        eligendi temporibus fuga, consequuntur eos culpa voluptate corporis
        necessitatibus optio, vero nulla voluptatem. Distinctio rerum aliquam
        voluptatem quisquam iure illum possimus.
      </Panel>

      <Panel
        title="Second panel"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
        eligendi temporibus fuga, consequuntur eos culpa voluptate corporis
        necessitatibus optio, vero nulla voluptatem. Distinctio rerum aliquam
        voluptatem quisquam iure illum possimus.
      </Panel>
    </>
  );
};

const Panel = ({ title, isActive, onShow, children }) => {
  return (
    <section>
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
};
