import './ActivityCard.css';

function ActivityCard(props){
  return (
    <div className='activity-box h-100'>
      hoal
      <div className='activity-info mt-4'>
        <p>{props.activity}</p>
        <p>{props.hours}</p>
        <p>{props.last}</p>
      </div>
    </div>
  )
}

export default ActivityCard;