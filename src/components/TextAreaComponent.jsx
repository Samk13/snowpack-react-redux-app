import React, { forwardRef, useState } from 'react'
import { v1 as uuid } from 'uuid'
import styles from './textAreaComponent.module.css'

function TextInputComponent(_props, ref) {
  const [inputValue, setInputValue] = useState('')
  const id = `textarea_${uuid()}`
  const handleChange = (event) => {
    setInputValue(event.target.value)
    if (_props.onChange) _props.onChange(inputValue)
  }

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {_props.label}
      </label>
      <textarea
        className={`${_props.input} ${styles.textArea}`}
        onChange={handleChange}
        {..._props}
        ref={ref}
        id={id}
      />
      {_props.errors && <span className={styles.error}>{_props.errors}</span>}
    </div>
  )
}

export default forwardRef(TextInputComponent)
