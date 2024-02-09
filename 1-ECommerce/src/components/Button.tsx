interface ButtonProp {
  text: string;
  onButtonClick: () => void;
}

export const Button = ({ text, onButtonClick }: ButtonProp) => (
  <button
    className="rounded-full bg-orange-500 px-12 py-4 font-bold text-white"
    onClick={onButtonClick}
  >
    {text}
  </button>
);
