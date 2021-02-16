export interface IconLogoBufferProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconLogoBuffer: React.FC<IconLogoBufferProps> = ({ size = '24px', style }) => {
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
          <path d="M39.93 149.25l197.4 95.32c5.14 2.45 12 3.73 18.79 3.73s13.65-1.28 18.78-3.73l197.4-95.32c10.38-5 10.38-13.18 0-18.2L274.9 35.73c-5.13-2.45-12-3.73-18.78-3.73s-13.65 1.28-18.79 3.73l-197.4 95.32c-10.38 5.02-10.38 13.18 0 18.2z" fill="currentColor"/><path d="M472.3 246.9s-36.05-17.38-40.83-19.72-6.07-2.21-11.09.12-145.6 70.23-145.6 70.23a45.71 45.71 0 01-18.78 3.74c-6.77 0-13.65-1.29-18.78-3.74 0 0-136.85-66-143.27-69.18C87 225 85 225 78.67 228l-39 18.78c-10.38 5-10.38 13.19 0 18.2L237.1 360.3c5.13 2.45 12 3.73 18.78 3.73s13.65-1.28 18.79-3.73l197.4-95.3c10.61-4.92 10.61-13.08.23-18.1z" fill="currentColor"/><path d="M472.3 362.75s-36.05-17.38-40.83-19.75-6.07-2.21-11.09.12S274.9 413.5 274.9 413.5a45.74 45.74 0 01-18.78 3.73c-6.77 0-13.65-1.28-18.79-3.73 0 0-136.85-66-143.26-69.18-7-3.39-9-3.39-15.29-.35l-39 18.78c-10.39 5-10.39 13.18 0 18.2l197.4 95.32c5.13 2.56 12 3.73 18.78 3.73s13.65-1.28 18.78-3.73L472.18 381c10.5-5.07 10.5-13.23.12-18.25z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
