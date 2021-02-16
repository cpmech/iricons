export interface IconGameControllerSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconGameControllerSharp: React.FC<IconGameControllerSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M478.07 356.88L439 151c-8.86-40.35-23-71-88-71H145c-66 0-79.14 30.65-88 71L18 356.88c-7 34.12 4.43 61.25 33.37 71.81S103 423 119.18 391.3l15.42-30.52a16 16 0 0114.28-8.78h198.28a16 16 0 0114.28 8.78l15.42 30.52c16.14 31.7 38.88 48 67.81 37.39S485 391 478.07 356.88zM224 240h-48v48h-32v-48H96v-32h48v-48h32v48h48zm68 4a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-20 20 20 0 01-20 20zm0-88a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-20 20 20 0 01-20 20z"/>
        </svg>
      </div>
    </div>
  );
};