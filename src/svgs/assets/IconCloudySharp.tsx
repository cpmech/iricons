export interface IconCloudySharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconCloudySharp: React.FC<IconCloudySharpProps> = ({ size = '24px', style }) => {
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
          <path d="M376 432H116c-32.37 0-60.23-8.57-80.59-24.77C12.24 388.78 0 361.39 0 328c0-61.85 48.44-95.34 97.75-102.64 6.52-41.18 24-76.4 51.11-102.46A153.57 153.57 0 01256 80c35.5 0 68.24 11.69 94.68 33.8a156.42 156.42 0 0145.22 63.61c30.26 4.81 57.45 17.18 77.38 35.36C498.61 235.88 512 267.42 512 304c0 36-14.38 68.88-40.49 92.59C446.36 419.43 412.44 432 376 432z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
