export interface IconThermometerProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconThermometer: React.FC<IconThermometerProps> = ({ size = '24px', style }) => {
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
          <path d="M320 287.18V81c0-35.12-27.89-64.42-63-64.95a64.08 64.08 0 00-65 64v207.13a8 8 0 01-3.18 6.37A113.48 113.48 0 00144 384a112 112 0 00224 0 113.48 113.48 0 00-44.82-90.45 8 8 0 01-3.18-6.37zM254.07 432a48 48 0 01-22-89.54 16 16 0 008-13.84V112.45c0-8.61 6.62-16 15.23-16.43A16 16 0 01272 112v216.58a16.18 16.18 0 008.15 13.94A48 48 0 01254.07 432z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
