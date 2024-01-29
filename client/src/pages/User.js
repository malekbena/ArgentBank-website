import { useSelector } from "react-redux"
import Button from "../components/Button"

const User = () => {
  const user = useSelector(state => state.user)

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />
          {user.profile.firstName} {user.profile.lastName}!
        </h1>
        <Button className={'edit-button'} text='Edit Name' />
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
        <Button className={'classic-button transaction-button'} text='View transactions' />
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
        <Button className={'classic-button transaction-button'} text='View transactions' />
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
        <Button className={'classic-button transaction-button'} text='View transactions' />
        </div>
      </section>
    </main>
  )
}

export default User