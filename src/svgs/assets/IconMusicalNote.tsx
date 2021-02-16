export interface IconMusicalNoteProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconMusicalNote: React.FC<IconMusicalNoteProps> = ({ size = '24px', style }) => {
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
          <path d="M183.83 480a55.2 55.2 0 01-32.36-10.55A56.64 56.64 0 01128 423.58a50.26 50.26 0 0134.14-47.73L213 358.73a16.25 16.25 0 0011-15.49V92a32.1 32.1 0 0124.09-31.15l108.39-28.14A22 22 0 01384 54v57.75a32.09 32.09 0 01-24.2 31.19l-91.65 23.13A16.24 16.24 0 00256 181.91V424a48.22 48.22 0 01-32.78 45.81l-21.47 7.23a56 56 0 01-17.92 2.96z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
