export interface IconDiscProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconDisc: React.FC<IconDiscProps> = ({ size = '24px', style }) => {
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
          <path d="M256 176a80 80 0 1080 80 80.09 80.09 0 00-80-80zm0 112a32 32 0 1132-32 32 32 0 01-32 32z" fill="currentColor"/><path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM256 368a112 112 0 11112-112 112.12 112.12 0 01-112 112z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
