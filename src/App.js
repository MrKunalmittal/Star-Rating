import Dialog from "./components/Dialog";
import StarRating from "./components/StarRating";
import {useState} from 'react';
import './style/index.css';

function App() {
  const [isOpen,setDialogOpen] = useState(false);

  const handleDialogOpen = () =>{
    setDialogOpen(true);
  };

  const handleDialogClose = () =>{
    setDialogOpen(false);
  };

  return (
    <div className="container">
      <StarRating />
      <button className="dialog-open" onClick={handleDialogOpen}>Feedback</button>
      {isOpen && <Dialog handleClose={handleDialogClose}/> }
    </div>
  );
}

export default App;
