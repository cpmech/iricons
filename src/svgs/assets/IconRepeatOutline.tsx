export interface IconRepeatOutlineProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconRepeatOutline: React.FC<IconRepeatOutlineProps> = ({ size = '24px', style }) => {
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
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M320 120l48 48-48 48"/><path d="M352 168H144a80.24 80.24 0 00-80 80v16m128 128l-48-48 48-48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M160 344h208a80.24 80.24 0 0080-80v-16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
        </svg>
      </div>
    </div>
  );
};
