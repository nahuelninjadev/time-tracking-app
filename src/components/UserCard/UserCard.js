
import './UserCard.css';
function UserCard(props) {
  return (
    <div className='box h-100'>
      <div className='user-info'>
        <p>{props.image}</p>
        <p>{props.fullname}</p>
      </div>
      <div className='text-center text-md-start'>
        <button type='button' onClick={() => props.onClick('d')} className='btn btn-sm btn-link  text-md-start d-md-block'>Daily</button>
        <button type='button' onClick={() => props.onClick('w')} className='btn btn-sm btn-link  text-md-start d-md-block'>Weekly</button>
        <button type='button' onClick={() => props.onClick('m')} className='btn btn-sm btn-link  text-md-start d-md-block'>Monthly</button>
      </div>
    </div>
  )
}

export default UserCard;