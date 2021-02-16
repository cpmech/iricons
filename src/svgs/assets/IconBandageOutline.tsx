export interface IconBandageOutlineProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconBandageOutline: React.FC<IconBandageOutlineProps> = ({ size = '24px', style }) => {
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
          <rect x="-24.43" y="167.88" width="560.87" height="176.25" rx="88.12" ry="88.12" transform="rotate(-45 256 256.002)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><rect x="169.41" y="156.59" width="176" height="196" rx="32" ry="32" transform="rotate(45 257.409 254.582)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><circle cx="256" cy="208" r="16"/><circle cx="304" cy="256" r="16"/><circle cx="208" cy="256" r="16"/><circle cx="256" cy="304" r="16"/>
        </svg>
      </div>
    </div>
  );
};
