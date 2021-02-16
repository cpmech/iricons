export interface IconMaleFemaleSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconMaleFemaleSharp: React.FC<IconMaleFemaleSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M330 16v44h42.89l-37.1 37.09A157.67 157.67 0 00216 42c-87.12 0-158 70.88-158 158 0 79.66 59.26 145.72 136 156.46V394h-50v44h50v58h44v-58h50v-44h-50v-37.54c76.74-10.74 136-76.8 136-156.46a157.23 157.23 0 00-14-64.93l44-44V134h44V16zM216 314a114 114 0 11114-114 114.13 114.13 0 01-114 114z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
