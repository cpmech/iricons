export interface IconArrowDownCircleOutlineProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconArrowDownCircleOutline: React.FC<IconArrowDownCircleOutlineProps> = ({ size = '24px', style }) => {
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
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M176 262.62L256 342l80-79.38m-80 68.35V170"/><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
        </svg>
      </div>
    </div>
  );
};
