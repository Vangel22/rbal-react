import PropTypes from "prop-types";

const FirstApp = ({ title, subtitle, name, disabled, onSmash }) => {
  const array = [1, 2, 3, 4];

  const biggerThanTwoMultiplied = array
    .filter((el) => el > 2) // 3, 4
    .map((el) => el * 2); // 3 * 2, 4 * 2

  if (disabled) {
    return (
      <h1>My button is disabled and this component is not going to work</h1>
    );
  }

  const arrayWithObjects = [
    {
      firstname: "Vangel",
      lastname: "Hristov",
    },
    {
      firstname: "John",
      lastname: "Doe",
    },
  ];

  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>{name}</p>
      {/* {disabled && <h1>MY BUTTON IS DISABLED</h1>} */}
      {/* {disabled ? (
        <p>My button is currently disabled</p>
      ) : (
        <p>My button is live</p>
      )} */}
      {array.length > 0 ? (
        array.map((el) => <p>{el}</p>)
      ) : (
        <p>No data available.</p>
      )}

      {arrayWithObjects.map((el) => (
        <p>
          {el.firstname} {el.lastname}
        </p>
      ))}

      {arrayWithObjects.map((el) => (
        <>
          <p>{el.firstname}</p>
          <p>{el.lastname}</p>
        </>
      ))}
      <button disabled={disabled} onClick={onSmash}>
        CLick me
      </button>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onSmash: PropTypes.func,
};

export { FirstApp };

// Command 1: ➜
// npm uninstall react react-dom @types/react @types/react-dom

// Command 2: ➜
// npm install react@18 react-dom@18 @types/react@18 @types/react-dom@18

// Task: Implement the PropTypes for your card component

// To import prop types:

// import PropTypes from "prop-types";
