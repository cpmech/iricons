export interface IconIdCardOutlineProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconIdCardOutline: React.FC<IconIdCardOutlineProps> = ({ size = '24px', style }) => {
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
          <rect x="96" y="32" width="320" height="448" rx="48" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M208 80h96"/><path d="M333.48 284.51A39.65 39.65 0 00304 272c-11.6 0-22.09 4.41-29.54 12.43s-11.2 19.12-10.34 31C265.83 338.91 283.72 358 304 358s38.14-19.09 39.87-42.55c.88-11.78-2.82-22.77-10.39-30.94zM371.69 448H236.31a12.05 12.05 0 01-9.31-4.17 13 13 0 01-2.76-10.92c3.25-17.56 13.38-32.31 29.3-42.66C267.68 381.06 285.6 376 304 376s36.32 5.06 50.46 14.25c15.92 10.35 26.05 25.1 29.3 42.66a13 13 0 01-2.76 10.92 12.05 12.05 0 01-9.31 4.17z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
