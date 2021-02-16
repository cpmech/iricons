export interface IconVideocamOffSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconVideocamOffSharp: React.FC<IconVideocamOffSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M57.376 79.998l22.627-22.627 358.63 358.63-22.627 22.628zM32 112a16 16 0 00-16 16v256a16 16 0 0016 16h288a15.89 15.89 0 009.34-3l-285-285zm304 96v-80a16 16 0 00-16-16H179.63l245.44 245.44L496 400V112z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
