export interface IconPhoneLandscapeOutlineProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconPhoneLandscapeOutline: React.FC<IconPhoneLandscapeOutlineProps> = ({ size = '24px', style }) => {
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
          <rect x="128" y="16" width="256" height="480" rx="48" ry="48" transform="rotate(-90 256 256)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M16 336v-24a8 8 0 018-8h0a16 16 0 0016-16v-64a16 16 0 00-16-16h0a8 8 0 01-8-8v-24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
        </svg>
      </div>
    </div>
  );
};
