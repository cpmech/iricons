export interface IconCalendarSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconCalendarSharp: React.FC<IconCalendarSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M32 456a24 24 0 0024 24h400a24 24 0 0024-24V176H32zm320-244a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm0 80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm-80-80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm0 80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm0 80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm-80-80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm0 80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm-80-80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm0 80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zM456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 00-24 23.77V144h448V87.77A23.8 23.8 0 00456 64z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
