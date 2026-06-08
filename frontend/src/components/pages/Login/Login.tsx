import React, { useState } from "react";
import NavHeader from "../../ui/NavBar";
import perroLog from "./../../../assets/images/perroLog.png";

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const [user, setUser] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(user);
  };

  return (
    <>
      <NavHeader logo="WAG!" options={[]} />

      <section className="min-h-[calc(100vh-80px)] flex">
        {/* LEFT SIDE */}
        <div className="flex-2 bg-(--blue-color)">
          <div className="text-black flex flex-col items-center justify-center my-10">
            <h2 className="text-4xl font-bold mb-4">LOG IN</h2>

            <p className="text-lg opacity-90 m-1">
              Log in now to comment, rate and enjoy everything Wag! got for you!
            </p>

            <p className="text-lg opacity-90 mt-1">
              We are the pet friendly web that cares about your dog as much as
              you do!
            </p>
          </div>

          <img
            src={perroLog}
            alt="Cat"
            className="block w-[461px] max-w-none"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-3 bg-(--blue-color) flex flex-col items-center justify-center">
          <div>
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold text-gray-800">WAG!</h1>

              <p className="text-gray-500 mt-2">Sign in to your account</p>
            </div>

            <div className="rounded-3xl p-8 bg-(--primary-color) min-w-[500px]">
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        email: e.target.value,
                      })
                    }
                    className="px-4 py-3 border rounded-xl bg-white"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">
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
                </div>

                <div className="text-right">
                  <button
                    type="button"
                    className="text-(--blue-color) text-sm font-medium hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="bg-(--blue-color) text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
                >
                  Sign In
                </button>

                <p className="text-center text-gray-600 mt-4">
                  Don't have an account?{" "}
                  <span className="text-(--blue-color) font-semibold cursor-pointer hover:underline">
                    Create one now!
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
