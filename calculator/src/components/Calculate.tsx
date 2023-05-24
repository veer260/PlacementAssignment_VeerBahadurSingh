import { useContext, useState } from "react";
import ExpressionContext from "../context/Expression";

const Calculate = () => {
  //   console.log("hey");
  //@ts-ignore
  const { exp, setExp } = useContext(ExpressionContext);
  const [result, setResult] = useState();
  console.log({ exp });

  return (
    <div className="container">
      <div className="result">
        {result ? <div>{result}</div> : <div>{exp}</div>}
      </div>
      <div className="operators">
        <span
          onClick={() => {
            setExp((prev: string) => prev + "1");
          }}
        >
          1
        </span>
        <span
          onClick={() => {
            setExp((prev: string) => prev + "2");
          }}
        >
          2
        </span>
        <span
          onClick={() => {
            setExp((prev: string) => prev + "3");
          }}
        >
          3
        </span>
        <span
          onClick={() => {
            setExp((prev: string) => prev + "-");
          }}
        >
          -
        </span>
        <span
          onClick={() => {
            setExp((prev: string) => prev + "4");
          }}
        >
          4
        </span>
        <span
          onClick={() => {
            setExp((prev: string) => prev + "5");
          }}
        >
          5
        </span>
        <span
          onClick={() => {
            setExp((prev: string) => prev + "6");
          }}
        >
          6
        </span>
        <span
          onClick={() => {
            setExp((prev: string) => prev + "+");
          }}
        >
          +
        </span>
        <span
          onClick={() => {
            setExp((prev: string) => prev + "7");
          }}
        >
          7
        </span>
        <span
          onClick={() => {
            setExp((prev: string) => prev + "8");
          }}
        >
          8
        </span>
        <span
          onClick={() => {
            setExp((prev: string) => prev + "9");
          }}
        >
          9
        </span>
        <span
          onClick={() => {
            setExp((prev: string) => prev + "*");
          }}
        >
          *
        </span>
        <span
          onClick={() => {
            setExp((prev: string) => prev + "/");
          }}
        >
          /
        </span>
        <span
          onClick={() => {
            setExp((prev: string) => prev + "0");
          }}
        >
          0
        </span>
        <span
          onClick={() => {
            setExp((prev: string) => prev + ".");
          }}
        >
          .
        </span>
        <span
          onClick={() => {
            setExp(eval(exp).toString());
          }}
        >
          {" "}
          ={" "}
        </span>
      </div>
      <div className="footer">
        <span
          className=""
          onClick={() => {
            setExp(exp.substring(0, exp.length - 1));
          }}
        >
          {" "}
          del{" "}
        </span>
        <span
          onClick={() => {
            setExp("");
          }}
        >
          C
        </span>
      </div>
    </div>
  );
};

export default Calculate;
