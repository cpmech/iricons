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
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-style: italic;
      max-width: ${styles.dims.maxPageWidth};
      padding: 20px 20px;
    `}
  >
    <h3>© 2021 Dorival Pedroso</h3>
    <RcLinkOrDiv
      href="https://github.com/cpmech/iricons"
      color={styles.colors.white()}
      hoverColor={styles.colors.grey(50)}
    >
      <IconLogoGithub size="48px" />
    </RcLinkOrDiv>
  </div>
);
