export interface IconWarningSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconWarningSharp: React.FC<IconWarningSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M479 447.77L268.43 56.64a8 8 0 00-14.09 0L43.73 447.77a8 8 0 007.05 11.79H472a8 8 0 007-11.79zm-197.62-36.29h-40v-40h40zm-4-63.92h-32l-6-160h44z"/>
        </svg>
      </div>
    </div>
  );
};
