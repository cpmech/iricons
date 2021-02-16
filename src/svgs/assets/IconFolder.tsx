export interface IconFolderProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconFolder: React.FC<IconFolderProps> = ({ size = '24px', style }) => {
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
          <path d="M496 152a56 56 0 00-56-56H220.11a23.89 23.89 0 01-13.31-4L179 73.41A55.77 55.77 0 00147.89 64H72a56 56 0 00-56 56v48a8 8 0 008 8h464a8 8 0 008-8zM16 392a56 56 0 0056 56h368a56 56 0 0056-56V216a8 8 0 00-8-8H24a8 8 0 00-8 8z"/>
        </svg>
      </div>
    </div>
  );
};
