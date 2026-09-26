
import { Link } from "react-router-dom";
import  Button  from "../Components/UI/Button";
import { BiRadio, BiVolume, BiWifi } from "react-icons/bi";
import { GiRadioTower } from "react-icons/gi";
import { TbMessageCirclePin } from "react-icons/tb";
import { FaWalkieTalkie } from "react-icons/fa6";

function SignIn() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-50 px-6">

      {/* Background Icons */}
      <BiRadio className="pointer-events-none absolute left-10 top-20 h-24 w-24 rotate-12 text-primary/5" />

      <BiWifi className="pointer-events-none absolute right-16 top-32 h-28 w-28 -rotate-12 text-primary/5" />

      <GiRadioTower className="pointer-events-none absolute bottom-20 left-16 h-28 w-28 -rotate-6 text-primary/5" />

      <TbMessageCirclePin className="pointer-events-none absolute bottom-32 right-20 h-24 w-24 rotate-12 text-primary/5" />

      <BiVolume className="pointer-events-none absolute left-1/2 top-12 h-20 w-20 -translate-x-1/2 text-primary/5" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">

        {/* Logo */}
        <Link
          to="/"
          className="mb-8 flex items-center justify-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <FaWalkieTalkie className="text-lg text-white" />
          </div>

          <span className="font-share text-2xl font-bold text-primary">
            Sauti Push
          </span>
        </Link>

        {/* Card */}
        <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">

          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Sign in to your Sauti Push account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>

                <Link
                  to="/forgot-pass"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            {/* Remember */}
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300"
              />

              Remember me
            </label>

            {/* Button */}
            <Button
              type="submit"
              className="w-full rounded-xl"
              to="/login"
            >
              Sign in
            </Button>
          </form>

          {/* Create Account */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-primary hover:underline"
            >
              Create account
            </Link>
          </p>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-400">
          © 2026 Sauti Push. All rights reserved.
        </p>

      </div>
    </main>
  );
}
export default SignIn;
