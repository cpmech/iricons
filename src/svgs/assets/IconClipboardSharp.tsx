export interface IconClipboardSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconClipboardSharp: React.FC<IconClipboardSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M420 48h-68V28a12 12 0 00-12-12H172a12 12 0 00-12 12v20H92a12 12 0 00-12 12v424a12 12 0 0012 12h328a12 12 0 0012-12V60a12 12 0 00-12-12zm-84.13 64H176.13V80h159.74z"/>
        </svg>
      </div>
    </div>
  );
};
