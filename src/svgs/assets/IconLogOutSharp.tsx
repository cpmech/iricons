export interface IconLogOutSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconLogOutSharp: React.FC<IconLogOutSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M160 240h160V96a16 16 0 00-16-16H64a16 16 0 00-16 16v320a16 16 0 0016 16h240a16 16 0 0016-16V272H160zm299.31 4.69L368 153.37 345.37 176l64 64H320v32h89.37l-64 64L368 358.63l91.31-91.32a16 16 0 000-22.62z"/>
        </svg>
      </div>
    </div>
  );
};
