
import { Link } from "react-router-dom";
import { FaWalkieTalkie } from "react-icons/fa6";

import  Button from "../Components/UI/Button";

function OTP() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-50 px-6">

      {/* Background Icons */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <FaWalkieTalkie className="absolute left-10 top-20 text-6xl text-primary/5" />
        <FaWalkieTalkie className="absolute right-20 top-32 text-8xl text-primary/5" />
        <FaWalkieTalkie className="absolute bottom-20 left-1/4 text-7xl text-primary/5" />
        <FaWalkieTalkie className="absolute bottom-10 right-1/4 text-5xl text-primary/5" />
      </div>

      <div className="relative w-full max-w-md">

        {/* Logo */}
        <Link
          to="/"
          className="mb-8 flex items-center justify-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <FaWalkieTalkie className="text-lg text-white" />
          </div>

          <span className="font-share text-xl font-bold tracking-tight text-primary">
            Sauti Push
          </span>
        </Link>

        {/* Card */}
        <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">

          <div className="mb-8 text-center">
            <h1 className="font-share text-2xl font-bold text-gray-900">
              Verify your account
            </h1>

            <p className="mt-2 font-plex text-sm text-gray-500">
              Enter the verification code we sent to your email or phone.
            </p>
          </div>

          {/* OTP Inputs */}
          <div className="mb-6 flex justify-center gap-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <input
                key={item}
                type="text"
                maxLength="1"
                className="h-12 w-11 rounded-xl border border-gray-200 text-center text-lg font-semibold text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            ))}
          </div>

          {/* Verify */}
          <Button
            type="submit"
            size="lg"
            className="w-full"
            to='/otp'
          >
            Verify Code
          </Button>

          {/* Resend */}
          <p className="mt-6 text-center font-plex text-sm text-gray-500">
            Didn't receive the code?{" "}
            <button className="font-semibold text-primary hover:underline">
              Resend code
            </button>
          </p>

        </div>

        {/* Back */}
        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="font-plex text-sm text-gray-500 hover:text-primary"
          >
            ← Back to Sign In
          </Link>
        </div>

      </div>
    </main>
  );
}

export default OTP;
