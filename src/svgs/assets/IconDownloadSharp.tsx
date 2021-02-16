export interface IconDownloadSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconDownloadSharp: React.FC<IconDownloadSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M272 160v147.37l64-64L358.63 266 256 368.63 153.37 266 176 243.37l64 64V160H92a12 12 0 00-12 12v296a12 12 0 0012 12h328a12 12 0 0012-12V172a12 12 0 00-12-12zM240 32h32v128h-32z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
