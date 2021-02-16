export interface IconKeypadSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconKeypadSharp: React.FC<IconKeypadSharpProps> = ({ size = '24px', style }) => {
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
          <rect x="80" y="16" width="96" height="96" rx="8" ry="8"/><rect x="208" y="16" width="96" height="96" rx="8" ry="8"/><rect x="336" y="16" width="96" height="96" rx="8" ry="8"/><rect x="80" y="144" width="96" height="96" rx="8" ry="8"/><rect x="208" y="144" width="96" height="96" rx="8" ry="8"/><rect x="336" y="144" width="96" height="96" rx="8" ry="8"/><rect x="80" y="272" width="96" height="96" rx="8" ry="8"/><rect x="208" y="272" width="96" height="96" rx="8" ry="8"/><rect x="208" y="400" width="96" height="96" rx="8" ry="8"/><rect x="336" y="272" width="96" height="96" rx="8" ry="8"/>
        </svg>
      </div>
    </div>
  );
};
