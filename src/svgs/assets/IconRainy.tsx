export interface IconRainyProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconRainy: React.FC<IconRainyProps> = ({ size = '24px', style }) => {
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
          <path d="M456.26 139.37c-16.77-16.73-39.17-28.41-65.17-34a16 16 0 01-11.19-9 142.24 142.24 0 00-42.19-53.21C314.48 25.39 286.23 16 256 16a140.24 140.24 0 00-93.5 35.32c-24.2 21.56-40.91 51.34-48.43 85.83a16.05 16.05 0 01-11.72 12.18c-25 6.3-35.71 12.54-49.21 24.56C34 190.93 24 214.14 24 240.8c0 30.55 11.23 55.64 32.47 72.56C75.08 328.17 100.5 336 130 336h234c33.2 0 64.11-11.46 87-32.28 23.84-21.65 37-51.67 37-84.52 0-31.49-11-59.09-31.74-79.83zM112 448a16 16 0 01-13.3-24.88l32-48a16 16 0 0126.62 17.76l-32 48A16 16 0 01112 448zm48 48a16 16 0 01-13.29-24.88l64-96a16 16 0 0126.62 17.76l-64 96A16 16 0 01160 496zm112-48a16 16 0 01-13.3-24.88l32-48a16 16 0 0126.62 17.76l-32 48A16 16 0 01272 448zm48 48a16 16 0 01-13.3-24.88l64-96a16 16 0 0126.62 17.76l-64 96A16 16 0 01320 496z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};