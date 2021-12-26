import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Route, Routes } from "react-router";
import { Score } from "./components/Score";
import { Play } from "./components/Play";

function App() {
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      try {
        const res = await axios.get(
          "https://opentdb.com/api.php?amount=10&category=19"
        );
        setQuestions(res.data.results);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    if (count === 9) {
      navigate("/score");
    }
  });
  console.log(count);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Play
              setCount={setCount}
              questions={questions}
              setScore={setScore}
              count={count}
            />
          }
        />
        <Route path="/score" element={<Score score={score} />} />
      </Routes>
    </div>
  );
}

export default App;
