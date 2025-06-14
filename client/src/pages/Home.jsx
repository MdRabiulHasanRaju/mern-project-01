import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
export const Home = () => {
  useEffect(() => {
    document.title = "Home | Macro School";
    const meta = document.querySelector("meta[name='description']");
    if (meta) meta.setAttribute("content", "This is the Home of Macro School.");
  }, []);

  return (
    <>
      <Helmet>
        <title>Registration | Macro School</title>
        <meta
          name="description"
          content="This is the Registration of Macro School."
        />
      </Helmet>
      <div className="container">
        <div className="row">
          <h1>This is home page</h1>
        </div>
      </div>
    </>
  );
};
