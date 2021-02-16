export interface IconBalloonProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconBalloon: React.FC<IconBalloonProps> = ({ size = '24px', style }) => {
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
          <path d="M391 307.27c32.75-46.35 46.59-101.63 39-155.68A175.82 175.82 0 00231.38 2c-96 13.49-163.14 102.58-149.65 198.58 7.57 53.89 36.12 103.16 80.37 138.74 24.58 19.68 52.31 33.5 78.62 39.68a8 8 0 016 9.22l-4.87 26.38a16.29 16.29 0 001.48 10.57 16 16 0 0014.2 8.61 15.21 15.21 0 002.23-.16l17.81-2.5a2 2 0 012.09 1.14c16.72 36.31 45.46 63.85 82.15 78.36a16 16 0 0021-9.65c2.83-8.18-1.64-17.07-9.68-20.28a118.57 118.57 0 01-59.3-51.88 2 2 0 011.45-3l7.4-1a16.54 16.54 0 0010.08-5.23 16 16 0 002.39-17.8l-12.06-24.23a8 8 0 013.26-10.55c23.59-13.17 46.45-34 64.65-59.73zm-154.9 16.78a16 16 0 01-5.88-1.12c-41.26-16.32-76.3-52.7-91.45-94.94a16 16 0 1130.12-10.8c14.5 40.44 47.27 65.77 73.1 76a16 16 0 01-5.89 30.88z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};