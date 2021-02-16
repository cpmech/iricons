export interface IconBanProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconBan: React.FC<IconBanProps> = ({ size = '24px', style }) => {
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
          <circle fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="48" cx="256" cy="256" r="200"/><path stroke="currentColor" strokeMiterlimit="10" strokeWidth="48" d="M114.58 114.58l282.84 282.84"/>
        </svg>
      </div>
    </div>
  );
};
