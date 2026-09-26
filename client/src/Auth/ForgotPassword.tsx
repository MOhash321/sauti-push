
import { Link } from "react-router-dom";


import Button  from "../Components/UI/Button";
import { FaWalkieTalkie } from "react-icons/fa6";

function ForgotPassword() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md">

        {/* Logo */}
        <Link
          to="/"
          className="mb-8 flex items-center justify-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <FaWalkieTalkie className="text-lg text-white" />
          </div>

          <span className="font-share text-xl font-bold text-primary">
            Sauti Push
          </span>
        </Link>

        {/* Card */}
        <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">

          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="font-roboto text-2xl font-bold text-gray-900">
              Forgot Your Password?
            </h1>

            <p className="mt-2 font-roboto text-sm text-gray-500">
              Enter your email address and we'll send you a link to reset
              your password.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </form>

          {/* Back to Sign In */}
          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="text-sm font-medium text-primary hover:underline"
            >
              ← Back to Sign In
            </Link>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Sauti Push. All rights reserved.
        </p>
      </div>
    </main>
  );
}

export default ForgotPassword;