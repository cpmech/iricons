export interface IconTrailSignProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconTrailSign: React.FC<IconTrailSignProps> = ({ size = '24px', style }) => {
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
          <path d="M491.31 324.69L432 265.37a31.8 31.8 0 00-22.63-9.37H272v-32h144a32 32 0 0032-32V96a32 32 0 00-32-32H272V48a16 16 0 00-32 0v16H102.63A31.8 31.8 0 0080 73.37l-59.31 59.32a16 16 0 000 22.62L80 214.63a31.8 31.8 0 0022.63 9.37H240v32H96a32 32 0 00-32 32v96a32 32 0 0032 32h144v48a16 16 0 0032 0v-48h137.37a31.8 31.8 0 0022.63-9.37l59.31-59.32a16 16 0 000-22.62z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
