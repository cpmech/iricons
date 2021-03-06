export interface IconCodeWorkingSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconCodeWorkingSharp: React.FC<IconCodeWorkingSharpProps> = ({ size = '24px', style }) => {
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
          <circle cx="256" cy="256" r="26" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="10" fill="currentColor"/><circle cx="346" cy="256" r="26" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="10" fill="currentColor"/><circle cx="166" cy="256" r="26" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="10" fill="currentColor"/><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="42" d="M160 368L32 256l128-112m192 224l128-112-128-112"/>
        </svg>
      </div>
    </div>
  );
};
