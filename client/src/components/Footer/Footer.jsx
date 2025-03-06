import "./Footer.css"

function Footer() {
  return (
    <>
        <footer>
            <div className="container footer">
                <p>&copy; Copyright || All Right Reserve {new Date().getFullYear()}</p>
            </div>
        </footer>
    </>
  )
}

export default Footer
