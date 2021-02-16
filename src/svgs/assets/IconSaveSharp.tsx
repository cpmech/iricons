export interface IconSaveSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconSaveSharp: React.FC<IconSaveSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M380.44 32H64a32 32 0 00-32 32v384a32 32 0 0032 32h384a32.09 32.09 0 0032-32V131.56zM112 176v-64h192v64zm223.91 179.76a80 80 0 11-83.66-83.67 80.21 80.21 0 0183.66 83.67z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
