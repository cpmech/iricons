export interface IconDiamondProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconDiamond: React.FC<IconDiamondProps> = ({ size = '24px', style }) => {
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
          <path d="M121.72 32a4 4 0 00-3.72 5.56l2.3 5.43 40.7 94.9a4 4 0 006.88.82L243 38.4a4 4 0 00-3.2-6.4zm298.21 26.06l-41.28 96.37a4 4 0 003.68 5.57h101a4 4 0 003.4-6.11L427 57.53a4 4 0 00-7.07.53zM85 57.57l-59.71 96.32a4 4 0 003.4 6.11h101a4 4 0 003.67-5.58L92 58.1a4 4 0 00-7-.53zM393.27 32H267.82a1.94 1.94 0 00-1.56 3.11l79.92 106.46a1.94 1.94 0 003.34-.4L391.6 43l3.4-8.34a1.92 1.92 0 00-1.7-2.66zM239 448l-89.43-253.49A3.78 3.78 0 00146 192H25.7a3.72 3.72 0 00-2.95 6l216 279.81a5.06 5.06 0 006.39 1.37 5 5 0 002.39-6.08zm247.3-256H366a3.75 3.75 0 00-3.54 2.51l-98.2 278.16a5.21 5.21 0 002.42 6.31 5.22 5.22 0 006.61-1.39L489.25 198a3.72 3.72 0 00-2.95-6zM259.2 78.93l56 74.67a4 4 0 01-3.2 6.4H200a4 4 0 01-3.2-6.4l56-74.67a4 4 0 016.4 0zm-7 310.31l-67.7-191.91a4 4 0 013.77-5.33h135.46a4 4 0 013.77 5.33l-67.73 191.91a4 4 0 01-7.54 0z"/>
        </svg>
      </div>
    </div>
  );
};
