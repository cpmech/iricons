export interface IconBaseballOutlineProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconBaseballOutline: React.FC<IconBaseballOutlineProps> = ({ size = '24px', style }) => {
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
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M294.25 108.6l-60.57 17.59m83.45 29.92l-51.5 36.4m90.26 2.36l-36.4 51.5m83.91-28.62l-17.59 60.57"/><circle cx="256" cy="256" r="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M432.94 255.05a192 192 0 01-176.31-180.7M108.54 294.31l17.59-60.57m29.92 83.45l36.4-51.5m2.36 90.26l51.5-36.4m-28.62 83.91l60.57-17.59M255 433.61A192 192 0 0074.29 256.69" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
        </svg>
      </div>
    </div>
  );
};
