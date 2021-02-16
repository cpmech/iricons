export interface IconEaselProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconEasel: React.FC<IconEaselProps> = ({ size = '24px', style }) => {
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
          <rect x="80" y="112" width="352" height="208" rx="12" ry="12" fill="currentColor"/><path d="M432 64H272V48a16 16 0 00-32 0v16H80a48.05 48.05 0 00-48 48v208a48.05 48.05 0 0048 48h42.79l-26.17 91.6a16 16 0 1030.76 8.8L156.07 368H240v48a16 16 0 0032 0v-48h83.93l28.69 100.4a16 16 0 1030.76-8.8L389.21 368H432a48.05 48.05 0 0048-48V112a48.05 48.05 0 00-48-48zm16 256a16 16 0 01-16 16H80a16 16 0 01-16-16V112a16 16 0 0116-16h352a16 16 0 0116 16z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
