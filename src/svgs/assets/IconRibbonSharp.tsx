export interface IconRibbonSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconRibbonSharp: React.FC<IconRibbonSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M256 336c-5.22 0-10.4-.24-15.51-.69a176.12 176.12 0 01-131.29-78.37L20 416h115l58 96 82.53-177.09A177.53 177.53 0 01256 336zm147-79.26a176.9 176.9 0 01-88.18 69.14L273.7 415.5 319 512l58-96h115z"/><circle cx="256.02" cy="160" r="48"/><path d="M256 16c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144S335.4 16 256 16zm0 224a80 80 0 1180-80 80.09 80.09 0 01-80 80z"/>
        </svg>
      </div>
    </div>
  );
};
