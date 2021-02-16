export interface IconThunderstormSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconThunderstormSharp: React.FC<IconThunderstormSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M405.84 136.9a151.25 151.25 0 00-47.6-81.9 153 153 0 00-241.81 51.86C60.5 110.16 16 156.65 16 213.33 16 272.15 63.91 320 122.8 320h72.31L176 416h48v80l112-144h-43.51l8-32h103.84a91.56 91.56 0 001.51-183.1z"/><path d="M74.53 407.177l38.32-76.622 28.62 14.313-38.32 76.623zm23.99 64.012l30.318-60.622 28.62 14.313-30.317 60.622zm256.021-64l38.32-76.623 28.62 14.314-38.32 76.622zm24.001 64.011l30.317-60.622 28.62 14.314-30.317 60.621z"/>
        </svg>
      </div>
    </div>
  );
};
