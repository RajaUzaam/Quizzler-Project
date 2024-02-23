import InfoTable1 from './InfoTable1.js';


export default function ContactSection() {
    return (
      <section>
        <title>Quizzler - Contact</title>
        <div className='SectionAbout container-fluid'>
          <a href='http://192.168.100.24:3000' className='logo'>Contact 
          Quiz<img src='https://cdn-icons-png.flaticon.com/256/5692/5692030.png' alt="Quizzler's Logo" width={'100%'} className='img-fluid'/>zler
          </a>
          <div className='aboutTextArea'>
          <InfoTable1 symbol={'fa fa-map-marker'} 
          content={'Uk, Cambridge, CHA, Sector L, 128901'} />
          <InfoTable1 symbol={'fas fa-phone'} 
    content={'1093840183041, 3798107394, 1498329847938297, 1908'} />
          </div>
        </div>
      </section>
    );
  };