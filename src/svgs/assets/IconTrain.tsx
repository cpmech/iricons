export interface IconTrainProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconTrain: React.FC<IconTrainProps> = ({ size = '24px', style }) => {
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
          <ellipse cx="256" cy="304" rx="32.05" ry="31.94" transform="rotate(-45 256.001 304)" fill="currentColor"/><path d="M352 32h-15a10 10 0 01-7.87-3.78A31.94 31.94 0 00304 16h-96a32 32 0 00-26.11 13.52A6 6 0 01177 32h-17c-36.81 0-64 28.84-64 64v255c0 23.27 25.6 42.06 83 60.94a753 753 0 0073.77 19.73 16 16 0 006.46 0A753 753 0 00333 411.94c57.4-18.88 83-37.67 83-60.94V96a64 64 0 00-64-64zm-168 96h144a8 8 0 018 8v48a8 8 0 01-8 8H184a8 8 0 01-8-8v-48a8 8 0 018-8zm76.18 239.87a64 64 0 1159.69-59.69 64.07 64.07 0 01-59.69 59.69z" fill="currentColor"/><path d="M395.31 468.69L347.63 421c-6.09-6.1-16-6.66-22.38-.86a16 16 0 00-.56 23.16l4.68 4.69H182.63l4.36-4.37c6.1-6.09 6.66-16 .86-22.38a16 16 0 00-23.16-.56l-48 48a16 16 0 1022.62 22.62l11.32-11.3h210.74l11.32 11.31a16 16 0 0022.62-22.62z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
