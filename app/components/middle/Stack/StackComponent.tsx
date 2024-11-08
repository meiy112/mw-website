const StackComponent = ({ image }: { image: string }) => {
  return (
    <div>
      <div>
        <img src={image} />
      </div>
    </div>
  );
};

export default StackComponent;
