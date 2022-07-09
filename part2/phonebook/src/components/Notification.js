const Notification = ({ message, setMessage }) => {
    console.log('msg for Notification:', message)
    if (message === '') {
      return null
    }
    setTimeout(function(){setMessage('');},2000); 
    return (
      <div className='notification'>
        {message}
      </div>
    )
  }

  export default Notification