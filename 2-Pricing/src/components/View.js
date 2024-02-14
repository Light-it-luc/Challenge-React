export const View = ({ isMonthlyView, setIsMonthlyView }) => {
  return (
    <div>
      <button
        className={`${isMonthlyView ? "" : ""}`}
        onClick={() => setIsMonthlyView(true)}
      >
        Monthly view
      </button>
      <button
        className={`${isMonthlyView ? "" : ""}`}
        onClick={() => setIsMonthlyView(false)}
      >
        Weekly view
      </button>
    </div>
  );
};
