export interface IconPulseProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconPulse: React.FC<IconPulseProps> = ({ size = '24px', style }) => {
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
          <path d="M432 272a48.09 48.09 0 00-45.25 32h-39.22l-28.35-85.06a16 16 0 00-30.56.66l-44.51 155.76-52.33-314a16 16 0 00-31.3-1.25L99.51 304H48a16 16 0 000 32h64a16 16 0 0015.52-12.12l45.34-181.37 51.36 308.12A16 16 0 00239.1 464h.91a16 16 0 0015.37-11.6l49.8-174.28 15.64 46.94A16 16 0 00336 336h50.75A48 48 0 10432 272z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
