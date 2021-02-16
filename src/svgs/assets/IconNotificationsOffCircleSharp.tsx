export interface IconNotificationsOffCircleSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconNotificationsOffCircleSharp: React.FC<IconNotificationsOffCircleSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zM144 308l28-36v-32.3a131.83 131.83 0 012.34-25.42L285.92 336H144zm112.18 76C233.6 384 216 373.75 216 352h80c-.3 21.37-17.45 32-39.82 32zm93.48-3.74l-211-227 23.68-21.52 211 227zM368 330.85l-.32-.38-155.5-169.63a73.4 73.4 0 0115.82-5.41l4-27.43h48l4 27.43c40 8.92 56 44 56 84.27V272l28 36z"/>
        </svg>
      </div>
    </div>
  );
};
