export interface IconAppsSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconAppsSharp: React.FC<IconAppsSharpProps> = ({ size = '24px', style }) => {
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
          <rect x="48" y="48" width="112" height="112" rx="8" ry="8"/><rect x="200" y="48" width="112" height="112" rx="8" ry="8"/><rect x="352" y="48" width="112" height="112" rx="8" ry="8"/><rect x="48" y="200" width="112" height="112" rx="8" ry="8"/><rect x="200" y="200" width="112" height="112" rx="8" ry="8"/><rect x="352" y="200" width="112" height="112" rx="8" ry="8"/><rect x="48" y="352" width="112" height="112" rx="8" ry="8"/><rect x="200" y="352" width="112" height="112" rx="8" ry="8"/><rect x="352" y="352" width="112" height="112" rx="8" ry="8"/>
        </svg>
      </div>
    </div>
  );
};
