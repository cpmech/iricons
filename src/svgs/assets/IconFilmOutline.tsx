export interface IconFilmOutlineProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconFilmOutline: React.FC<IconFilmOutlineProps> = ({ size = '24px', style }) => {
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
          <rect x="48" y="96" width="416" height="320" rx="28" ry="28" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><rect x="384" y="336" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><rect x="384" y="256" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><rect x="384" y="176" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><rect x="384" y="96" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><rect x="48" y="336" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><rect x="48" y="256" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><rect x="48" y="176" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><rect x="48" y="96" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><rect x="128" y="96" width="256" height="160" rx="28" ry="28" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><rect x="128" y="256" width="256" height="160" rx="28" ry="28" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/>
        </svg>
      </div>
    </div>
  );
};
