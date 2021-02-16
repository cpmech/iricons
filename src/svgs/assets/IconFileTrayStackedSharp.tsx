export interface IconFileTrayStackedSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconFileTrayStackedSharp: React.FC<IconFileTrayStackedSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M448 16H64L32 176v144h448V176zm-12 160H320a64 64 0 01-128 0H76L98 58h316zM320 352a64 64 0 01-128 0H32v144h448V352z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
