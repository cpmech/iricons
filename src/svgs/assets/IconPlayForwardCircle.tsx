export interface IconPlayForwardCircleProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconPlayForwardCircle: React.FC<IconPlayForwardCircleProps> = ({ size = '24px', style }) => {
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
          <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm138.77 217.3l-114.45 69.14a10.78 10.78 0 01-16.32-9.31v-53.32l-103.68 62.63a10.78 10.78 0 01-16.32-9.31V186.87a10.78 10.78 0 0116.32-9.31L264 240.19v-53.32a10.78 10.78 0 0116.32-9.31l114.45 69.14a10.89 10.89 0 010 18.6z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
