import React, { useState } from "react";
import NavHeader from "../../ui/NavBar";
import gatoSign from "./../../../assets/images/gatoSign.png"; // tu imagen

interface UserForm {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const [user, setUser] = useState<UserForm>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(user);
  };

  return (
    <div>
      <NavHeader logo="WAG!" options={[]} />

      <div className= "flex justify-center bg-(--orange-color) pt-2">

      
      <section className="min-h-[calc(100vh-80px)] flex w-300 ">


        
        {/* LEFT SIDE */}

        <div className="flex-2 bg-(--orange-color)">
          <div className="text-[var(--dark-color)] flex flex-col pr-60 my-10 ">
            <h2 className="text-4xl font-extrabold mb-4 text-[var(--dark-color)]">
              SIGN IN
            </h2>

            <p className="text-2xl opacity-90 m-1 text-[var(--dark-color)]  mb-10 font-medium">
              Sign in now to comment, rate and discover everything{" "}
              <span className="font-bold">WAG!</span> got for you!
            </p>

            <p className="text-2xl opacity-90 mt-1 text-[var(--dark-color)] font-medium">
              We are the pet friendly web that cares about your pet as much as
              you do!
            </p>
          </div>

          <img
            src={gatoSign}
            alt="Cat"
            className="block w-[780px] max-w-none mx-auto pr-40"
          />
        </div>



        {/* RIGHT SIDE */}
        <div className="flex-3 bg-(--orange-color) flex flex-col items-center justify-center ">
          <div >
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-extrabold text-[var(--dark-color)] ">
                WAG!
              </h1>

              <p className="text-[var(--dark-color)]  mt-2">Create your account</p>
            </div>

            <div className="rounded-3xl p-8 bg-(--primary-color)">
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[var(--dark-color)]">
                    Name
                  </label>

                  <input
                    type="text"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    className="px-4 py-3 border rounded-xl bg-white"
                  />
                </div>

                <label className="text-sm font-medium text-[var(--dark-color)]">
                  Email
                </label>

                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="px-4 py-3 border rounded-xl bg-white"
                />
                <label className="text-sm font-medium text-[var(--dark-color)]">
                  Phone
                </label>
                <input
                  type="text"
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  className="px-4 py-3 border rounded-xl bg-white"
                />
                <label className="text-sm font-medium text-[var(--dark-color)]">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={user.password}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        password: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border rounded-xl bg-white"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    👁️
                  </button>
                </div>

                <label className="text-sm font-medium text-[var(--dark-color)]">
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={user.confirmPassword}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border rounded-xl bg-white"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    👁️
                  </button>
                </div>

                <button
                  type="submit"
                  className="bg-(--bright-orange) text-[var(--main-color)] py-3 rounded-4xl font-semibold hover:opacity-90 transition"
                >
                  Register
                </button>

                <p className="text-center text-[var(--dark-color)] mt-4">
                  Already have an account?{" "}
                  <span className="text-[var(--bright-blue)] font-semibold cursor-pointer hover:underline">
                    Log into it now!
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
