export interface IconBackspaceSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconBackspaceSharp: React.FC<IconBackspaceSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M144 96L32 256l112 160h304V96zm215.3 226.34L336.67 345l-65-65-65 65L184 322.34l65-65-65-65 22.63-22.63 65 65 65-65 22.63 22.63-65 65z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
