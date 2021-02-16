export interface IconGiftSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconGiftSharp: React.FC<IconGiftSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M346 110a34 34 0 00-68 0v34h34a34 34 0 0034-34zm-112 0a34 34 0 10-34 34h34z" fill="none"/><path d="M234 144h44v112h164a22 22 0 0022-22v-68a22 22 0 00-22-22h-59.82A77.95 77.95 0 00256 55.79 78 78 0 00129.81 144H70a22 22 0 00-22 22v68a22 22 0 0022 22h164zm44-34a34 34 0 1134 34h-34zm-112 0a34 34 0 1168 0v34h-34a34 34 0 01-34-34zm112 370h132a22 22 0 0022-22V288H278zM80 458a22 22 0 0022 22h132V288H80z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
