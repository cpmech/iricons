export interface IconTrainSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconTrainSharp: React.FC<IconTrainSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M384 32h-64a16 16 0 00-16-16h-96a16 16 0 00-16 16h-64c-16 0-32 16-32 32v288c0 23.92 160 80 160 80s160-56.74 160-80V64c0-16-16-32-32-32zM256 352a48 48 0 1148-48 48 48 0 01-48 48zm112-152a8 8 0 01-8 8H152a8 8 0 01-8-8v-80a8 8 0 018-8h208a8 8 0 018 8z"/><path d="M314 432l15.32 16H182.58L198 432l-32-13-76.62 77h45.2l16-16h210.74l16 16h45.3l-76.36-77.75L314 432z"/>
        </svg>
      </div>
    </div>
  );
};
