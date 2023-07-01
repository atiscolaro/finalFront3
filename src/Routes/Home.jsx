import { useEffect, useState } from 'react'
import { getUsers } from '../Service/api';
import Card from '../Components/Card'
import styles from '../styles/home.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [users,setUsers] = useState([]);

  const fetchData = async () => {
    const { data } = await getUsers();
    setUsers(data);
  }

  useEffect(()=>{
    fetchData()
  },[]);
 
  console.log(users)  

  return (
    <main className={styles.home} >
      <h1 className={styles.h1_home}>Home</h1>
      <div className={styles.card_grid}>
        {
          users.map((elem)=>{
           return(
             <Card 
              key={elem.id}
              name={elem.name} 
              username={elem.username} 
              id={elem.id}  />
           )
          })
        }
      </div>
    </main>
  )
}

export default Home