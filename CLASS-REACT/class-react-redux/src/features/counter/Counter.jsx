/**
 * (point)  1: useSelector => (Data Get) karne kylye he
 * (point)  2: useDispatch => (Data Update) karwane kylye he
 */

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // console.log(count);
  const [inputField, setInputField] = useState(0);
  // console.log(inputField);
  return (
    <div>
      <div>
        {/* INCREMENT */}
        <button
          aria-label="Increment value"
          onClick={() =>
            count === 100 ? alert("Limited value 100") : dispatch(increment())
          }
        >
          Increment
        </button>
        <span>{count}</span>
        {/* DECREMENT */}
        <button
          aria-label="Decrement value"
          onClick={() =>
            count === 0 ? alert("Less Then is 0") : dispatch(decrement())
          }
        >
          Decrement
        </button>
        {/* INCREMENT AMOUNT */}
        <input
          type="number"
          aria-label="amount"
          value={inputField}
          onChange={(e) => setInputField(e.target.value)}
          onBlur={(e) => setInputField(e.target.value)}
        />

        <button
          aria-label="Increment Amount Value"
          onClick={() => {
            if (count === 100) {
              alert("Grather Then is 100");
            } else {
              dispatch(incrementByAmount(inputField));
            }
          }}
        >
          Increment Amount
        </button>
        {/* DECREMENT AMOUNT */}
        <button
          aria-label="Decrement Amount Value"
          onClick={() => {
            if (count === 0) {
              alert("Less Then is 0");
            } else {
              dispatch(decrementByAmount(inputField));
            }
          }}
        >
          Decrement Amount
        </button>
      </div>
    </div>
  );
}
