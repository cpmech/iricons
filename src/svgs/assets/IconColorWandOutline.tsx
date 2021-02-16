export interface IconColorWandOutlineProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconColorWandOutline: React.FC<IconColorWandOutlineProps> = ({ size = '24px', style }) => {
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
          <rect fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" x="280.48" y="122.9" width="63.03" height="378.2" rx="31.52" transform="rotate(-45 312.002 311.994)"/><path d="M178.38 178.38a31.64 31.64 0 000 44.75L223.25 268 268 223.25l-44.87-44.87a31.64 31.64 0 00-44.75 0z"/><path stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" strokeLinecap="round" d="M48 192h48M90.18 90.18l33.94 33.94M192 48v48m101.82-5.82l-33.94 33.94M124.12 259.88l-33.94 33.94"/>
        </svg>
      </div>
    </div>
  );
};
