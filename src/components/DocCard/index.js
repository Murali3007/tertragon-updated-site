import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function DocCard({title, description, to, eyebrow}) {
  return (
    <Link className={clsx(styles.card, 'card')} to={to}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
      <span className={styles.action}>Read more <span aria-hidden="true">-&gt;</span></span>
    </Link>
  );
}
