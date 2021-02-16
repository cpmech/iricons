export interface IconIdCardSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconIdCardSharp: React.FC<IconIdCardSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M408 16H104a24 24 0 00-24 24v432a24 24 0 0024 24h304a24 24 0 0024-24V40a24 24 0 00-24-24zm-61.1 296.77a43 43 0 11-40.71-40.71 43 43 0 0140.71 40.71zM192 64h128v32H192zm192 384H224v-24.6c0-32.72 53.27-49.21 80-49.21s80 16.49 80 49.21z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
