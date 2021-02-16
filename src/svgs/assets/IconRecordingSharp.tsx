export interface IconRecordingSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconRecordingSharp: React.FC<IconRecordingSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M384 138a117.93 117.93 0 00-91.84 192h-72.32A118 118 0 10128 374h256a118 118 0 000-236zM54 256a74 74 0 1174 74 74.09 74.09 0 01-74-74zm330 74a74 74 0 1174-74 74.09 74.09 0 01-74 74z"/>
        </svg>
      </div>
    </div>
  );
};
