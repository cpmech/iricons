export interface IconMoveSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconMoveSharp: React.FC<IconMoveSharpProps> = ({ size = '24px', style }) => {
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
          <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="M176 112l80-80 80 80m-80.02-80l.02 448m-80-80l80 80 80-80m64-224l80 80-80 80M112 176l-80 80 80 80m-80-80h448"/>
        </svg>
      </div>
    </div>
  );
};
