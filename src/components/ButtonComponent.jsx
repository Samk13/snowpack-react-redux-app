import React, { forwardRef } from 'react'
import styles from './buttonComponent.module.css'

function ButtonComponent(_props, ref) {
  return (
    <button className={styles.btn} ref={ref} {..._props}>
      {_props.children}
    </button>
  )
}

export default forwardRef(ButtonComponent)
