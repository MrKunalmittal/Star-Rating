function Dialog({handleClose}) {
  return (
    <div className="dialog">
        <h3>Share your experience</h3>
        <p>Thanks for the Feedback !</p>
        <button 
            className="close-btn" 
            onClick={handleClose}>Close</button>
    </div>
  )
}

export default Dialog;