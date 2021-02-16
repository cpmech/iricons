export interface IconUnlinkOutlineProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconUnlinkOutline: React.FC<IconUnlinkOutlineProps> = ({ size = '24px', style }) => {
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
          <path d="M208 352h-64a96 96 0 010-192h64m96 0h64a96 96 0 010 192h-64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="36"/>
        </svg>
      </div>
    </div>
  );
};
