export interface IconDocumentLockSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconDocumentLockSharp: React.FC<IconDocumentLockSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M276 192h146.31a2 2 0 001.42-3.41L275.41 40.27a2 2 0 00-3.41 1.42V188a4 4 0 004 4zm-20 80c-8.82 0-16 6.28-16 14v18h32v-18c0-7.72-7.18-14-16-14z" fill="currentColor"/><path d="M248 224a8 8 0 01-8-8V32H92a12 12 0 00-12 12v424a12 12 0 0012 12h328a12 12 0 0012-12V224zm88 175.91A16.1 16.1 0 01319.91 416H192.09A16.1 16.1 0 01176 399.91V320c0-10 7-16 16-16h16v-18c0-25.36 21.53-46 48-46s48 20.64 48 46v18h16a15.8 15.8 0 0116 16z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
