export interface IconMicOffSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconMicOffSharp: React.FC<IconMicOffSharpProps> = ({ size = '24px', style }) => {
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
          <path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" d="M432 400L96 64"/><path d="M368 192v48a111.74 111.74 0 01-2.93 25.45L390.65 291a143.07 143.07 0 009.35-51v-48zm-96 240v-48.89a143.11 143.11 0 0056.65-18.83L305 340.65A112.13 112.13 0 01144 240v-48h-32v48c0 74 56.1 135.12 128 143.11V432h-64v32h160v-32zm64-195.63V128c0-44.86-35.14-80-80-80a79.68 79.68 0 00-69 39.34" fill="currentColor"/><path d="M176 211.63V239a80.89 80.89 0 0023.45 56.9 78.55 78.55 0 0081 20.21z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
