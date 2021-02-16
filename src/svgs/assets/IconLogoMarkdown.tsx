export interface IconLogoMarkdownProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconLogoMarkdown: React.FC<IconLogoMarkdownProps> = ({ size = '24px', style }) => {
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
          <path d="M475 64H37C16.58 64 0 81.38 0 102.77v306.42C0 430.59 16.58 448 37 448h438c20.38 0 37-17.41 37-38.81V102.77C512 81.38 495.42 64 475 64zM288 368h-64V256l-48 64-48-64v112H64V144h64l48 80 48-80h64zm96 0l-80-112h48.05L352 144h64v112h48z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
