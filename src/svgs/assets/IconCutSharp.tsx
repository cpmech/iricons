export interface IconCutSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconCutSharp: React.FC<IconCutSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M480 128h-48l-198.94 70.46-59.13-31.59a72.16 72.16 0 10-25.69 41.47l52.2 31.72L192 277l-43.64 26.76a71.74 71.74 0 1024.79 38L480 160zm-376.52 64a40 40 0 1140-40 40 40 0 01-40 40zm0 208a40 40 0 1140-40 40 40 0 01-40 40zm152-144a16 16 0 1116-16 16 16 0 01-16 16z" fill="currentColor"/><path d="M343.79 259.87l-83.74 48.18L432 368h47.99l.01-32-136.21-76.13z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
