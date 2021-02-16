export interface IconContrastOutlineProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconContrastOutline: React.FC<IconContrastOutlineProps> = ({ size = '24px', style }) => {
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
          <circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path d="M256 464c-114.88 0-208-93.12-208-208S141.12 48 256 48z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
