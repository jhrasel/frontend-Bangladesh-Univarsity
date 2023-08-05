import Button from "react-bootstrap/Button";
import styles from './button.module.css'
export const Buttons = (props) => {
  const {text, bgColor, color, click} = props;
  return (
      <Button onClick={click} className={styles.buttons} style={{background: bgColor, color: color}}>{text}</Button>
  )
}