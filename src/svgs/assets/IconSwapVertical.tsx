export interface IconSwapVerticalProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconSwapVertical: React.FC<IconSwapVerticalProps> = ({ size = '24px', style }) => {
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
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M464 208L352 96 240 208m112-94.87V416M48 304l112 112 112-112m-112 94V96"/>
        </svg>
      </div>
    </div>
  );
};
