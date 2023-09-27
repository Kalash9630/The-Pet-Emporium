import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const loggedInUser = localStorage.getItem('loggedInUser');
  const history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    history.apply('/'); // Redirect to home or any other page after logout
  };
  return (
    <>
     
    </>
  )
}
export default Navbar