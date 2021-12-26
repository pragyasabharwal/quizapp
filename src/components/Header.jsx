export const Header = ({ setCount }) => {
  return (
    <div className="header">
      <div className="arrow" onClick={() => setCount((prev) => prev - 1)}>
        ←
      </div>
      <div>Attempt questions here</div>
      <div className="arrow" onClick={() => setCount((prev) => prev + 1)}>
        →
      </div>
    </div>
  );
};
