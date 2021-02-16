export interface IconEyeOffSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconEyeOffSharp: React.FC<IconEyeOffSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M63.998 86.004l21.998-21.998L448 426.01l-21.998 21.998zM259.34 192.09l60.57 60.57a64.07 64.07 0 00-60.57-60.57zm-6.68 127.82l-60.57-60.57a64.07 64.07 0 0060.57 60.57z" fill="currentColor"/><path d="M256 352a96 96 0 01-92.6-121.34l-69.07-69.08C66.12 187.42 39.24 221.14 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416A233.47 233.47 0 00335 402.2l-53.61-53.6A95.84 95.84 0 01256 352zm0-192a96 96 0 0192.6 121.34L419.26 352c29.15-26.25 56.07-61.56 76.74-96-26.38-43.43-62.9-88.56-101.18-114.82C351.1 111.2 304.31 96 255.76 96a222.92 222.92 0 00-78.21 14.29l53.11 53.11A95.84 95.84 0 01256 160z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
