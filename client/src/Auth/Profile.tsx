
import {

  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaEdit
} from "react-icons/fa";


function Profile() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Profile */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">

          {/* Heading */}
          <div className="mb-8">
            <p className="font-plex text-sm font-semibold uppercase tracking-wider text-primary">
              Account
            </p>

            <h1 className="mt-2 font-share text-3xl font-bold text-gray-900">
              My Profile
            </h1>

            <p className="mt-2 font-plex text-gray-500">
              Manage your Sauti Push account information.
            </p>
          </div>

          {/* Profile Card */}
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

            {/* Profile Header */}
            <div className="border-b border-gray-100 p-8">
              <div className="flex flex-col items-center gap-5 sm:flex-row">

                {/* Avatar */}
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-white">
                  <FaUser className="text-3xl" />
                </div>

                <div className="text-center sm:text-left">
                  <h2 className="font-share text-2xl font-bold text-gray-900">
                    John Doe
                  </h2>

                  <p className="mt-1 font-plex text-gray-500">
                    Sauti Push Member
                  </p>
                </div>

              </div>
            </div>

            {/* Information */}
            <div className="p-8">

              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-share text-lg font-bold text-gray-900">
                  Personal Information
                </h3>

                <button className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                  <FaEdit />
                  Edit
                </button>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">

                {/* Name */}
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-400">
                    <FaUser />
                    Full Name
                  </div>

                  <p className="font-plex font-medium text-gray-900">
                    John Doe
                  </p>
                </div>

                {/* Email */}
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-400">
                    <FaEnvelope />
                    Email Address
                  </div>

                  <p className="font-plex font-medium text-gray-900">
                    john@example.com
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-400">
                    <FaPhone />
                    Phone Number
                  </div>

                  <p className="font-plex font-medium text-gray-900">
                    +256 700 000 000
                  </p>
                </div>

                {/* Company */}
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-400">
                    <FaBuilding />
                    Organization
                  </div>

                  <p className="font-plex font-medium text-gray-900">
                    Sauti Push
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Account Status */}
          <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <h3 className="font-share font-bold text-gray-900">
                  Account Status
                </h3>

                <p className="mt-1 font-plex text-sm text-gray-500">
                  Your Sauti Push account is active.
                </p>
              </div>

              <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-600">
                Active
              </span>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Profile;
