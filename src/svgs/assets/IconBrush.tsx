export interface IconBrushProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconBrush: React.FC<IconBrushProps> = ({ size = '24px', style }) => {
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
          <path d="M233.15 360.11a15.7 15.7 0 01-4.92-.77 16 16 0 01-10.92-13c-2.15-15-19.95-32.46-36.62-35.85a16 16 0 01-8.69-26.33l211.09-235.1c.19-.22.39-.43.59-.63a56.57 56.57 0 0179.89 0 56.51 56.51 0 01.11 79.78l-219 227a16 16 0 01-11.53 4.9zm-113.26 120c-32.14 0-65.45-16.89-84.85-43a16 16 0 0112.85-25.54c5.34 0 20-4.87 20-20.57 0-39.07 31.4-70.86 70-70.86s70 31.79 70 70.86c0 49.12-39.48 89.11-88 89.11z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
