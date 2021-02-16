export interface IconKeySharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconKeySharp: React.FC<IconKeySharpProps> = ({ size = '24px', style }) => {
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
          <path d="M218.1 167.2c0 13 0 25.6 4.1 37.4-43.1 50.6-167.5 194.5-167.5 194.5l2.9 36.3s34.8 33 40 28c15.4-15 24.8-25.2 24.8-25.2l7.24-43.35 47.11-3.47 3.78-46.8 49.63-.95.49-50.09 52.69 2.1 9-18.84c15.5 6.7 29.6 9.4 47.7 9.4 68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.4-121.9 119.2zM406.85 144A38.85 38.85 0 11368 105.15 38.81 38.81 0 01406.85 144z"/>
        </svg>
      </div>
    </div>
  );
};
