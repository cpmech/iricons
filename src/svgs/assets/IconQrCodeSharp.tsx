export interface IconQrCodeSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconQrCodeSharp: React.FC<IconQrCodeSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M336 336h80v80h-80zm-64-64h64v64h-64zm144 144h64v64h-64zm16-144h48v48h-48zM272 432h48v48h-48zm64-336h80v80h-80z" fill="currentColor"/><path d="M480 240H272V32h208zm-164-44h120V76H316zM96 96h80v80H96z" fill="currentColor"/><path d="M240 240H32V32h208zM76 196h120V76H76zm20 140h80v80H96z" fill="currentColor"/><path d="M240 480H32V272h208zM76 436h120V316H76z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
