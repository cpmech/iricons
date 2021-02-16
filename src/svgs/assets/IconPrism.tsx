export interface IconPrismProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconPrism: React.FC<IconPrismProps> = ({ size = '24px', style }) => {
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
          <path d="M487.83 319.44L295.63 36.88a48 48 0 00-79.26 0L24.17 319.44a47.1 47.1 0 0016.93 68.13l192.2 102.75a48.05 48.05 0 0045.4 0l192.2-102.75a47.1 47.1 0 0016.93-68.13zm-431.26 41a16.12 16.12 0 01-8-10.38 16.8 16.8 0 012.37-13.62L232.66 69.26c2.18-3.21 7.34-1.72 7.34 2.13v374c0 5.9-6.54 9.63-11.87 6.78z"/>
        </svg>
      </div>
    </div>
  );
};
