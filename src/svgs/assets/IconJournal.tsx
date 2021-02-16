export interface IconJournalProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconJournal: React.FC<IconJournalProps> = ({ size = '24px', style }) => {
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
          <path d="M290 32H144a64.07 64.07 0 00-64 64v320a64.07 64.07 0 0064 64h146zm78 0h-18v448h18a64.07 64.07 0 0064-64V96a64.07 64.07 0 00-64-64z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
