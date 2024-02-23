import { useState, useEffect } from 'react';


export default function CreateQuizSection({ createNextQuiz }) {
    const [textAreaValue, setTextAreaValue] = useState(['', '', '', '', '']);
    const [switchQuestion, setSwitchQuestion] = useState([]);
    const [switchAnswer, setSwitchAnswer] = useState([]);
    const [switchFinalQuestion, setSwitchFinalQuestion] = useState([]);
    const [switchFinalAnswer, setSwitchFinalAnswer] = useState([]);
    const [switchOptions, setSwitchOptions] = useState([]);
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    useEffect(() => {}, [switchFinalQuestion, switchFinalAnswer, switchOptions])
  
    function nextQuiz() {
      setSwitchOptions([...switchOptions, [switchAnswer, option1, option2, option3]])
      setSwitchFinalQuestion([...switchFinalQuestion, switchQuestion])
      setSwitchFinalAnswer([...switchFinalAnswer, switchAnswer])
      setTextAreaValue(['', '', '', '', ''])
    };
    function sendCreateNextQuiz() {
      createNextQuiz(switchFinalQuestion, switchFinalAnswer, switchOptions);
      setSwitchFinalQuestion([]);
      setSwitchFinalAnswer([]);
      setSwitchOptions([]);
      setTextAreaValue(['', '', '', '', '']);
    };
    return (
      <section>
        <title>Quizzler - Create</title>
        <div className='CreateQuizSection container-fluid'>
          <a href='http://192.168.100.24:3000' className='logo'>
          Create Quiz<img src='https://cdn-icons-png.flaticon.com/256/5692/5692030.png' alt="Quizzler's Logo" width={'100%'} className='img-fluid'/>zler
          </a>
          <hr />
          <div className='quizElement'><h1>Question</h1>
          <textarea required placeholder='Enter the question here' maxLength={100} id='createQuestion' rows={1}
          value={textAreaValue[0]} onChange={e => {setSwitchQuestion(e.target.value); setTextAreaValue(textAreaValue.map((val, index) => index === 0 ? e.target.value : val))}}></textarea></div>
          <div className='quizElement'><h1>Answer</h1>
          <textarea required placeholder='Enter the Answer here' maxLength={30} id='createAnswer' rows={1}
          value={textAreaValue[1]} onChange={ e => {setSwitchAnswer(e.target.value); setTextAreaValue(textAreaValue.map((val, index) => index === 1 ? e.target.value : val))}}></textarea></div>
          <div className='quizElement optionsElement'><h1>Options</h1>
          <textarea required placeholder='Enter the Option 1 here' maxLength={30} id='createOption1' rows={1}
          value={textAreaValue[2]} onChange={e => {setOption1(e.target.value); setTextAreaValue(textAreaValue.map((val, index) => index === 2 ? e.target.value : val))}}></textarea>
          <textarea required placeholder='Enter the Option 2 here' maxLength={30} id='createOption2' rows={1}
          value={textAreaValue[3]} onChange={e => {setOption2(e.target.value); setTextAreaValue(textAreaValue.map((val, index) => index === 3 ? e.target.value : val))}}></textarea>
          <textarea required placeholder='Enter the Option 3 here' maxLength={30} id='createOption3' rows={1}
          value={textAreaValue[4]} onChange={e => {setOption3(e.target.value); setTextAreaValue(textAreaValue.map((val, index) => index === 4 ? e.target.value : val))}}></textarea></div><hr />
          <div>
          <button className='btn btn-outline-secondary btn-lg' onClick={() => {nextQuiz()}}>Create Next Question</button>
          <button className='btn btn-outline-success btn-lg' onClick={() => {sendCreateNextQuiz()}}>Done Creating</button></div>
        </div>
      </section>
    );
  };