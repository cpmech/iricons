export interface IconArrowRedoSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconArrowRedoSharp: React.FC<IconArrowRedoSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M48 399.26C48 335.19 62.44 284 90.91 247c34.38-44.67 88.68-68.77 161.56-71.75V72L464 252 252.47 432V329.35c-44.25 1.19-77.66 7.58-104.27 19.84-28.75 13.25-49.6 33.05-72.08 58.7L48 440z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
