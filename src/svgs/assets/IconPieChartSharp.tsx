export interface IconPieChartSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconPieChartSharp: React.FC<IconPieChartSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M58 362.09l-6.51-14.59A224 224 0 01256 32h16v234.37z" fill="currentColor"/><path d="M304 66.46v220.65L94.62 380.78A208.31 208.31 0 00272 480c114.69 0 208-93.31 208-208 0-103.81-76.45-190.1-176-205.54z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
