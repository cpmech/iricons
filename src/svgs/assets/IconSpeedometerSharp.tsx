export interface IconSpeedometerSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconSpeedometerSharp: React.FC<IconSpeedometerSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M256 48C123.46 48 16 156.55 16 290.56a243.3 243.3 0 0060.32 160.87c1.18 1.3 2.25 2.6 3.43 3.79C89.2 464 92.07 464 99.57 464s12.43 0 19.93-8.88C152 416.64 202 400 256 400s104.07 16.71 136.5 55.12C400 464 404.82 464 412.43 464s11.3 0 19.82-8.78c1.22-1.25 2.25-2.49 3.43-3.79A243.3 243.3 0 00496 290.56C496 156.55 388.54 48 256 48zm-16 64h32v64h-32zm-96 192H80v-32h64zm21.49-83.88l-45.25-45.26 22.62-22.62 45.26 45.25zM278.6 307.4a31 31 0 01-7 7 30.11 30.11 0 01-35-49L320 224zm45.28-109.91l45.26-45.25 22.62 22.62-45.25 45.26zM432 304h-64v-32h64z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
