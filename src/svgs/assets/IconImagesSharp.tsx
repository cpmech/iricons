export interface IconImagesSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconImagesSharp: React.FC<IconImagesSharpProps> = ({ size = '24px', style }) => {
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
          <ellipse cx="373.14" cy="219.33" rx="46.29" ry="46" fill="none"/><path d="M80 132v328a20 20 0 0020 20h392a20 20 0 0020-20V132a20 20 0 00-20-20H100a20 20 0 00-20 20zm293.14 41.33a46 46 0 11-46.28 46 46.19 46.19 0 0146.28-46zm-261.41 276v-95.48l122.76-110.2L328.27 337l-113 112.33zm368.27 0H259l144.58-144L480 370.59z"/><path d="M20 32A20 20 0 000 52v344a20 20 0 0020 20h28V100a20 20 0 0120-20h380V52a20 20 0 00-20-20z"/>
        </svg>
      </div>
    </div>
  );
};
