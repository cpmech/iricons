export interface IconCropProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconCrop: React.FC<IconCropProps> = ({ size = '24px', style }) => {
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
          <path d="M458 346H192a26 26 0 01-26-26V54a22 22 0 00-44 0v68H54a22 22 0 000 44h68v154a70.08 70.08 0 0070 70h154v68a22 22 0 0044 0v-68h68a22 22 0 000-44z"/><path d="M214 166h106a26 26 0 0126 26v106a22 22 0 0044 0V192a70.08 70.08 0 00-70-70H214a22 22 0 000 44z"/>
        </svg>
      </div>
    </div>
  );
};
