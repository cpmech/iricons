export interface IconMedkitSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconMedkitSharp: React.FC<IconMedkitSharpProps> = ({ size = '24px', style }) => {
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
          <path fill="none" d="M168 72h176v24H168z"/><path d="M484 96H384V40a8 8 0 00-8-8H136a8 8 0 00-8 8v56H28a12 12 0 00-12 12v360a12 12 0 0012 12h456a12 12 0 0012-12V108a12 12 0 00-12-12zM168 72h176v24H168zm184 238h-74v74h-44v-74h-74v-44h74v-74h44v74h74z"/>
        </svg>
      </div>
    </div>
  );
};
