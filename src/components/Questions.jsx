export const Questions = ({setAnswer, questions, count, answer, setScore}) => {
    return(
        <div className="questions">
        {questions.map(
          ({ question, correct_answer, incorrect_answers }, index) => {
            return (
              count === index && (
                <div>
                  <div>
                    Question# {index} {question}
                  </div>
                  <div className="option">
                    <input
                      checked={answer.some(
                        (item) =>
                          item.id === count && item.answer === correct_answer
                      )}
                      name="option"
                      onChange={() => {
                        setScore((prev) => prev + 1);
                        setAnswer((prev) =>
                          prev.some((e) => e.id === count)
                            ? prev.map((el) =>
                                el.id === count
                                  ? { ...el, answer: correct_answer }
                                  : el
                              )
                            : prev.concat({
                                id: count,
                                answer: correct_answer,
                              })
                        );
                      }}
                      type="radio"
                    ></input>
                    <label>{correct_answer}</label>
                  </div>
                  {incorrect_answers.map((item) => {
                    return (
                      <div className="option">
                        <input
                          checked={answer.some(
                            (el) => el.id === count && el.answer === item
                          )}
                          name="option"
                          onChange={() => {
                            setScore((prev) => prev - 1);
                            setAnswer((prev) =>
                              prev.some((e) => e.id === count)
                                ? prev.map((el) =>
                                    el.id === count
                                      ? { ...el, answer: item }
                                      : el
                                  )
                                : prev.concat({
                                    id: count,
                                    answer: item,
                                  })
                            );
                          }}
                          type="radio"
                        ></input>
                        <label>{item}</label>
                      </div>
                    );
                  })}
                </div>
              )
            );
          }
        )}
      </div>
    )
}