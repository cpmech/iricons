export interface IconEggProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconEgg: React.FC<IconEggProps> = ({ size = '24px', style }) => {
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
          <path d="M256 480c-52.57 0-96.72-17.54-127.7-50.73C96.7 395.4 80 346.05 80 286.55 80 230.5 101.48 168 138.93 115 175.65 63 219.41 32 256 32s80.35 31 117.07 83C410.52 168 432 230.5 432 286.55c0 59.5-16.7 108.85-48.3 142.72C352.72 462.46 308.57 480 256 480z"/>
        </svg>
      </div>
    </div>
  );
};
