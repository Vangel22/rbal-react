export const EventBubblingExample = () => {
  const handleEvent = (e) => {
    e.stopPropagation();

    alert("Event one");
  };

  return (
    <form onClick={() => alert("form toggling")}>
      <button onClick={(e) => handleEvent(e)}>Event one</button>
      <button onClick={() => alert("Event two")}>Event two</button>
    </form>
  );
};
