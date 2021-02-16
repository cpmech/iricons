export interface IconDesktopSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconDesktopSharp: React.FC<IconDesktopSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M480 48H32a16 16 0 00-16 16v320a16 16 0 0016 16h168v32h-72v32h256v-32h-72v-32h168a16 16 0 0016-16V64a16 16 0 00-16-16zm-20 36v216H52V84zM240.13 354.08a16 16 0 1113.79 13.79 16 16 0 01-13.79-13.79z"/>
        </svg>
      </div>
    </div>
  );
};
