export interface IconScanProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconScan: React.FC<IconScanProps> = ({ size = '24px', style }) => {
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
          <path d="M342 444h46a56 56 0 0056-56v-46m0-172v-46a56 56 0 00-56-56h-46M170 444h-46a56 56 0 01-56-56v-46m0-172v-46a56 56 0 0156-56h46" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="44"/>
        </svg>
      </div>
    </div>
  );
};
