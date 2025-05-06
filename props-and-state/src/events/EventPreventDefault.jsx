export const EventPreventDefault = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Form submitted, but the page did not reload!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
};
