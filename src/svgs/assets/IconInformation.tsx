export interface IconInformationProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconInformation: React.FC<IconInformationProps> = ({ size = '24px', style }) => {
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
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="40" d="M196 220h64v172"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="40" d="M187 396h138"/><path d="M256 160a32 32 0 1132-32 32 32 0 01-32 32z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
