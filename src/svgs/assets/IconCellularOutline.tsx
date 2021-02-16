export interface IconCellularOutlineProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconCellularOutline: React.FC<IconCellularOutlineProps> = ({ size = '24px', style }) => {
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
          <rect x="416" y="96" width="64" height="320" rx="8" ry="8" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><rect x="288" y="176" width="64" height="240" rx="8" ry="8" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><rect x="160" y="240" width="64" height="176" rx="8" ry="8" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><rect x="32" y="304" width="64" height="112" rx="8" ry="8" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/>
        </svg>
      </div>
    </div>
  );
};
