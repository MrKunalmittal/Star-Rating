import { FaStar } from "react-icons/fa";


const Star = ({ selected = false, onClick = () => {} }) => {
    return (
      <FaStar 
        color={selected ? 'gold' : 'gray'}
        onClick={onClick}
        /> 
    );
  };
  
  export default Star