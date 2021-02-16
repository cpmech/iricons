/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RcLinkOrDiv, RcMediaNotPhone, RcMediaPhone, RcMenuEntry, RcMenuHoriz } from '../rcomps';
import { styles } from '../styles';
import { IconLogoGithub } from '../svgs/assets/IconLogoGithub';

const github = (
  <RcLinkOrDiv
    href="https://github.com/cpmech/iricons"
    color={styles.colors.white()}
    hoverColor={styles.colors.grey(50)}
  >
    <IconLogoGithub size="48px" />
  </RcLinkOrDiv>
);

const left = (
  <h2
    css={css`
      color: ${styles.colors.white()};
    `}
  >
    ION REACT ICONS
  </h2>
);

const right = (
  <h2
    css={css`
      color: ${styles.colors.white()};
    `}
  >
    IRICONS
  </h2>
);

const menu2: RcMenuEntry[] = [{ comp: github }, { comp: right }];
const menu3: RcMenuEntry[] = [{ comp: left }, { comp: github }, { comp: right }];

export const Header: React.FC = () => (
  <div
    css={css`
      background-color: ${styles.colors.blue()};
    `}
  >
    <RcMediaPhone>
      <RcMenuHoriz
        entries={menu2}
        height={styles.dims.header.height}
        color={styles.colors.white()}
        bgColor={styles.colors.blue()}
        marginTop="0px"
        paddingVert="0px"
        paddingHoriz="20px"
        maxWidth={`${styles.dims.maxPageWidth}px`}
      />
    </RcMediaPhone>
    <RcMediaNotPhone>
      <RcMenuHoriz
        entries={menu3}
        height={styles.dims.header.height}
        color={styles.colors.white()}
        bgColor={styles.colors.blue()}
        marginTop="0px"
        paddingVert="0px"
        paddingHoriz="20px"
        maxWidth={`${styles.dims.maxPageWidth}px`}
      />
    </RcMediaNotPhone>
  </div>
);
