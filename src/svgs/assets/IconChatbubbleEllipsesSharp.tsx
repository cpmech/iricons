export interface IconChatbubbleEllipsesSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconChatbubbleEllipsesSharp: React.FC<IconChatbubbleEllipsesSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M475.22 206.52c-10.34-48.65-37.76-92.93-77.22-124.68A227.4 227.4 0 00255.82 32C194.9 32 138 55.47 95.46 98.09 54.35 139.33 31.82 193.78 32 251.37a215.66 215.66 0 0035.65 118.76l4.35 6.05L48 480l114.8-28.56s2.3.77 4 1.42 16.33 6.26 31.85 10.6c12.9 3.6 39.74 9 60.77 9 59.65 0 115.35-23.1 156.83-65.06C457.36 365.77 480 310.42 480 251.49a213.5 213.5 0 00-4.78-44.97zM160 288a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32z"/>
        </svg>
      </div>
    </div>
  );
};
