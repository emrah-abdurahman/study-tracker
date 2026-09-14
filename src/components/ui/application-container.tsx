import styles from './application-container.module.css'

interface ApplicationContainerProps {
  children: React.ReactNode
}

export default function ApplicationContainer({ children }: ApplicationContainerProps) {
  return <main className={styles.applicationContainer}>{children}</main>
}