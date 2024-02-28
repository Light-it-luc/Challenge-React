interface ButtonProps {
  className?: string;
  children: JSX.Element;
  active: boolean;
  onClick: () => void;
}

export const Button = ({
  className,
  children,
  active,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={className}
      type="button"
      disabled={!active}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
