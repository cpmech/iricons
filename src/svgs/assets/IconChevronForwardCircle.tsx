export interface IconChevronForwardCircleProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconChevronForwardCircle: React.FC<IconChevronForwardCircleProps> = ({ size = '24px', style }) => {
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
          <path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm257.37 0l-84.68-84.69a16 16 0 0122.62-22.62l96 96a16 16 0 010 22.62l-96 96a16 16 0 01-22.62-22.62z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
