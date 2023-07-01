import Card from "../Components/Card";
import styles from  '../styles/favs.module.css'

const Favs = () => {
  let odontologo = JSON.parse(localStorage.getItem("odontologos"));

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={styles.card_grid}>
      {odontologo.map(item => (
          <Card name={item.name} username={item.username} key={item.id} id={item.id}/>
        ))} 
      </div>
    </>
  );
};

export default Favs;
