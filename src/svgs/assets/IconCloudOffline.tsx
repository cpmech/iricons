export interface IconCloudOfflineProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconCloudOffline: React.FC<IconCloudOfflineProps> = ({ size = '24px', style }) => {
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
          <path d="M448 464a15.92 15.92 0 01-11.31-4.69l-384-384a16 16 0 0122.62-22.62l384 384A16 16 0 01448 464zM38.72 196.78C13.39 219.88 0 251.42 0 288c0 36 14.38 68.88 40.49 92.59C65.64 403.43 99.56 416 136 416h192.8a8 8 0 005.66-13.66L100.88 168.76a8 8 0 00-8-2C72 173.15 53.4 183.38 38.72 196.78zm437.87 194.45C499.76 372.78 512 345.39 512 312c0-57.57-42-90.58-87.56-100.75a16 16 0 01-12.12-12.39c-7.68-36.68-24.45-68.15-49.18-92A153.57 153.57 0 00256 64c-31.12 0-60.12 9-84.62 26.1a8 8 0 00-1.14 12.26L461.68 393.8a8 8 0 0010.2.93q2.43-1.68 4.71-3.5z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
