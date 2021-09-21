import { Fragment } from 'react';
import { rcConfig, RcLayout } from './rcomps';
import { Router } from './pages';
import { styles } from './styles';

rcConfig.media.desktop.maxPageWidth = styles.dims.maxPageWidth;

export const App: React.FC = () => {
  const main = <Router />;

  return (
    <Fragment>
      <RcLayout main={main} maxContentWidth={`${styles.dims.maxPageWidth}px`} />
    </Fragment>
  );
};
