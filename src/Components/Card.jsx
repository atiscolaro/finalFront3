import { Link } from "react-router-dom";
import img from "../images/doctor.jpg"
import styles from '../styles/card.module.css'

const Card = ({id, username, name}) => {

  const odontologo = { 
    id,
    name,
    username,
  }

  const addFav = ()=>{
    const favoritos = JSON.parse(localStorage.getItem('odontologos') || '[]')

    const existingDentist = favoritos.find((d) => d.id === odontologo.id);
    if (existingDentist) {
      alert(`odontologo ${odontologo.name} ya esta en favoritos`)
    }else{
      favoritos.push(odontologo)
    }
    localStorage.setItem('odontologos',JSON.stringify(favoritos))
  }
  console.log('agregando un odontologo' + ' ' + odontologo.id);

  return (
    <div className={styles.card}>
        <img src={img} alt="imagen-doctor" />
        <h2><Link to={`/${id}`}>{name}</Link></h2>
        <h3>usuario: {username}</h3>
        <button onClick={addFav} className={styles.favButton}>Añadir a favoritos </button>
    </div>
  );
};

export default Card;
