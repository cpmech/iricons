export interface IconWineProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconWine: React.FC<IconWineProps> = ({ size = '24px', style }) => {
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
          <path d="M414.56 94.92V80a16 16 0 00-16-16H113.44a16 16 0 00-16 16v14.92c-1.46 11.37-9.65 90.74 36.93 144.69 24.87 28.8 60.36 44.85 105.63 47.86V416h-80a16 16 0 000 32h192a16 16 0 000-32h-80V287.47c45.27-3 80.76-19.06 105.63-47.86 46.58-53.95 38.37-133.32 36.93-144.69zm-285.3 3.41a15.14 15.14 0 00.18-2.33h253.12a15.14 15.14 0 00.18 2.33 201.91 201.91 0 010 45.67H129.32a204.29 204.29 0 01-.06-45.67z"/>
        </svg>
      </div>
    </div>
  );
};