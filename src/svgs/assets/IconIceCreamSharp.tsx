export interface IconIceCreamSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconIceCreamSharp: React.FC<IconIceCreamSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M359.72 112.37a104 104 0 00-207.44 0A80.12 80.12 0 0080 192c0 39.36 26.37 71.23 62.38 78.46a2 2 0 011.62 2v38.83c0 21.84 17.2 40.22 39 40.74a40 40 0 0041-40v-47.84a2 2 0 012.72-1.86A83.47 83.47 0 00256 268a63.18 63.18 0 0042.24-16.59 2 2 0 012.74 0A74.63 74.63 0 00352 272a80 80 0 007.72-159.63z"/><path d="M256 300v12a72.1 72.1 0 01-58.21 70.64L256 496l92.06-192.08a105.29 105.29 0 01-49.18-14.36A93.75 93.75 0 01256 300z"/>
        </svg>
      </div>
    </div>
  );
};
