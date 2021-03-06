export interface IconBatteryFullSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconBatteryFullSharp: React.FC<IconBatteryFullSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M17 384h432V128H17zm32-224h368v192H49z" fill="currentColor"/><path d="M70.69 182.94h324.63v146.13H70.69zM465 202.67h32v106.67h-32z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
