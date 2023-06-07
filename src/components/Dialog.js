function Dialog({handleClose}) {
  return (
    <div className="dialog">
        <h2>Share your experience</h2>
        <p>Thanks for the Feedback !</p>
        <button 
            className="close-btn" 
            onClick={handleClose}>Close</button>
    </div>
  )
}

export default Dialog;