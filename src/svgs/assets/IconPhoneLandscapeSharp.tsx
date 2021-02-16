export interface IconPhoneLandscapeSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconPhoneLandscapeSharp: React.FC<IconPhoneLandscapeSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M0 130v252a18 18 0 0018 18h476a18 18 0 0018-18V130a18 18 0 00-18-18H18a18 18 0 00-18 18zm448 234H64V148h384z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
