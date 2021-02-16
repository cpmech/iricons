/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RcLinkOrDiv } from '../rcomps';
import { styles } from '../styles';
import { IconLogoGithub } from '../svgs/assets/IconLogoGithub';

export const Footer: React.FC = () => (
  <div
    css={css`
      background-color: ${styles.colors.grey()};
      height: ${styles.dims.footer.height};
      color: ${styles.colors.white()};
      display: flex;
      justify-content: center;
      padding: 40px 20px;
    `}
  >
    <RcLinkOrDiv
      href="https://github.com/cpmech/iricons"
      color={styles.colors.white()}
      hoverColor={styles.colors.grey(50)}
    >
      <IconLogoGithub size="48px" />
    </RcLinkOrDiv>
  </div>
);
