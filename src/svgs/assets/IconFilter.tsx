export interface IconFilterProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconFilter: React.FC<IconFilterProps> = ({ size = '24px', style }) => {
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
          <path d="M472 168H40a24 24 0 010-48h432a24 24 0 010 48zm-80 112H120a24 24 0 010-48h272a24 24 0 010 48zm-96 112h-80a24 24 0 010-48h80a24 24 0 010 48z"/>
        </svg>
      </div>
    </div>
  );
};
