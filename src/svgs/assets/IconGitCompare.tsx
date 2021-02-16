export interface IconGitCompareProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconGitCompare: React.FC<IconGitCompareProps> = ({ size = '24px', style }) => {
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
          <path d="M218.31 340.69A16 16 0 00191 352v32h-20a28 28 0 01-28-28V152a64 64 0 10-64-1.16V356a92.1 92.1 0 0092 92h20v32a16 16 0 0027.31 11.31l64-64a16 16 0 000-22.62zM112 64a32 32 0 11-32 32 32 32 0 0132-32zm320 296.61V156a92.1 92.1 0 00-92-92h-20V32a16 16 0 00-27.31-11.31l-64 64a16 16 0 000 22.62l64 64A16 16 0 00320 160v-32h20a28 28 0 0128 28v204.61a64 64 0 1064 0zM400 448a32 32 0 1132-32 32 32 0 01-32 32z"/>
        </svg>
      </div>
    </div>
  );
};
