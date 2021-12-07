import styles from './styles.css'

export default ({items}) => (
  <div className={styles.wrapper}>
    {items.map(item => (
      <p>{item.text}</p>
    ))}
  </div>
)