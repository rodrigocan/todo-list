import { PlusCircle } from "phosphor-react"

import styles from "./TodoForm.module.css"

export function TodoForm() {
  return (
    <form className={styles.todoForm}>
      <input type="text" />
      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}
