import React from "react";
import "./QuestionAns.css";

const QuestionAns = () => {
  return (
    <div className="ans-container">
      <div className="question one">
        <h3>How react work?</h3>
        <p>
          React js is a javascript library. it's working with virtual dom,
          mainly react create virtual dom. if we make any changes react compare
          with old Dom and updated Dom. after comparison react render only this
          code or data which is changes. JSX is just a JavaScript code, it
          allows us to write HTML and javascript code in the javascript files.
          when we write code in JSX, react compiler compiles this code. react is
          component-based architecture, when we assign any component react wants
          a unique key for each element or component.
        </p>
      </div>
      <div className="question two">
        <h3>Props vs State?</h3>
        <p>
          State is an updatable function it contains data or information and
          data can be change and update. on the other hand, props are read-only
          it's can not store or contain data but props data can be changed when
          we declare.
        </p>
        <p>1. State can be changed but props are read-only.</p>
        <p>
          2. Statestore data and information and also pass state data as props
          but props allow us to pass data or element by one component to other
          components.
        </p>
        <p>
          3. state data can not access via other components but props data can
          access by his child component.
        </p>
      </div>
    </div>
  );
};

export default QuestionAns;
