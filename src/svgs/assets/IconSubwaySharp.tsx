export interface IconSubwaySharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconSubwaySharp: React.FC<IconSubwaySharpProps> = ({ size = '24px', style }) => {
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
          <path d="M392 16H120a24 24 0 00-24 24v336a24 24 0 0024 24h272a24 24 0 0024-24V40a24 24 0 00-24-24zM208 64h95.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 96h-95.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 01208 64zm-28.53 287.82a32 32 0 1128.35-28.35 32 32 0 01-28.35 28.35zm160 0a32 32 0 1128.35-28.35 32 32 0 01-28.35 28.35zM384 144v64H128v-64zm-86 272l31.37 32H182.63L214 416h-44l-80.57 80h45.2l16-16h210.74l16 16h45.3L343 416h-45z"/>
        </svg>
      </div>
    </div>
  );
};
