const SignIn = () => {
  const handleLogin = () => {};
  return (
    <div className="md:mx-[20%] lg:mx-[30%] sm:mx-16 p-10 self-center">
      <h1 className="font-bold text-center border-pink-700 p-4 text-pink-700 text-lg uppercase">
        Sign In
      </h1>
      <form className="flex flex-col gap-8  focus:outline-none justify-center">
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="border-b-2 border-pink-700 focus:outline-none"
        />
        <input
          id="password"
          type="text"
          placeholder="Enter your password"
          className="border-b-2 border-pink-700 focus:outline-none"
        />
      </form>
      <button
        className="font-bold border-2 uppercase px-[16px] w-full mt-10 py-[8px] bg-white rounded-md text-pink-700 border-pink-700  hover:bg-pink-50  transition-all hover:text-pink-900"
        onClick={handleLogin}
      >
        login
      </button>
      <button
        className="font-bold border-2 uppercase px-[16px] w-full mt-5 py-[8px] bg-red-700 rounded-md text-white border-pink-700  hover:bg-pink-50  transition-all hover:text-pink-900"
        onClick={handleLogin}
      >
        continue with google
      </button>
    </div>
  );
};

export default SignIn;
