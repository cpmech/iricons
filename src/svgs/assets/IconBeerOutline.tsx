export interface IconBeerOutlineProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconBeerOutline: React.FC<IconBeerOutlineProps> = ({ size = '24px', style }) => {
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
          <path d="M352 200v240a40.12 40.12 0 01-40 40H136a40.12 40.12 0 01-40-40V224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M352 224h40a56.16 56.16 0 0156 56v80a56.16 56.16 0 01-56 56h-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M224 256v160m64-160v160M160 256v160m160-304a48 48 0 010 96c-13.25 0-29.31-7.31-38-16H160c-8 22-27 32-48 32a48 48 0 010-96 47.91 47.91 0 0126 9"/><path d="M91.86 132.43a40 40 0 1160.46-52S160 91 160 96m-14.17-31.29C163.22 44.89 187.57 32 216 32c52.38 0 94 42.84 94 95.21a95 95 0 01-1.67 17.79" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/>
        </svg>
      </div>
    </div>
  );
};
