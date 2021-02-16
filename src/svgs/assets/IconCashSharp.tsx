export interface IconCashSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconCashSharp: React.FC<IconCashSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M48 368h416v32H48zm32 48h352v32H80zm400-240a96.11 96.11 0 01-96-96V64H128v16a96.11 96.11 0 01-96 96H16v64h16a96.11 96.11 0 0196 96v16h256v-16a96.11 96.11 0 0196-96h16v-64zM256 304a96 96 0 1196-96 96.11 96.11 0 01-96 96z"/><path d="M96 80V64H16v80h16a64.07 64.07 0 0064-64zM32 272H16v80h80v-16a64.07 64.07 0 00-64-64zm448-128h16V64h-80v16a64.07 64.07 0 0064 64zm-64 192v16h80v-80h-16a64.07 64.07 0 00-64 64z"/><circle cx="256" cy="208" r="64"/>
        </svg>
      </div>
    </div>
  );
};