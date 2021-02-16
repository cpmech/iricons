export interface IconJournalSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconJournalSharp: React.FC<IconJournalSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M290 32H104a24 24 0 00-24 24v400a24 24 0 0024 24h186zm118 0h-58v448h58a24 24 0 0024-24V56a24 24 0 00-24-24z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
