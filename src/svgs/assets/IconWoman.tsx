export interface IconWomanProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconWoman: React.FC<IconWomanProps> = ({ size = '24px', style }) => {
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
          <circle cx="255.75" cy="56" r="56" fill="currentColor"/><path d="M394.63 277.9l-10.33-34.41v-.11l-22.46-74.86h-.05l-2.51-8.45a44.87 44.87 0 00-43-32.08h-120a44.84 44.84 0 00-43 32.08l-2.51 8.45h-.06l-22.46 74.86v.11l-10.37 34.41c-3.12 10.39 2.3 21.66 12.57 25.14a20 20 0 0025.6-13.18l25.58-85.25 2.17-7.23a8 8 0 0115.53 2.62 7.78 7.78 0 01-.17 1.61L155.43 347.4a16 16 0 0015.32 20.6h29v114.69c0 16.46 10.53 29.31 24 29.31s24-12.85 24-29.31V368h16v114.69c0 16.46 10.53 29.31 24 29.31s24-12.85 24-29.31V368h30a16 16 0 0015.33-20.6l-43.74-145.81a7.52 7.52 0 01-.16-1.59 8 8 0 0115.54-2.63l2.17 7.23 25.57 85.25A20 20 0 00382.05 303c10.27-3.44 15.69-14.71 12.58-25.1z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
