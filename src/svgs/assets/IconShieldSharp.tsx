export interface IconShieldSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconShieldSharp: React.FC<IconShieldSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M256 32C174 69.06 121.38 86.46 32 96c0 77.59 5.27 133.36 25.29 184.51a348.86 348.86 0 0071.43 112.41c49.6 52.66 104.17 80.4 127.28 87.08 23.11-6.68 77.68-34.42 127.28-87.08a348.86 348.86 0 0071.43-112.41C474.73 229.36 480 173.59 480 96c-89.38-9.54-142-26.94-224-64z"/>
        </svg>
      </div>
    </div>
  );
};
