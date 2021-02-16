export interface IconHeartCircleSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconHeartCircleSharp: React.FC<IconHeartCircleSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm74.69 252.82c-8.5 10.36-39.69 38.48-74.69 63.51-35-25-66.19-53.15-74.69-63.51-20-24.37-29.58-49.4-29.3-76.5.31-31.06 25.22-56.33 55.53-56.33 22 0 37.3 12.41 46.19 22.76l2.27 2.75 2.27-2.75C267 180.29 282.42 168 304.46 168c30.31 0 55.22 25.27 55.53 56.33.28 27.09-9.31 52.12-29.3 76.49z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};