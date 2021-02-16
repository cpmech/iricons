export interface IconVolumeMediumSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconVolumeMediumSharp: React.FC<IconVolumeMediumSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M157.65 176.1H64v159.8h93.65L288 440V72L157.65 176.1z"/><path d="M352 320c9.74-19.41 16-40.81 16-64 0-23.51-6-44.4-16-64m48 176c19.48-34 32-64 32-112s-12-77.7-32-112" fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32"/>
        </svg>
      </div>
    </div>
  );
};
