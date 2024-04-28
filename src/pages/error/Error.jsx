import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="flex items-center h-full sm:p-16 bg-base-100 min-h-screen">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <img className="w-96" src="https://imgur.com/khPyFRT.png" alt="" />
        <p className="text-3xl">Looks like you lost</p>
        <Link to="/" className="px-8 py-3 font-semibold rounded btn">
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default Error;
