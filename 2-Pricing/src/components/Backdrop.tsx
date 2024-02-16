interface BackdropProps {
  onBackdropClick: () => void;
}

export const Backdrop = ({ onBackdropClick }: BackdropProps) => {
  return <button className="backdrop" onClick={onBackdropClick} />;
};
