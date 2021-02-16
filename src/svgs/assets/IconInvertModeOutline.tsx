export interface IconInvertModeOutlineProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconInvertModeOutline: React.FC<IconInvertModeOutlineProps> = ({ size = '24px', style }) => {
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
          <circle fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" cx="256" cy="256" r="208"/><path d="M256 176v160a80 80 0 010-160zm0-128v128a80 80 0 010 160v128c114.88 0 208-93.12 208-208S370.88 48 256 48z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
