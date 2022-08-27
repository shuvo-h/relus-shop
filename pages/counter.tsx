import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../src/Redux/Slices/Sample/counterSlice'
import { RootState } from '../src/Redux/store'
import styles from '../styles/Counter.module.scss';
// import styles from '../styles/Home.module.css';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className={styles.highlight_SCSS_Page}>
      <h1 className={styles.colored_SCSS_title}>Counter Page</h1>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}