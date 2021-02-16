export interface IconTimerProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconTimer: React.FC<IconTimerProps> = ({ size = '24px', style }) => {
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
          <path d="M256 48C141.12 48 48 141.12 48 256s93.12 208 208 208 208-93.12 208-208S370.88 48 256 48zm-82.33 114.34l105 71a32.5 32.5 0 01-37.25 53.26 33.21 33.21 0 01-8-8l-71-105a8.13 8.13 0 0111.32-11.32zM256 432c-97 0-176-78.95-176-176a174.55 174.55 0 0153.87-126.72 14.15 14.15 0 1119.64 20.37A146.53 146.53 0 00108.3 256c0 81.44 66.26 147.7 147.7 147.7S403.7 337.44 403.7 256c0-76.67-58.72-139.88-133.55-147v55a14.15 14.15 0 11-28.3 0V94.15A14.15 14.15 0 01256 80c97.05 0 176 79 176 176s-78.95 176-176 176z"/>
        </svg>
      </div>
    </div>
  );
};
