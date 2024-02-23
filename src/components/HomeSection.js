

export default function HomeSection() {
    return (
      <section>
        <title>Quizzler - Home</title>
        <div className='SectionHome container-fluid'>
          <div className='secMain'>
          <a href='http://192.168.100.24:3000' className='logo'>
          Quiz<img src='https://cdn-icons-png.flaticon.com/256/5692/5692030.png' alt="Quizzler's Logo" className='img-fluid'/>zler
          </a>
          <h1>Build and Play Quizzes</h1>
          <h4>Easy and Simple to Create and Play Quizzes from anywhere in the World. Designed to challenge users' knowledge across a wide range of topics.</h4>
          <button className='btn btn-outline-success btn-lg'>Play</button></div>
          <i class="fas fa-question fa-4x"></i>
          <div className='home-bh'>
            <div className='row'>
              <div className='col home-bh-content'>
                <h3>Play</h3>
                <p><i>Quzzler Play</i> feature allows you to solve any mind boggling quiz simply with a click of a button!</p>
                <button className='btn btn-outline-success btn-lg'>Play</button>
              </div>
              <div className='col home-bh-content'>
                <h3>Create</h3>
                <p>Take advantage of <i>Quzzler Create</i>, just by providing the questions, answers, and options to quizzler, you
                 can create a quiz</p>
                 <button className='btn btn-outline-success btn-lg'>Create</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }