import { useState, useEffect } from 'react';


export default function QuizSection({questions, answers, allOptions}) {
    const [currentTurn, setCurrentTurn] = useState(0);
    const [successNum, setSuccessNum] = useState(0);
    const [ansConfirmed, setAnsConfirmed] = useState(false);
    const [options, setOptions] = useState([]);
  
    useEffect(() => {
      if (allOptions[currentTurn]) {
        const shuffledOptions = shuffleOptions(allOptions[currentTurn]);
        setOptions(shuffledOptions);
      }
    }, [currentTurn, allOptions]);
  
    const handleNext = () => {
      if (currentTurn < questions.length - 1 && ansConfirmed !== false) {
        setCurrentTurn(currentTurn + 1);
        setAnsConfirmed(false);
      }
    };
  
    const shuffleOptions = (desOptions) => {
      let newOptions = desOptions.slice();
      for (let i = newOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newOptions[i], newOptions[j]] = [newOptions[j], newOptions[i]];
      }
      return newOptions;
    };
  
    function isWinBtn(valueBtn) {
      if (ansConfirmed === false) {
        return 'btn btn-outline-info';
      } else if (valueBtn === answers[currentTurn]) {
        if (valueBtn === options[ansConfirmed] && ansConfirmed !== true) {
          setSuccessNum(successNum + 500);
          setAnsConfirmed(true);
        }
        return 'btn btn-success';
      } else {
        return 'btn btn-danger';
      }
    };
    return (
      <section>
        <title>Quizzler - Play</title>
        <div className='SectionQuestion container-fluid'>
          <h5 className='font-italic'>(Questions?)</h5>
          <h4>{currentTurn + 1} of {questions.length}, Score: { successNum }/{ 500*questions.length }</h4>
          <h2>{ questions[currentTurn] }</h2>
          <hr/>
          <div className='ansSpace'>
            <h5 className='font-italic'>(Options)</h5>
            <button className={isWinBtn(options[0])} onClick={() => {if (ansConfirmed === false) {setAnsConfirmed(0)}}}>{options[0]}</button>
            <button className={isWinBtn(options[1])} onClick={() => {if (ansConfirmed === false) {setAnsConfirmed(1)}}}>{options[1]}</button>
            <button className={isWinBtn(options[2])} onClick={() => {if (ansConfirmed === false) {setAnsConfirmed(2)}}}>{options[2]}</button>
            <button className={isWinBtn(options[3])} onClick={() => {if (ansConfirmed === false) {setAnsConfirmed(3)}}}>{options[3]}</button>
          </div>
          <button className='btn btn-outline-secondary btn-lg' 
          onClick={() => handleNext()}>
            Next
          </button>
        </div>
      </section>
    );
  };