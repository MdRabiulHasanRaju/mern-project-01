import { useState } from "react"
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [user, setUser] = useState({
        email: "",
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

    const {storeToken} = useAuth();
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        // console.log(user)

        try {
          const response = await fetch(`http://localhost:8080/api/auth/login`,{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
          })
          if(response.ok){
            let res_data = await response.json();
            console.log(res_data)
            alert("Login Successful")
            storeToken(res_data.token)
            navigate("/dashboard")

          }else{
            alert("invalid credentials")
          }
        } catch (error) {
          console.log(error)
        }

        
    }

    

  return (
    <>
      <section className="registration">
        <div className="container registration-container">
          <div className="reg-left">
            <img
              src="/images/login.webp"
              width={400}
              height={400}
              alt="registration-image"
            />
          </div>
          <div className="reg-right">
            <h1>Login to Your Account</h1>
            <form onSubmit={handleFormSubmit}>
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
                  value="Login"
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
