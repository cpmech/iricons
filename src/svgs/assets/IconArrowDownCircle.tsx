export interface IconArrowDownCircleProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconArrowDownCircle: React.FC<IconArrowDownCircleProps> = ({ size = '24px', style }) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
        height: size,
        width: size,
      }}
    >
      <div
        style={{
          position: 'relative',
          height: 0,
          width: '100%',
          padding: 0,
          paddingBottom: '100%',
        }}
      >
        <svg
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
          }}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48 48 141.13 48 256s93.13 208 208 208zm-91.36-212.65a16 16 0 0122.63-.09L240 303.58V170a16 16 0 0132 0v133.58l52.73-52.32A16 16 0 11347.27 274l-80 79.39a16 16 0 01-22.54 0l-80-79.39a16 16 0 01-.09-22.65z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
