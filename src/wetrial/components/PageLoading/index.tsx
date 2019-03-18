import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

interface ILoaderProps {
  spinning?: boolean;
  fullScreen?: boolean;
}

const Loader = (props: ILoaderProps) => {
  const { spinning, fullScreen } = props;
  return (
    <div
      className={classNames(styles.loader, {
        [styles.hidden]: !spinning,
        [styles.fullScreen]: fullScreen,
      })}
    >
      <div className={styles.warpper}>
        <div className={styles.inner} />
        <div className={styles.text}>...</div>
      </div>
    </div>
  );
};

Loader.defaultProps = {
  spinning: true,
  fullScreen: false,
};

export default Loader;
