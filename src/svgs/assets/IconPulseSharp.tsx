export interface IconPulseSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconPulseSharp: React.FC<IconPulseSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M426 266a54.07 54.07 0 00-49.3 32h-24.84l-27-81a22 22 0 00-42 .92l-37.2 130.2-48-281.74a22 22 0 00-43-1.72L94.82 298H32v44h80a22 22 0 0021.34-16.66L171.69 172l46.61 273.62A22 22 0 00238.76 464H240a22 22 0 0021.15-16l44.47-149.62 9.51 28.62A22 22 0 00336 342h40.7a54 54 0 1049.3-76z"/>
        </svg>
      </div>
    </div>
  );
};
