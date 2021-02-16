export interface IconBulbProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconBulb: React.FC<IconBulbProps> = ({ size = '24px', style }) => {
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
          <path d="M288 464h-64a16 16 0 000 32h64a16 16 0 000-32zm16-48h-96a16 16 0 000 32h96a16 16 0 000-32zm65.42-353.31C339.35 32.58 299.07 16 256 16A159.62 159.62 0 0096 176c0 46.62 17.87 90.23 49 119.64l4.36 4.09C167.37 316.57 192 339.64 192 360v24a16 16 0 0016 16h24a8 8 0 008-8V274.82a8 8 0 00-5.13-7.47A130.73 130.73 0 01208.71 253a16 16 0 1118.58-26c7.4 5.24 21.65 13 28.71 13s21.31-7.78 28.73-13a16 16 0 0118.56 26 130.73 130.73 0 01-26.16 14.32 8 8 0 00-5.13 7.47V392a8 8 0 008 8h24a16 16 0 0016-16v-24c0-19.88 24.36-42.93 42.15-59.77l4.91-4.66C399.08 265 416 223.61 416 176a159.16 159.16 0 00-46.58-113.31z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
