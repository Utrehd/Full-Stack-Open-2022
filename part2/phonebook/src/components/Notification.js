const Notification = ({ message, setMessage , messageType='notification'}) => {
    console.log('msg for Notification:', message)
    if (message === '') {
      return null
    }
    setTimeout(function(){setMessage('');},3000); 
    return (
      <div className={messageType}>
        {message}
      </div>
    )
  }

  export default Notification