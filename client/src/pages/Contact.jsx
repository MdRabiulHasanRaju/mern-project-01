export const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container contact-container">

  <form className="colorful-form">
    <h1 style={{textAlign:"center"}}>Contact With Us</h1>
    <div className="form-group">
      <label className="form-label" htmlFor="name">
        Name:
      </label>
      <input
        required=""
        placeholder="Enter your name"
        className="form-input"
        type="text"
      />
    </div>
    <div className="form-group">
      <label className="form-label" htmlFor="email">
        Email:
      </label>
      <input
        required=""
        placeholder="Enter your email"
        className="form-input"
        name="email"
        id="email"
        type="email"
      />
    </div>
    <div className="form-group">
      <label className="form-label" htmlFor="message">
        Message:
      </label>
      <textarea
        required=""
        placeholder="Enter your message"
        className="form-input"
        name="message"
        id="message"
        defaultValue={""}
      />
    </div>
    <button className="form-button" type="submit">
      Submit
    </button>
  </form>


        </div>
      </div>
    </>
  );
};
