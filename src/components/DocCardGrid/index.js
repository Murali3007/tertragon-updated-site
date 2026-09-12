import clsx from 'clsx';
import styles from './styles.module.css';

export default function DocCardGrid({children, className}) {
  return <div className={clsx(styles.grid, className)}>{children}</div>;
}
