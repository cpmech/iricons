export interface IconPeopleCircleSharpProps {
  size?: string; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconPeopleCircleSharp: React.FC<IconPeopleCircleSharpProps> = ({ size = '24px', style }) => {
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
          <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm69.3 96.17a72.5 72.5 0 11-72.6 72.5 72.55 72.55 0 0172.6-72.5zm-155.1 26.36a59.32 59.32 0 11-59.4 59.32 59.35 59.35 0 0159.4-59.32zm-75.85 155c24.5-13.29 55.87-19.94 75.85-19.94 15 0 34.32 3 53.33 10.2a133.05 133.05 0 00-34 27.11c-13.19 15-20.76 32.92-20.76 50.83v15a177.06 177.06 0 01-74.42-83.15zM256 432a175.12 175.12 0 01-59.4-10.33v-27.05c0-52.59 85.75-79.09 128.7-79.09 23 0 58.38 7.63 86.21 22.81A176.14 176.14 0 01256 432z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
