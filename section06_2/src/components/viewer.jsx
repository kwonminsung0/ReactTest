const Viewer = ({ result, input }) => {
  return (
    <>
      <div className="input">
        <p>input : </p>
        <h1>{input || 0}</h1>
      </div>
      <div className="result">
        <p>result : </p>
        <h1>{result}</h1>
      </div>
    </>
  );
};

export default Viewer;
