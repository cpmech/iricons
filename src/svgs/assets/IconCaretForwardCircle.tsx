export interface IconCaretForwardCircleProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconCaretForwardCircle: React.FC<IconCaretForwardCircleProps> = ({ size = '24px', style }) => {
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
          <path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-252 74.14V181.86a16 16 0 0126.23-12.29l89.09 74.13a16 16 0 010 24.6l-89.09 74.13A16 16 0 01212 330.14z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
