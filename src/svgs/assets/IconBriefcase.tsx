export interface IconBriefcaseProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconBriefcase: React.FC<IconBriefcaseProps> = ({ size = '24px', style }) => {
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
          <path d="M336 80H176a16 16 0 00-16 16v16h192V96a16 16 0 00-16-16z" fill="none"/><path d="M496 176a64.07 64.07 0 00-64-64h-48V96a48.05 48.05 0 00-48-48H176a48.05 48.05 0 00-48 48v16H80a64.07 64.07 0 00-64 64v48h480zm-144-64H160V96a16 16 0 0116-16h160a16 16 0 0116 16zm-16 152a24 24 0 01-24 24H200a24 24 0 01-24-24v-4a4 4 0 00-4-4H16v144a64 64 0 0064 64h352a64 64 0 0064-64V256H340a4 4 0 00-4 4z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
