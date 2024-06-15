/**
 * (point)  1: useSelector => (Data Get) karne kylye he
 * (point)  2: useDispatch => (Data Update) karwane kylye he
 */

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // console.log(count);
  const [inputField, setInputField] = useState();
  console.log(inputField);
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
          onClick={() => dispatch(decrement())}
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
          onClick={() => dispatch(incrementByAmount(inputField))}
        >
          Increment Amount
        </button>
      </div>
    </div>
  );
}
