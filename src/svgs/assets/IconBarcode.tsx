export interface IconBarcodeProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconBarcode: React.FC<IconBarcodeProps> = ({ size = '24px', style }) => {
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
          <path d="M419.13 96H419l-35.05.33L128 96h-.16l-36.74.33C66.93 96.38 48 116.07 48 141.2v230.27c0 25.15 19 44.86 43.2 44.86h.15l36.71-.33 255.92.33h.17l35.07-.33A44.91 44.91 0 00464 371.13V140.87A44.92 44.92 0 00419.13 96zM144 320a16 16 0 01-32 0V192a16 16 0 0132 0zm64 32a16 16 0 01-32 0V160a16 16 0 0132 0zm64-16a16 16 0 01-32 0V176a16 16 0 0132 0zm64 16a16 16 0 01-32 0V160a16 16 0 0132 0zm64-32a16 16 0 01-32 0V192a16 16 0 0132 0z"/>
        </svg>
      </div>
    </div>
  );
};
