export interface IconKeypadProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconKeypad: React.FC<IconKeypadProps> = ({ size = '24px', style }) => {
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
          <path d="M256 400a48 48 0 1048 48 48 48 0 00-48-48zm0-128a48 48 0 1048 48 48 48 0 00-48-48zm0-128a48 48 0 1048 48 48 48 0 00-48-48zm0-128a48 48 0 1048 48 48 48 0 00-48-48zm128 256a48 48 0 1048 48 48 48 0 00-48-48zm0-128a48 48 0 1048 48 48 48 0 00-48-48zm0-128a48 48 0 1048 48 48 48 0 00-48-48zM128 272a48 48 0 1048 48 48 48 0 00-48-48zm0-128a48 48 0 1048 48 48 48 0 00-48-48zm0-128a48 48 0 1048 48 48 48 0 00-48-48z"/>
        </svg>
      </div>
    </div>
  );
};
