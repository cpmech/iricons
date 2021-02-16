export interface IconBowlingBallSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconBowlingBallSharp: React.FC<IconBowlingBallSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM286 230a28 28 0 1128-28 28 28 0 01-28 28zm8-76a28 28 0 1128-28 28 28 0 01-28 28zm68 44a28 28 0 1128-28 28 28 0 01-28 28z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
