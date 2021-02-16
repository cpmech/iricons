export interface IconBagCheckProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconBagCheck: React.FC<IconBagCheckProps> = ({ size = '24px', style }) => {
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
          <path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM332.49 274l-89.6 112a16 16 0 01-12.23 6h-.26a16 16 0 01-12.16-5.6l-38.4-44.88a16 16 0 1124.32-20.8L230 350.91 307.51 254a16 16 0 0125 20zM336 160H176v-16a80 80 0 01160 0z"/>
        </svg>
      </div>
    </div>
  );
};
