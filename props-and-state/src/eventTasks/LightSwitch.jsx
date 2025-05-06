// Fix the following code so it changes for white to black and vice versa

export default function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === "black") {
      bodyStyle.backgroundColor = "white";
    } else {
      bodyStyle.backgroundColor = "black";
    }
  }

  return <button onClick={handleClick()}>Toggle the lights</button>;
}
