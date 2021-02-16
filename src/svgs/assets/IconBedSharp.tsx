export interface IconBedSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconBedSharp: React.FC<IconBedSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M432 224V96a16 16 0 00-16-16H96a16 16 0 00-16 16v128a48 48 0 00-48 48v160h36v-32h376v32h36V272a48 48 0 00-48-48zm-192 0H120v-32a16 16 0 0116-16h88a16 16 0 0116 16zm32-32a16 16 0 0116-16h88a16 16 0 0116 16v32H272z"/>
        </svg>
      </div>
    </div>
  );
};
