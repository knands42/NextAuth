import styles from './page.module.css';

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className={styles.auth}>{children}</div>;
};

export default AuthLayout;
