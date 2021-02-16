export interface IconMegaphoneSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconMegaphoneSharp: React.FC<IconMegaphoneSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M128 144v332a4 4 0 004 4h100.07a8 8 0 007.82-9.7L208.71 352H232a8 8 0 008-8V144zm324.18 42.55L448 185.5V36a4 4 0 00-4-4h-42.5a4 4 0 00-2.63 1L272 144v160l126.87 111a4 4 0 002.63 1H444a4 4 0 004-4V262.5l4.18-1.05C461.8 258.84 480 247.67 480 224s-18.2-34.84-27.82-37.45zM96 144H52a4 4 0 00-4 4v35.59a43 43 0 00-4.24 4.35C38.4 194.32 32 205.74 32 224c0 20.19 7.89 33.13 16 40.42V300a4 4 0 004 4h44z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
