import { useState } from "react";
import { json, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // handling input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  // submitting form information
  const handleRegistration = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000";
    const { username, email, password } = formData;
    if (
      username === undefined ||
      email === undefined ||
      password === undefined
    ) {
      setError("*All filled required");
      return false;
    }
    setLoading(true);
    try {
      // sending post request
      const res = await fetch(`${url}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok === false) {
        setLoading(false);
        setError(data.message);
        setLoading(false);
        return false;
      }

      setLoading(false);
      setError(null);
      navigate("/signin");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="md:mx-[20%] lg:mx-[30%] sm:mx-16 p-10 self-center">
      <h1 className="font-bold text-center border-pink-700 p-4 text-pink-700 text-lg uppercase">
        Registration
      </h1>
      <form className="flex flex-col gap-8  focus:outline-none justify-center">
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          className="border-b-2 border-pink-700 focus:outline-none"
          onChange={handleChange}
          required
        />
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="border-b-2 border-pink-700 focus:outline-none"
          onChange={handleChange}
          required
        />
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          className="border-b-2 border-pink-700 focus:outline-none"
          onChange={handleChange}
          required
          autoComplete="current-passoword"
        />
        {error ? <span className="text-red-500">{error}</span> : ""}
      </form>
      <button
        disabled={loading}
        className="font-bold border-2 uppercase px-[16px] w-full mt-10 py-[8px] bg-white rounded-md text-pink-700 border-pink-700  hover:bg-pink-50  transition-all hover:text-pink-900"
        onClick={handleRegistration}
      >
        {loading ? "Registration in progress" : "Sign Up"}
      </button>
      <button className="font-bold border-2 uppercase px-[16px] w-full mt-5 py-[8px] bg-red-700 rounded-md text-white border-pink-700  hover:bg-pink-50  transition-all hover:text-pink-900">
        Sign up with google
      </button>
    </div>
  );
};

export default Register;
