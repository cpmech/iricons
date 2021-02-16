export interface IconArrowUndoCircleProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconArrowUndoCircle: React.FC<IconArrowUndoCircleProps> = ({ size = '24px', style }) => {
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
          <path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm97.67 281.1c-24.07-25.21-51.51-38.68-108.58-38.68v37.32a8.32 8.32 0 01-14.05 6L146.58 254a8.2 8.2 0 010-11.94L231 162.29a8.32 8.32 0 0114.05 6v37.32c88.73 0 117.42 55.64 122.87 117.09.73 7.72-8.85 12.05-14.25 6.4z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
