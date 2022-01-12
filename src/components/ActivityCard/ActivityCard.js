import './ActivityCard.css';
import iconActivity from './icons';
const menuButton = require('../../assets/images/icon-ellipsis.svg').default;
function ActivityCard(props) {

  let lastValue;
  let activityClass = props.activity.toLowerCase().replace(' ', '');

  if (props.mode === 'daily') {
    lastValue = <p>Last day - {props.last}hs</p>;
  } else if (props.mode === 'monthly') {
    lastValue = <p>Last month - {props.last}hs</p>;
  } else {
    lastValue = <p>Last week - {props.last}hs</p>;
  }
  
  return (
    <div className='activity-box'>
      <div className={'activity-logo ' + activityClass}>
        <img src={iconActivity[activityClass]} />
      </div>
      <div className='activity-info p-3'>
        <div className='d-flex justify-content-between align-items-center mb-md-3'>
          <p className='mb-0'>{props.activity}</p>
          <button className='btn btn-link text-white text-decoration-none'><img src={menuButton} /></button>
        </div>
        <h1 className='mb-md-0'>{props.hours}hs</h1>
        {lastValue}
      </div>
    </div>
  )
}

export default ActivityCard;