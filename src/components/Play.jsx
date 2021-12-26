import { Header } from "./Header";
import { useState } from "react";
import { Questions } from "./Questions";
import { useNavigate } from "react-router";

export const Play = ({ setCount, questions, count, setScore }) => {
  const [answer, setAnswer] = useState([]);
  const navigate = useNavigate();

  return (
    <>
      <Header setCount={setCount} />

      <div className="row">
        <div className="reviews">
          <div>Review answers here</div>
          <div>
            {answer.map((item) => (
              <div>
                #{item.id} {item.answer}
              </div>
            ))}
          </div>
        </div>

        <Questions
          setAnswer={setAnswer}
          questions={questions}
          count={count}
          answer={answer}
          setScore={setScore}
        />
      </div>

      <div
        className="submit"
        onClick={() => {
          count === 9 && navigate("/score");
        }}
      >
        Submit
      </div>
    </>
  );
};
