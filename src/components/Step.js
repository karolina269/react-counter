const Step = (props) => {
  return (
    <p>
      <span>Step:</span>
      <input type="number" min="1" onChange={(e) => props.updateStep(e)} />
    </p>
  );
};

export default Step;
