export interface IconFootballSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconFootballSharp: React.FC<IconFootballSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm140.64 296.08h-46.77l-16.89-29 15-60.44L377.79 242l42.65 36.71a164.87 164.87 0 01-23.8 65.37zM134.21 242L164 254.67l15 60.44-16.89 29h-46.75a164.87 164.87 0 01-23.8-65.34zm249.07-92.47l-18.41 52.33-31.12 13.18L277 167.46v-35l43.86-29.22a166.87 166.87 0 0162.42 46.32zM191.14 103.2L235 132.42v35l-56.75 47.61-31.12-13.18-18.41-52.33a166.87 166.87 0 0162.42-46.32zm26.44 314.3l-20.1-50.66 16-27.51h85l16.06 27.53-20 50.6a166.23 166.23 0 01-77 0z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};