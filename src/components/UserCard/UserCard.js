
import './UserCard.css';
function UserCard(props) {
  return (
    <div className='user-box h-100 '>
      <div className='user-info p-4'>
        <div className='row align-items-center'>
          <div className='col-2 col-md-12 '>
            <div className='photo d-block'>
              <img className='img-fluid' src={require('../../assets/images/image-jeremy.png')} alt="jeremy" />
            </div>
          </div>
          <div className='col-10 col-md-12'>
            <div className='user-report my-4 ms-2 ms-md-0'>
              <p>Report for</p>
              <p className='h1 text-white'>Jeremy Robson</p>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center text-md-start p-3 timeframes-options'>
        <button 
          type='button' 
          onClick={() => props.onClick('daily')} 
          className={'btn btn-link text-md-start d-md-block ' + (props.mode === 'daily' ? 'text-white' : '')}
        >Daily</button>
        <button 
          type='button' 
          onClick={() => props.onClick('weekly')} 
          className={'btn btn-link text-md-start d-md-block ' + (props.mode === 'weekly' ? 'text-white' : '')}
        >Weekly</button>
        <button 
          type='button' 
          onClick={() => props.onClick('monthly')} 
          className={'btn btn-link text-md-start d-md-block ' + (props.mode === 'monthly' ? 'text-white' : '')}
        >Monthly</button>
      </div>
    </div>
  )
}

export default UserCard;