export interface IconAlarmSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconAlarmSharp: React.FC<IconAlarmSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M403.79 64.11l-3.27-.1H400c-14.73 0-28.55 5.91-40.52 15S344 96 344 96l88 86s11.25-5.71 17.61-13.85 14.28-18.08 14.32-37.11c.07-35.49-26.33-64.89-60.14-66.93zm-295.58 0l3.27-.1h.52c14.73 0 28.55 5.91 40.52 15S168 96 168 96l-88 86s-11.25-5.71-17.61-13.85S48.11 150.07 48.07 131C48 95.55 74.4 66.15 108.21 64.11z" fill="currentColor"/><path d="M391.3 384.6a.06.06 0 010-.08C425 344 441 288.24 427 229.23c-13.64-57.52-72.67-115.69-130.34-128.66C182 74.79 80.07 161.71 80.07 272a175.15 175.15 0 0040.78 112.52.06.06 0 010 .08L73 432a.06.06 0 000 .08l23 22.51a.06.06 0 00.08 0l47.43-47.37a.06.06 0 01.08 0 175.64 175.64 0 00225.05 0h.07L416 454.59a.06.06 0 00.08 0L440 432zM272.07 288H160v-31.9l.05-.05h80V144h32z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
