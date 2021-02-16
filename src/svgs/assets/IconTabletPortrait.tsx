export interface IconTabletPortraitProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconTabletPortrait: React.FC<IconTabletPortraitProps> = ({ size = '24px', style }) => {
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
          <path d="M384 512H128a64.07 64.07 0 01-64-64V64a64.07 64.07 0 0164-64h256a64.07 64.07 0 0164 64v384a64.07 64.07 0 01-64 64zM128 32a32 32 0 00-32 32v384a32 32 0 0032 32h256a32 32 0 0032-32V64a32 32 0 00-32-32z"/><path d="M384 0a64.07 64.07 0 0164 64v384a64.07 64.07 0 01-64 64H128a64.07 64.07 0 01-64-64V64a64.07 64.07 0 0164-64h256M128 480h256a32 32 0 0032-32V64a32 32 0 00-32-32H128a32 32 0 00-32 32v384a32 32 0 0032 32m0-16a16 16 0 01-16-16V64a16 16 0 0116-16h256a16 16 0 0116 16v384a16 16 0 01-16 16z"/>
        </svg>
      </div>
    </div>
  );
};
