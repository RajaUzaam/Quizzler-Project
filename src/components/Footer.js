export default function Footer() {
    return (
    <footer>
      <div className='container-fluid card Footer card-footer'>
          <h4><b>Subscribe</b> to see the latest updates from Quizzler</h4>
          <form>
            <input type='email' className='emailInput' placeholder='Enter your email'/>
            <input type='submit' className='btn btn-outline-primary btnSubmit'/>
          </form>
          <hr/>
          <div className='row socials'>
          <div className='col'><a href='#null' target='_blank' rel="noreferrer"><i className='fab fa-facebook fa-2x' /></a></div>
          <div className='col'><a href='#null' target='_blank' rel="noreferrer"><i className='fab fa-instagram fa-2x' /></a></div>
          <div className='col'><a href='#null' target='_blank' rel="noreferrer"><i className='fab fa-twitter fa-2x' /></a></div>
          <div className='col'><a href='#null' target='_blank' rel="noreferrer"><i className='fab fa-pinterest fa-2x' /></a></div>
          <div className='col'><a href='#null' target='_blank' rel="noreferrer"><i className='fas fa-envelope fa-2x' /></a></div></div>
          <div className='row'>
            <div className='col-md-auto'><a href='#null'>Legal</a></div>
            <div className='col-md-auto'><a href='#null'>Privacy Policy</a></div>
            <div className='col-md-auto'><a href='#null'>Terms & Conditions</a>
            </div><div className='col-md-auto'><a href='#null'>Diversity</a></div>
          </div>
          <hr />
          <p>©2024 Quizzler, Inc.</p>
      </div>
    </footer>
    );
  };