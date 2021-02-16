export interface IconReaderSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconReaderSharp: React.FC<IconReaderSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M80 44v424a12 12 0 0012 12h328a12 12 0 0012-12V44a12 12 0 00-12-12H92a12 12 0 00-12 12zm192 260H160v-32h112zm80-80H160v-32h192zm0-80H160v-32h192z"/>
        </svg>
      </div>
    </div>
  );
};
