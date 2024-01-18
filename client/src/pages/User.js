import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../redux/userSlice"
import Axios from "axios"

const User = () => {
  const token = useSelector(state => state.auth.token)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
      Axios.post('http://localhost:3001/api/v1/user/profile', {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(res => {
        dispatch(addUser(res.data.body))
        console.log(res.data.body)
      }).catch(err => {
        console.log(err)
      })
    
  }, [])

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />
        {user.firstName} {user.lastName}!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  )
}

export default User