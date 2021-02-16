export interface IconPushSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconPushSharp: React.FC<IconPushSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M272 352V204.63l64 64L358.63 246 256 143.37 153.37 246 176 268.63l64-64V352H92a12 12 0 01-12-12V44a12 12 0 0112-12h328a12 12 0 0112 12v296a12 12 0 01-12 12zm-32 0h32v128h-32z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
