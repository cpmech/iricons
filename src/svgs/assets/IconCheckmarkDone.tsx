export interface IconCheckmarkDoneProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconCheckmarkDone: React.FC<IconCheckmarkDoneProps> = ({ size = '24px', style }) => {
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
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M464 128L240 384l-96-96m0 96l-96-96m320-160L232 284"/>
        </svg>
      </div>
    </div>
  );
};
