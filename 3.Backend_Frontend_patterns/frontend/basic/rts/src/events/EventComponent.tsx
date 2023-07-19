const EventComponent: React.FC = () => {
  // the type inference system not defined head of time that why
  // it shows error
  // to solve the error in e we use React.ChangeEvent<HTMLInputElement>
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <div>
      <input onChange={onChange} />
    </div>
  );
};

export default EventComponent;
