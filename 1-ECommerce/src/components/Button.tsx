
interface ButtonProp {
    text: string;
    onButtonClick: () => void;
}

export const Button = ({ text, onButtonClick }: ButtonProp) =>
    <button
        className="text-white py-4 px-12 rounded-full font-bold bg-orange-500"
        onClick={onButtonClick}
    >
        {text}
    </button>
