export interface IconStopwatchProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconStopwatch: React.FC<IconStopwatchProps> = ({ size = '24px', style }) => {
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
          <circle cx="256" cy="272" r="16"/><path d="M280 81.5V72a24 24 0 00-48 0v9.5a191 191 0 00-84.43 32.13L137 103a24 24 0 00-34 34l8.6 8.6A191.17 191.17 0 0064 272c0 105.87 86.13 192 192 192s192-86.13 192-192c0-97.74-73.42-178.66-168-190.5zM256 320a48 48 0 01-16-93.25V152a16 16 0 0132 0v74.75A48 48 0 01256 320z"/>
        </svg>
      </div>
    </div>
  );
};
