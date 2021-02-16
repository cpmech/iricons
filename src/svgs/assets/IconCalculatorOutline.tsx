export interface IconCalculatorOutlineProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconCalculatorOutline: React.FC<IconCalculatorOutlineProps> = ({ size = '24px', style }) => {
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
          <rect x="112" y="48" width="288" height="416" rx="32" ry="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M160.01 112H352v64H160.01z"/><circle cx="168" cy="248" r="24"/><circle cx="256" cy="248" r="24"/><circle cx="344" cy="248" r="24"/><circle cx="168" cy="328" r="24"/><circle cx="256" cy="328" r="24"/><circle cx="168" cy="408" r="24"/><circle cx="256" cy="408" r="24"/><rect x="320" y="304" width="48" height="128" rx="24" ry="24"/>
        </svg>
      </div>
    </div>
  );
};
