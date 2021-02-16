export interface IconFolderOpenSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconFolderOpenSharp: React.FC<IconFolderOpenSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M16.08 189.4l28.58 233.87A28 28 0 0072.52 448h367a28 28 0 0027.86-24.73l28.54-233.87A12 12 0 00484 176H28a12 12 0 00-11.92 13.4zM464 124a28 28 0 00-28-28H244.84l-48-32H76a28 28 0 00-28 28v52h416z"/>
        </svg>
      </div>
    </div>
  );
};
