export interface IconLogInSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconLogInSharp: React.FC<IconLogInSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M432 80H192a16 16 0 00-16 16v144h153.37l-64-64L288 153.37l91.31 91.32a16 16 0 010 22.62L288 358.63 265.37 336l64-64H176v144a16 16 0 0016 16h240a16 16 0 0016-16V96a16 16 0 00-16-16zM64 240h112v32H64z"/>
        </svg>
      </div>
    </div>
  );
};
