interface ViewProps {
  isMonthlyView: boolean;
  setIsMonthlyView: (monthly: boolean) => void;
}

export const View = ({ isMonthlyView, setIsMonthlyView }: ViewProps) => {
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
