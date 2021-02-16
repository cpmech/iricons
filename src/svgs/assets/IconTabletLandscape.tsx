export interface IconTabletLandscapeProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconTabletLandscape: React.FC<IconTabletLandscapeProps> = ({ size = '24px', style }) => {
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
          <path d="M512 128v256a64.07 64.07 0 01-64 64H64a64.07 64.07 0 01-64-64V128a64.07 64.07 0 0164-64h384a64.07 64.07 0 0164 64zM32 384a32 32 0 0032 32h384a32 32 0 0032-32V128a32 32 0 00-32-32H64a32 32 0 00-32 32z"/><path d="M0 128a64.07 64.07 0 0164-64h384a64.07 64.07 0 0164 64v256a64.07 64.07 0 01-64 64H64a64.07 64.07 0 01-64-64V128m480 256V128a32 32 0 00-32-32H64a32 32 0 00-32 32v256a32 32 0 0032 32h384a32 32 0 0032-32m-16 0a16 16 0 01-16 16H64a16 16 0 01-16-16V128a16 16 0 0116-16h384a16 16 0 0116 16v256z"/>
        </svg>
      </div>
    </div>
  );
};
