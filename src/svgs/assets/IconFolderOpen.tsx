export interface IconFolderOpenProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconFolderOpen: React.FC<IconFolderOpenProps> = ({ size = '24px', style }) => {
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
          <path d="M408 96H252.11a23.89 23.89 0 01-13.31-4L211 73.41A55.77 55.77 0 00179.89 64H104a56.06 56.06 0 00-56 56v24h416c0-30.88-25.12-48-56-48zm15.75 352H88.25a56 56 0 01-55.93-55.15L16.18 228.11v-.28A48 48 0 0164 176h384.1a48 48 0 0147.8 51.83v.28l-16.22 164.74A56 56 0 01423.75 448zm56.15-221.45z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
