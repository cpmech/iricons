export interface IconWifiSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconWifiSharp: React.FC<IconWifiSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M332.69 320a115 115 0 00-152.8 0m213.85-61a201.26 201.26 0 00-274.92 0M448 191.52a288 288 0 00-383.44 0" fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="42"/><path d="M300.67 384L256 433l-44.34-49a56.73 56.73 0 0188.92 0z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
