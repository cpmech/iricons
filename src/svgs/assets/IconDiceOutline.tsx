export interface IconDiceOutlineProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconDiceOutline: React.FC<IconDiceOutlineProps> = ({ size = '24px', style }) => {
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
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M69 153.99l187 110 187-110m-187 310v-200"/><ellipse cx="256" cy="152" rx="24" ry="16" fill="currentColor"/><ellipse cx="208" cy="296" rx="16" ry="24" fill="currentColor"/><ellipse cx="112" cy="328" rx="16" ry="24" fill="currentColor"/><ellipse cx="304" cy="296" rx="16" ry="24" fill="currentColor"/><ellipse cx="400" cy="240" rx="16" ry="24" fill="currentColor"/><ellipse cx="304" cy="384" rx="16" ry="24" fill="currentColor"/><ellipse cx="400" cy="328" rx="16" ry="24" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
