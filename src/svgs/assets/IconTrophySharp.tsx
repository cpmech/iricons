export interface IconTrophySharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconTrophySharp: React.FC<IconTrophySharpProps> = ({ size = '24px', style }) => {
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
          <path d="M399.9 80V32H112v48H32v38c0 32 9.5 62.79 26.76 86.61 13.33 18.4 34.17 31.1 52.91 37.21 5.44 29.29 20.2 57.13 50.19 79.83 22 16.66 48.45 28.87 72.14 33.86V436h-74v44h192v-44h-74v-80.49c23.69-5 50.13-17.2 72.14-33.86 30-22.7 44.75-50.54 50.19-79.83 18.74-6.11 39.58-18.81 52.91-37.21C470.5 180.79 480 150 480 118V80zM94.4 178.8c-10.68-14.68-17.17-34.4-18.24-54.8H112v67.37c-3.94-1.14-12.92-6.12-17.6-12.57zm323.2 0c-4.6 6.61-11.6 12.58-17.6 12.58 0-22.4 0-46.29-.05-67.38h35.9c-1.08 20.4-7.85 39.9-18.25 54.8z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};