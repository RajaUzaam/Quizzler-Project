

export default function InfoTable1({ symbol, content }) {
    return (
    <>
    <div className='infoTable1'>
      <div className='row'>
        <div className='col-lg-2'><i className={symbol}></i></div>
        <div className='col-xl'>
          <p>{ content }</p>
        </div>
      </div>
    </div></>
    )
  }