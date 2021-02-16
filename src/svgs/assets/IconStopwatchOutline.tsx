export interface IconStopwatchOutlineProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconStopwatchOutline: React.FC<IconStopwatchOutlineProps> = ({ size = '24px', style }) => {
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
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 232v-80"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M256 88V72m-124 60l-12-12"/><circle cx="256" cy="272" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path d="M256 96a176 176 0 10176 176A176 176 0 00256 96z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
        </svg>
      </div>
    </div>
  );
};
