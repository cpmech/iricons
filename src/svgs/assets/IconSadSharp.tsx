export interface IconSadSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconSadSharp: React.FC<IconSadSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM328 208a24 24 0 11-24 24 23.94 23.94 0 0124-24zm-144 0a24 24 0 11-24 24 23.94 23.94 0 0124-24zm72 80c45.42 0 83.75 29.49 95.72 69.83 1 3.52 2.33 10.17 2.33 10.17H158s1.31-6.69 2.33-10.17C172.11 317.47 210.53 288 256 288z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
