interface ViewProps {
  isMonthlyView: boolean;
  setIsMonthlyView: (monthly: boolean) => void;
}

export const View = ({ isMonthlyView, setIsMonthlyView }: ViewProps) => {
  return (
    <div id="view">
      <button
        id="left-view"
        className={`${isMonthlyView ? "active" : "inactive"}`}
        onClick={() => setIsMonthlyView(true)}
      >
        Month view
      </button>
      <button
        id="right-view"
        className={`${isMonthlyView ? "inactive" : "active"}`}
        onClick={() => setIsMonthlyView(false)}
      >
        Week view
      </button>
    </div>
  );
};
