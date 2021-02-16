export interface IconAlbumsProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconAlbums: React.FC<IconAlbumsProps> = ({ size = '24px', style }) => {
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
          <path d="M368 96H144a16 16 0 010-32h224a16 16 0 010 32zm32 48H112a16 16 0 010-32h288a16 16 0 010 32zm19.13 304H92.87A44.92 44.92 0 0148 403.13V204.87A44.92 44.92 0 0192.87 160h326.26A44.92 44.92 0 01464 204.87v198.26A44.92 44.92 0 01419.13 448z"/>
        </svg>
      </div>
    </div>
  );
};
