interface ButtonProps {
  className: string;
  text: string;
  onClick: () => void;
}

export const Button = ({ className, text, onClick }: ButtonProps) => (
  <button type="button" className={className} onClick={onClick}>
    {text}
  </button>
);
