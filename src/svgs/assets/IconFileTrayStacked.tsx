export interface IconFileTrayStackedProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconFileTrayStacked: React.FC<IconFileTrayStackedProps> = ({ size = '24px', style }) => {
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
          <path d="M464 352H320a16 16 0 00-16 16 48 48 0 01-96 0 16 16 0 00-16-16H48a16 16 0 00-16 16v64a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64v-64a16 16 0 00-16-16zm15.46-164.12L447.61 68.45C441.27 35.59 417.54 16 384 16H128c-16.8 0-31 4.69-42.1 13.94S67.66 52 64.4 68.4L32.54 187.88A15.9 15.9 0 0032 192v48c0 35.29 28.71 80 64 80h320c35.29 0 64-44.71 64-80v-48a15.9 15.9 0 00-.54-4.12zM440.57 176H320a15.92 15.92 0 00-16 15.82 48 48 0 11-96 0A15.92 15.92 0 00192 176H71.43a2 2 0 01-1.93-2.52L95.71 75c3.55-18.41 13.81-27 32.29-27h256c18.59 0 28.84 8.53 32.25 26.85l26.25 98.63a2 2 0 01-1.93 2.52z"/>
        </svg>
      </div>
    </div>
  );
};
