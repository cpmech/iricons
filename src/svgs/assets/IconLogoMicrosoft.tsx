export interface IconLogoMicrosoftProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconLogoMicrosoft: React.FC<IconLogoMicrosoftProps> = ({ size = '24px', style }) => {
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
          <path d="M31.87 30.58H244.7v212.81H31.87zm235.02 0H479.7v212.81H266.89zM31.87 265.61H244.7v212.8H31.87zm235.02 0H479.7v212.8H266.89z"/>
        </svg>
      </div>
    </div>
  );
};
