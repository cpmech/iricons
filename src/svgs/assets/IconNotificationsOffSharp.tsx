export interface IconNotificationsOffSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconNotificationsOffSharp: React.FC<IconNotificationsOffSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M41.37 64l22.628-22.628L470.627 448l-22.628 22.627zM256 480a80.09 80.09 0 0073.3-48H182.7a80.09 80.09 0 0073.3 48zM112 227.47V288l-48 64v48h268.12L115.87 183.75a236.75 236.75 0 00-3.87 43.72zM448 352l-48-64v-60.53C400 157 372.64 95.61 304 80l-8-48h-80l-8 48a117.45 117.45 0 00-41.95 18.17l282 282z"/>
        </svg>
      </div>
    </div>
  );
};
