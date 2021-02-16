import { Fragment } from 'react';
import { Footer, Header } from './layout';
import { rcConfig, RcLayout } from './rcomps';
import { Router } from './pages';
import { styles } from './styles';

rcConfig.media.desktop.maxPageWidth = styles.dims.maxPageWidth;

export const App: React.FC = () => {
  const header = <Header />;

  const footer = <Footer />;

  const main = <Router />;

  return (
    <Fragment>
      <RcLayout
        header={header}
        main={main}
        footer={footer}
        maxContentWidth={`${styles.dims.maxPageWidth}px`}
      />
    </Fragment>
  );
};
