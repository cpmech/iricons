/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RcMenuEntry, RcMenuHoriz } from '../rcomps';
import { styles } from '../styles';

const menuEntries: RcMenuEntry[] = [
  {
    comp: (
      <h2
        css={css`
          color: ${styles.colors.white()};
        `}
      >
        ION REACT ICONS
      </h2>
    ),
  },
  {
    comp: (
      <h2
        css={css`
          color: ${styles.colors.white()};
        `}
      >
        IRICONS
      </h2>
    ),
  },
];

export const Header: React.FC = () => (
  <div
    css={css`
      background-color: ${styles.colors.blue()};
    `}
  >
    <RcMenuHoriz
      entries={menuEntries}
      height={styles.dims.header.height}
      color={styles.colors.white()}
      bgColor={styles.colors.blue()}
      marginTop="0px"
      paddingVert="0px"
      paddingHoriz="20px"
      maxWidth={`${styles.dims.maxPageWidth}px`}
    />
  </div>
);
