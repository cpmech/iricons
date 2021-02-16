export interface IconWifiProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconWifi: React.FC<IconWifiProps> = ({ size = '24px', style }) => {
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
          <path d="M346.65 304.3a136 136 0 00-180.71 0 21 21 0 1027.91 31.38 94 94 0 01124.89 0 21 21 0 0027.91-31.4z" fill="currentColor"/><path d="M256.28 183.7a221.47 221.47 0 00-151.8 59.92 21 21 0 1028.68 30.67 180.28 180.28 0 01246.24 0 21 21 0 1028.68-30.67 221.47 221.47 0 00-151.8-59.92z" fill="currentColor"/><path d="M462 175.86a309 309 0 00-411.44 0 21 21 0 1028 31.29 267 267 0 01355.43 0 21 21 0 0028-31.31z" fill="currentColor"/><circle cx="256.28" cy="393.41" r="32" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
