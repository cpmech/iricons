export interface IconBriefcaseSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconBriefcaseSharp: React.FC<IconBriefcaseSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M336 288H176v-32H16v196a12 12 0 0012 12h456a12 12 0 0012-12V256H336zm160-164a12 12 0 00-12-12H384V56a8 8 0 00-8-8H136a8 8 0 00-8 8v56H28a12 12 0 00-12 12v100h480zm-152-12H168V88h176z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
