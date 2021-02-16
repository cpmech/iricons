export interface IconExitSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconExitSharp: React.FC<IconExitSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M335.69 272h-161v-32h161V92a12 12 0 00-12-12h-280a12 12 0 00-12 12v328a12 12 0 0012 12h280a12 12 0 0012-12zm83.37 0l-64 64 22.63 22.63L480.31 256 377.69 153.37 355.06 176l64 64h-83.37v32h83.37z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
