export interface IconFootstepsSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconFootstepsSharp: React.FC<IconFootstepsSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M130.54 358.31c-12.83 1.88-33.95 5.38-48-10.56S56.34 293.32 51 258.92c-7.88-50.7-.06-93.43 22-120.31 13-15.83 30.06-25 49.34-26.46 16.51-1.27 41.18 5.19 65 43.19 14.92 23.81 26.27 55.44 31.14 86.77 5.88 37.82 11.61 78.18-8.44 92.65-11.31 8.17-19.43 11-38.62 15.57-15.78 3.75-28.04 6.09-40.88 7.98zm-22.82 32.53l108.89-22.46c9.2-1.9 16.58 3.16 20 18.32 11.22 49.76-4.86 109.3-55.22 109.3-47.69 0-79.47-54.36-84.66-83.58-2.37-13.25 1.01-19.53 10.99-21.58zm232.87-136.5c-19.19-4.55-27.31-7.4-38.62-15.57-20.05-14.47-14.32-54.83-8.44-92.65 4.87-31.33 16.22-63 31.14-86.77 23.8-38 48.47-44.46 65-43.19C408.93 17.63 426 26.78 439 42.61c22.08 26.88 29.9 69.61 22 120.31-5.35 34.4-17.46 72.76-31.59 88.83s-35.13 12.44-48 10.56-25.05-4.23-40.82-7.97zm63.69 40.5l-108.89-22.46c-9.2-1.9-16.58 3.16-20 18.32-11.21 49.76 4.87 109.3 55.23 109.3 47.69 0 79.47-54.36 84.66-83.58 2.36-13.25-1.02-19.53-11-21.58z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
