export interface IconGitPullRequestSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconGitPullRequestSharp: React.FC<IconGitPullRequestSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M192 96a64 64 0 10-97 54.81v209.8a64 64 0 1064 0V152a64.06 64.06 0 0033-56zm-64-32a32 32 0 11-32 32 32 32 0 0132-32zm-1 384a32 32 0 1132-32 32 32 0 01-32 32zm289-87.39V156a92.1 92.1 0 00-92-92h-35V9.93L201.14 96 289 182.07V128h35a28 28 0 0128 28v204.61a64 64 0 1064 0zM384 448a32 32 0 1132-32 32 32 0 01-32 32z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
