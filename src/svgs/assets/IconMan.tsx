export interface IconManProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconMan: React.FC<IconManProps> = ({ size = '24px', style }) => {
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
          <circle cx="256" cy="56" r="56"/><path d="M304 128h-96a64.19 64.19 0 00-64 64v107.52c0 10.85 8.43 20.08 19.27 20.47A20 20 0 00184 300v-99.73a8.18 8.18 0 017.47-8.25 8 8 0 018.53 8V489a23 23 0 0023 23 23 23 0 0023-23V346.34a10.24 10.24 0 019.33-10.34A10 10 0 01266 346v143a23 23 0 0023 23 23 23 0 0023-23V200.27a8.18 8.18 0 017.47-8.25 8 8 0 018.53 8v99.52c0 10.85 8.43 20.08 19.27 20.47A20 20 0 00368 300V192a64.19 64.19 0 00-64-64z"/>
        </svg>
      </div>
    </div>
  );
};
