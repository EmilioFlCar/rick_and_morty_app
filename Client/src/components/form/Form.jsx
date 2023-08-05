import { useState } from "react"
import { validate } from "./validation"
import styles from './Form.modules.css'

export default function Form(props){
    console.log(props)
    const [userData, setUserData] = useState({
        email: "",
        password: ""
     })
     const [errors, setErrors] = useState({})

     const handleChange = (event) => {
        setUserData({...userData,[event.target.name]: event.target.value})
        setErrors(
            validate({
               ...userData,
               [event.target.name]: event.target.value,
            })
         );
     }

     const handleSubmit = (event) => {
        event.preventDefault()
        props.login(userData)
     }


    return(
        <div>
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <br />
                <label>Email: </label>
                <input type="text" name="email" value={userData.email} onChange={handleChange} className={errors.email && 'warning'}/>
                <p className='danger'>{errors.email}</p>

                <label htmlFor="">Password: </label>
                <input type="password" name="password" value={userData.password} onChange={handleChange} className={errors.password && 'warning'}/>
                <p className='danger'>{errors.password}</p>

                <button onClick={handleSubmit}>LOGIN</button>
            </form>
        </div>
        </div>

    )
}