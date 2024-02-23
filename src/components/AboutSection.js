import InfoTable1 from './InfoTable1.js';


export default function AboutSection() {
  return (
    <section>
      <title>Quizzler - About</title>
      <div className='SectionAbout container-fluid'>
        <div className='secMain mt-5'>
        <a href='http://192.168.100.24:3000' className='logo'>About 
        Quiz<img src='https://cdn-icons-png.flaticon.com/256/5692/5692030.png' alt="Quizzler's Logo" width={'100%'} className='img-fluid'/>zler
        </a>
        <div className='aboutTextArea'><h2>Greetings from our Quiz App, your one-stop shop for hard and fun trivia! Our app provides a 
        fun way to test your knowledge on a variety of subjects, regardless of your level of experience with trivia.</h2></div>
        </div>
        <div className='aboutTextArea'>
        <h3>Expectations</h3>
        <InfoTable1 symbol={'fas fa-question-circle fa-3x'} 
        content={'We want every user to have an immersive and interesting experience with our quiz app. With a wide range of categories, skill levels, and thoughtfully chosen questions, there is something to enjoy for everyone. There are quizzes catered to your interests, regardless of your passions—history, science, pop culture, sports, or anything else.'} />
        <InfoTable1 symbol={'fas fa-brain fa-3x'} 
        content={'But our Quiz App is more than simply a knowledge-testing tool—it is a community of students and trivia lovers who join together to share their passion for the genre. Engage with friends, confront competitors, or to find out who is the ultimate trivia master, connect with friends, take on competitors, or compete against gamers worldwide.'} />
        <InfoTable1 symbol={'fas fa-exclamation-circle fa-3x'} 
        content={'We are dedicated to making constant updates and enhancements to our quiz app so you may enjoy the greatest experience possible. There is always something new and intriguing to explore, from regularly scheduled content updates to new features and categories.'} />
        </div>
        <p><b>Why then wait? Start taking quizzes now to get in on the fun!</b></p>
      </div>
    </section>
  );
};