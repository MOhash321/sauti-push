
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaLock,
  FaVolumeUp,
} from "react-icons/fa";
import { FaWalkieTalkie } from "react-icons/fa6";
import { Link } from "react-router-dom";

import SignUpPhoto from "../assets/signup.jpg";

const benefits = [
  "Create your Sauti Push account",
  "Connect your team in one place",
  "Manage communication channels",
  "Get started with push-to-talk",
];

function SignUp() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Form Side */}
        <section className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">

            {/* Logo */}
            <Link to="/" className="mb-10 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <FaWalkieTalkie className="text-lg text-white" />
              </div>

              <span className="text-2xl font-bold">
                Sauti<span className="text-primary">Push</span>
              </span>
            </Link>

            {/* Heading */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Get Started
              </p>

              <h1 className="mt-2 text-3xl font-bold md:text-4xl">
                Create your account
              </h1>

              <p className="mt-3 text-gray-600">
                Start connecting your team with Sauti Push.
              </p>
            </div>

            {/* Form */}
            <form className="mt-8 space-y-5">

              {/* First Name + Last Name */}
              <div className="grid gap-5 sm:grid-cols-2">

                {/* First Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                   Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              {/* Company */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Company
                </label>

                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-primary"
                />

                <span>
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="font-medium text-primary hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="font-medium text-primary hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-90"
              >
                Create Account
              </button>

            </form>

            {/* Login */}
            <p className="mt-7 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-primary hover:underline"
              >
                Sign in
              </Link>
            </p>

          </div>
        </section>

        {/* Image Side */}
        <section className="relative hidden min-h-screen overflow-hidden bg-gray-950 lg:block">

          {/* Image */}
          <img
            src={SignUpPhoto}
            alt="Sauti Push team communication"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gray-950/65" />

          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

          {/* Content */}
          <div className="relative flex min-h-screen items-end px-10 py-12 xl:px-16">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-lg text-white"
            >

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 backdrop-blur-sm">
                <FaVolumeUp className="text-2xl text-primary" />
              </div>

              <h2 className="mt-7 text-4xl font-bold leading-tight xl:text-5xl">
                Communication that keeps your team moving.
              </h2>

              <p className="mt-5 leading-7 text-gray-300">
                Sauti Push helps organizations connect employees,
                supervisors, dispatchers, and field teams through fast,
                reliable push-to-talk communication.
              </p>

              {/* Benefits */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3"
                  >
                    <FaCheckCircle className="shrink-0 text-primary" />

                    <span className="text-sm text-gray-200">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Card */}
              <div className="mt-10 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-md">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <FaLock className="text-primary" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Built for organizations
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    Manage your team's communication from one platform.
                  </p>
                </div>

              </div>

            </motion.div>

          </div>

        </section>

      </div>
    </main>
  );
}

export default SignUp;
