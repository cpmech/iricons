export interface IconShapesProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconShapes: React.FC<IconShapesProps> = ({ size = '24px', style }) => {
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
          <path d="M336 336H32a16 16 0 01-14-23.81l152-272a16 16 0 0127.94 0l152 272A16 16 0 01336 336z"/><path d="M336 160a161.07 161.07 0 00-32.57 3.32l74.47 133.27A48 48 0 01336 368H183.33A160 160 0 10336 160z"/>
        </svg>
      </div>
    </div>
  );
};
