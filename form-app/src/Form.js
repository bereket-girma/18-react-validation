// import React, { useState } from "react"
// import validator from 'validator'
// import './App.css';
// import FinalResult from './FinalResult'
 

// export default function MyForm(props) {
//     const [textError, setTextError] = useState('')
//     const [pwError, setPwError] = useState('')
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [user, userName] = useState('')
//     const [password, setPassword] = useState('')
//     const [confirm, setConfirm] = useState('')
//     const [website, setWebsite] = useState('')
//     function handleSubmit(e) {
//         e.preventDefault()
//         let canSubmit = true 
//         if (name === '') {
//             setTextError('Field connot be blank.')
//             canSubmit = false
//         } else {
//             setTextError('')
//         }
//         if (email === '') {
//             setTextError('Field connot be blank.')
//             canSubmit = false
//         } else {
//             setTextError('')
//         }
//         if (user === '') {
//             setTextError('Field connot be blank.')
//             canSubmit = false
//         } else {
//             setTextError('')
//         }
//         if (password !== confirm) {
//             setPwError('Passwords must Match.')
//             canSubmit = false
//         } else {
//             setTextError('')
//         }
//         if (website === '') {
//             setTextError('Field connot be blank.')
//             canSubmit = false

//         } else {
//             setTextError('')
//         }
//         if (canSubmit) {
//             props.history.push('/result')
//             validator.isEmail(email)
//             validator.isURL(website)
//         }
//     }
    


//     return (
//         <form className="form" onSubmit={handleSubmit}>
//             <h1>Profile Form - All fields required</h1>
//             <fieldset>
//                 <label 
//                 className={textError ? 'error' : ''}
//                 htmlFor="name">Name {textError ? textError : null}</label><br></br>
//                 <input 
//                 className={textError ? 'inputError' : ''}
//                 id="name" 
//                 type="text" 
//                 onChange={(e) => setName(e.target.value)}/>
//             </fieldset>
//             <fieldset>
//                 <label 
//                 className={textError ? 'error' : ''}
//                 htmlFor="Email">Email {textError ? textError : null}</label><br></br>
//                 <input 
//                 className={textError ? 'inputError' : ''}
//                 id="Email" 
//                 type="email" 
//                 onChange={(e) => setEmail(e.target.value)}/>
//             </fieldset>
//             <fieldset>
//                 <label 
//                 className={textError ? 'error' : ''}
//                 htmlFor="Username">Username {textError ? textError : null}</label><br></br>
//                 <input 
//                 className={textError ? 'inputError' : ''}
//                 id="Username" 
//                 type="text" 
//                 onChange={(e) => userName(e.target.value)}/>
//             </fieldset>
//             <fieldset>
//                 <label 
//                 className={textError ? 'error' : ''}
//                 htmlFor="password">Password {textError ? textError : null}</label><br></br>
//                 <input 
//                 className={textError ? 'inputError' : ''}
//                 id="password" 
//                 type="password" 
//                 onChange={(e) => setPassword(e.target.value)}/>
//             </fieldset>
//             <fieldset>
//                 <label 
//                 className={textError ? 'error' : ''}
//                 htmlFor="confirmPassword">Confirm Password {textError ? textError : null}</label><br></br>
//                 <input 
//                 className={textError ? 'inputError' : ''}
//                 id="confirmPassword" 
//                 type="password" 
//                 onChange={(e) => setConfirm(e.target.value)}/>
//             </fieldset>
//             <fieldset>
//                 <label 
//                 className={textError ? 'error' : ''}
//                 htmlFor="website">Website - Please enter a valid url {textError ? textError : null}</label><br></br>
//                 <input 
//                 className={textError ? 'inputError' : ''}
//                 id="website" 
//                 type="url" 
//                 onChange={(e) => setWebsite(e.target.value)}/>
//             </fieldset>
//             <button className="button">Submit</button>
//         </form>
//     )
// }