import Form from '../Components/Form'
// import { Context } from 'react'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {tema} = useContext(ContextGlobal)
  return (
    <div className='contact' style={{background: tema.contact}}>
      <Form/>
    </div>
  )
}

export default Contact