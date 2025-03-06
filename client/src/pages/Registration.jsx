import { useState } from "react"

export const Registration = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    })

    const handleForm = (e) => {
        let name = e.target.name
        let value = e.target.value

        setUser({
            ...user,
            [name]:value
        })
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(user)
        
    }

  return (
    <>
      <section className="registration">
        <div className="container registration-container">
          <div className="reg-left">
            <img
              src="/images/registration.avif"
              width={400}
              height={400}
              alt="registration-image"
            />
          </div>
          <div className="reg-right">
            <h1>Registration Form</h1>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username: </label>
                <input
                  className="form-control"
                  name="username"
                  type="text"
                  id="username"
                  placeholder="Enter username"
                  value={user.username}
                  onChange={handleForm}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone: </label>
                <input
                  className="form-control"
                  name="phone"
                  type="text"
                  id="phone"
                  placeholder="Enter phone"
                  value={user.phone}
                  onChange={handleForm}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  value={user.email}
                  onChange={handleForm}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input
                  className="form-control"
                  name="password"
                  type="text"
                  id="password"
                  placeholder="Enter password"
                  value={user.password}
                  onChange={handleForm}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control button"
                  name="submit"
                  type="submit"
                  value="Register Now"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
