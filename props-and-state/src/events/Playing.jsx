export const Playing = () => {
  const onPlayMovie = () => {
    alert("Movie is playing");
  };

  return (
    <Toolbar
      onPlayMovie={onPlayMovie}
      onUploadImage={() => alert("Uploading image!")}
    />
  );
};

const Toolbar = ({ onPlayMovie, onUploadImage }) => {
  return (
    <>
      <Button onClick={onPlayMovie}>Play movie</Button>
      <Button onClick={onUploadImage}>Upload image</Button>
    </>
  );
};

// children is - Play Movie
// children is - Upload image
const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

// Try to give PropTypes to every component
