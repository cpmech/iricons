export interface IconVolumeLowSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconVolumeLowSharp: React.FC<IconVolumeLowSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M391.12 341.48l-28.6-14.36 7.18-14.3c9.49-18.9 14.3-38 14.3-56.82 0-19.36-4.66-37.92-14.25-56.73L362.48 185 391 170.48l7.26 14.25C410.2 208.16 416 231.47 416 256c0 23.83-6 47.78-17.7 71.18zM189.65 176.1H96v159.8h93.65L320 440V72L189.65 176.1z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
