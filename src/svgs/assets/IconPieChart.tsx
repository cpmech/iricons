export interface IconPieChartProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconPieChart: React.FC<IconPieChartProps> = ({ size = '24px', style }) => {
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
          <path d="M66.1 357a16 16 0 01-14.61-9.46A224 224 0 01256 32a16 16 0 0116 16v208a16 16 0 01-9.47 14.61l-189.9 84.95A15.93 15.93 0 0166.1 357z" fill="currentColor"/><path d="M313.59 68.18A8 8 0 00304 76v180a48.07 48.07 0 01-28.4 43.82L103.13 377a8 8 0 00-3.35 11.81 208.42 208.42 0 0048.46 50.41A206.32 206.32 0 00272 480c114.69 0 208-93.31 208-208 0-100.45-71.58-184.5-166.41-203.82z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
