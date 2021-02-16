export interface IconPushProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconPush: React.FC<IconPushProps> = ({ size = '24px', style }) => {
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
          <path d="M376 352H272V198.63l52.69 52.68a16 16 0 0022.62-22.62l-80-80a16 16 0 00-22.62 0l-80 80a16 16 0 0022.62 22.62L240 198.63V352H136a56.06 56.06 0 01-56-56V88a56.06 56.06 0 0156-56h240a56.06 56.06 0 0156 56v208a56.06 56.06 0 01-56 56zM272 464a16 16 0 01-32 0V352h32z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
