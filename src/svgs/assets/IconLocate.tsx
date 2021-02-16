export interface IconLocateProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconLocate: React.FC<IconLocateProps> = ({ size = '24px', style }) => {
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
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M256 96V56m0 400v-40m0-304a144 144 0 10144 144 144 144 0 00-144-144zm160 144h40m-400 0h40"/>
        </svg>
      </div>
    </div>
  );
};
