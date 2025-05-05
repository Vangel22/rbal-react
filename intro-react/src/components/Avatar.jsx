//<button></button>
// molecule
// organism

import reactLogo from "../assets/react.svg";
import styles from "../styles/Avatar.module.css";

const Avatar = ({ name, age }) => {
  return (
    <>
      <h1 className={styles.header}>{name}</h1>
      <h2>Age: {age}</h2>
      <a target="_blank" href="https://vangelhristov.com">
        <img className={styles.image} src={reactLogo} alt="React logo" />
      </a>
    </>
  );
};

const AvatarAdvanced = () => {
  return <h1>Advanced Avatar</h1>;
};

export { AvatarAdvanced }; // named export
export default Avatar; // default export (only one per file)
