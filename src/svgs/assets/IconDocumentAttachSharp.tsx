export interface IconDocumentAttachSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconDocumentAttachSharp: React.FC<IconDocumentAttachSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M280 240a8 8 0 01-8-8V48h-57.25a65.42 65.42 0 00-6.5-9.81C196.72 23.88 179.59 16 160 16c-37.68 0-64 29.61-64 72v144c0 25 20.34 40 40 40a39.57 39.57 0 0040-40V80h-32v152a7.75 7.75 0 01-8 8c-2.23 0-8-1.44-8-8V88c0-19.34 8.41-40 32-40 29.69 0 32 30.15 32 39.38v138.75c0 17.45-5.47 33.23-15.41 44.46C166.5 282 152.47 288 136 288s-30.5-6-40.59-17.41C85.47 259.36 80 243.58 80 226.13V144H48v82.13c0 51.51 33.19 89.63 80 93.53V468a12 12 0 0012 12h312a12 12 0 0012-12V240z"/><path d="M308 208h146.31a2 2 0 001.42-3.41L307.41 56.27a2 2 0 00-3.41 1.42V204a4 4 0 004 4z"/>
        </svg>
      </div>
    </div>
  );
};
