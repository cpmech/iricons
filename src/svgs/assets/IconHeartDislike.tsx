export interface IconHeartDislikeProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconHeartDislike: React.FC<IconHeartDislikeProps> = ({ size = '24px', style }) => {
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
          <path d="M417.84 448a16 16 0 01-11.35-4.72l-365.84-368a16 16 0 1122.7-22.56l365.83 368A16 16 0 01417.84 448zM364.92 80c-44.09 0-74.61 24.82-92.39 45.5a6 6 0 01-9.06 0C245.69 104.82 215.16 80 171.08 80a107.71 107.71 0 00-31 4.54l269.13 270.7c3-3.44 5.7-6.64 8.14-9.6 40-48.75 59.15-98.79 58.61-153C475.37 130.53 425.54 80 364.92 80zM69 149.15a115.06 115.06 0 00-9 43.49c-.54 54.21 18.63 104.25 58.61 153 18.77 22.87 52.8 59.45 131.39 112.8a31.88 31.88 0 0036 0c20.35-13.82 37.7-26.5 52.58-38.12z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};