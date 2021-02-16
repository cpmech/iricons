export interface IconTennisballProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconTennisball: React.FC<IconTennisballProps> = ({ size = '24px', style }) => {
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
          <path d="M448 256a192.55 192.55 0 0032-2.68A224 224 0 00258.68 32 192.55 192.55 0 00256 64c0 105.87 86.13 192 192 192zM253.35 480c.94-5.67 1.65-11.4 2.09-17.18.37-4.88.56-9.86.56-14.79 0-105.87-86.13-192-192-192a192.55 192.55 0 00-32 2.68A224 224 0 00253.35 480z" fill="currentColor"/><path d="M289.61 222.39A222.53 222.53 0 01224 64a226.07 226.07 0 012-30A224.1 224.1 0 0034 226a226.07 226.07 0 0130-2 222.53 222.53 0 01158.39 65.61A222.53 222.53 0 01288 448c0 5.74-.22 11.53-.65 17.22q-.5 6.42-1.36 12.79A224.12 224.12 0 00478 286a226.07 226.07 0 01-30 2 222.53 222.53 0 01-158.39-65.61z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
