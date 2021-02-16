export interface IconLogoXingProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconLogoXing: React.FC<IconLogoXingProps> = ({ size = '24px', style }) => {
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
          <path d="M313.8 303.9L469 32H365L209.4 303.8a1.35 1.35 0 000 1.7l98.9 173.8c.4.7.8.7 1.6.7H413l-99.3-174.7a1.74 1.74 0 01.1-1.4zm-91.9-87.7L163 113a2 2 0 00-2-1H65l58.9 104.4a1.13 1.13 0 01.1.8L43 352h96.8a1.54 1.54 0 001.6-.9l80.5-133.7a2.44 2.44 0 000-1.2z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
