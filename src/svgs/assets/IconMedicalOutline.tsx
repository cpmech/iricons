export interface IconMedicalOutlineProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconMedicalOutline: React.FC<IconMedicalOutlineProps> = ({ size = '24px', style }) => {
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
          <path d="M429.93 174.27l-16.47-28.59a15.49 15.49 0 00-21.15-5.7l-98.39 57a4 4 0 01-6-3.5L288 80a16 16 0 00-16-16h-32a16 16 0 00-16 16l.07 113.57a4 4 0 01-6 3.5l-98.39-57a15.49 15.49 0 00-21.15 5.7l-16.46 28.6a15.42 15.42 0 005.69 21.1l98.49 57.08a4 4 0 010 6.9l-98.49 57.08a15.54 15.54 0 00-5.69 21.1l16.47 28.59a15.49 15.49 0 0021.15 5.7l98.39-57a4 4 0 016 3.5L224 432a16 16 0 0016 16h32a16 16 0 0016-16l-.07-113.67a4 4 0 016-3.5l98.39 57a15.49 15.49 0 0021.15-5.7l16.47-28.59a15.42 15.42 0 00-5.69-21.1l-98.49-57.08a4 4 0 010-6.9l98.49-57.08a15.51 15.51 0 005.68-21.11z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
        </svg>
      </div>
    </div>
  );
};
