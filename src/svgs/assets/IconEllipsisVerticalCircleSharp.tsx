export interface IconEllipsisVerticalCircleSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconEllipsisVerticalCircleSharp: React.FC<IconEllipsisVerticalCircleSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-234-90a26 26 0 1126 26 26 26 0 01-26-26zm0 90a26 26 0 1126 26 26 26 0 01-26-26zm0 90a26 26 0 1126 26 26 26 0 01-26-26z"/>
        </svg>
      </div>
    </div>
  );
};
