export interface IconWatchSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconWatchSharp: React.FC<IconWatchSharpProps> = ({ size = '24px', style }) => {
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
          <rect x="136" y="136" width="240" height="240" rx="8" ry="8"/><path d="M384 96h-48V16H176v80h-48a32 32 0 00-32 32v256a32 32 0 0032 32h48v80h160v-80h48a32 32 0 0032-32V128a32 32 0 00-32-32zm8 272a24 24 0 01-24 24H144a24 24 0 01-24-24V144a24 24 0 0124-24h224a24 24 0 0124 24z"/>
        </svg>
      </div>
    </div>
  );
};
