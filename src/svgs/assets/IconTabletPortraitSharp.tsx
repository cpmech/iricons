export interface IconTabletPortraitSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconTabletPortraitSharp: React.FC<IconTabletPortraitSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M430 0H82a18 18 0 00-18 18v476a18 18 0 0018 18h348a18 18 0 0018-18V18a18 18 0 00-18-18zM100 448V64h312v384z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
