interface SquareProps {
  value: string | null;
  onClick: () => void;
  isWinning: boolean;
}

export const Square: React.FC<SquareProps> = ({
  value,
  onClick,
  isWinning,
}) => {
  return (
    <button
      className={`square ${isWinning ? 'winning' : ''}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
