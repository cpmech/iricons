export interface IconMusicalNoteSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconMusicalNoteSharp: React.FC<IconMusicalNoteSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M381.55 32.05c-18.13 4.28-126.57 31.07-156 38.19a2 2 0 00-1.55 1.94V353.3a2 2 0 01-1.32 1.88L182 369.88c-29.82 10.66-54 18.94-54 59.06 0 32.47 23.53 47.18 37.95 50a81.77 81.77 0 0015 1.08c8.89 0 31-3.59 47.52-14.24C256 448 256 448 256 415.93V169.16a2 2 0 011.49-1.94l125-33a2 2 0 001.49-1.94V34a2 2 0 00-2.43-1.95z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};