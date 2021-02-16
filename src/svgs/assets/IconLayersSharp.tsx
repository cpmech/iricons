export interface IconLayersSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconLayersSharp: React.FC<IconLayersSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M480 150L256 48 32 150l224 104 224-104zM255.71 392.95l-144.81-66.2L32 362l224 102 224-102-78.69-35.3-145.6 66.25z"/><path d="M480 256l-75.53-33.53L256.1 290.6l-148.77-68.17L32 256l224 102 224-102z"/>
        </svg>
      </div>
    </div>
  );
};
