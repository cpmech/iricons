export interface IconWatchProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconWatch: React.FC<IconWatchProps> = ({ size = '24px', style }) => {
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
          <rect x="136" y="136" width="240" height="240" rx="56" ry="56"/><path d="M336 96V32a16 16 0 00-16-16H192a16 16 0 00-16 16v64a80.09 80.09 0 00-80 80v160a80.09 80.09 0 0080 80v64a16 16 0 0016 16h128a16 16 0 0016-16v-64a80.09 80.09 0 0080-80V176a80.09 80.09 0 00-80-80zm56 224a72.08 72.08 0 01-72 72H192a72.08 72.08 0 01-72-72V192a72.08 72.08 0 0172-72h128a72.08 72.08 0 0172 72z"/>
        </svg>
      </div>
    </div>
  );
};
