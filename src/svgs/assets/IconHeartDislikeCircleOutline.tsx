export interface IconHeartDislikeCircleOutlineProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconHeartDislikeCircleOutline: React.FC<IconHeartDislikeCircleOutlineProps> = ({ size = '24px', style }) => {
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
          <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path d="M333.2 297.69c18.28-23.39 27.06-47.43 26.79-73.37-.31-31.06-25.22-56.33-55.53-56.33-20.4 0-35 10.64-44.11 20.42a5.93 5.93 0 01-8.7 0c-9.11-9.78-23.71-20.42-44.11-20.42L206 168a4 4 0 00-2.75 6.84l124 123.21a3.92 3.92 0 005.95-.36zM158.84 221a4 4 0 00-6.82 2.72v.64c-.28 27.1 9.31 52.13 29.3 76.5 9.38 11.44 26.4 29.73 65.7 56.41a15.93 15.93 0 0018 0c5.15-3.49 9.9-6.84 14.31-10a4 4 0 00.46-6.07zM336 368a15.92 15.92 0 01-11.31-4.69l-176-176a16 16 0 0122.62-22.62l176 176A16 16 0 01336 368z"/>
        </svg>
      </div>
    </div>
  );
};
