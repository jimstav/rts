const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <div>
      <h3>Event Component</h3>
      <input onChange={onChange} />
    </div>
  );
};

export default EventComponent;
