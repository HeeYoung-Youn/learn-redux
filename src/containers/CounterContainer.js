import React from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import { decrease, increase, setDiff } from "../modules/counter";

const CounterContainer = ({ number, diff, increase, decrease, setDiff }) => {
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={increase}
      onDecrease={decrease}
      onSetDiff={setDiff}
    />
  );
};

export default connect(
  (state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }),
  {
    increase,
    decrease,
    setDiff,
  }
)(CounterContainer);
