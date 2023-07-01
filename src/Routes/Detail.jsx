import { useEffect, useState } from 'react';
import { getUserDetails } from '../Service/api';
import { useParams } from 'react-router-dom';
import styles from '../styles/detail.module.css'


const Detail = () => {
  const params = useParams();
  const [userDetails, setUserDetails] = useState([]);

  const obtenerDetalles = async () => {
    const { data } = await getUserDetails(params.id)
    setUserDetails(data);
  }
  useEffect(() => {
    obtenerDetalles()
  }, [params.id])

  console.log('ati', userDetails);


  return (
    <>
      <h1 style={{ marginTop: '2rem', fontSize:'2rem' }}>Detalles del odontologo</h1>
      <div className={styles.card_detail}>
        <p ><span style={{fontWeight:'bold'}}>Id: </span>{userDetails.id} </p>
        <p><span style={{fontWeight:'bold'}}>Nombre: </span> {userDetails.name}</p>
        <p><span style={{fontWeight:'bold'}}>Email: </span>  {userDetails.email}</p>
      </div>
    </>
  )
}

export default Detail