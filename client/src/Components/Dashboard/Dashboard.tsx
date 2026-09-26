
import {
  FaUsers,
  FaRadio,
  FaComments,
  FaWalkieTalkie,
  FaArrowRight,
} from "react-icons/fa6";

import Sidebar from "../UI/Sidebar";

const stats = [
  {
    label: "Team Members",
    value: "24",
    icon: FaUsers,
  },
  {
    label: "Active Channels",
    value: "8",
    icon: FaRadio,
  },
  {
    label: "Messages",
    value: "156",
    icon: FaComments,
  },
  {
    label: "Online",
    value: "12",
    icon: FaWalkieTalkie,
  },
];

const teams = [
  {
    name: "Operations",
    members: 12,
    status: "Active",
  },
  {
    name: "Security",
    members: 8,
    status: "Active",
  },
  {
    name: "Transport",
    members: 6,
    status: "Active",
  },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />

      <main className="ml-64 space-y-8 p-8">

        {/* Header */}
        <header>
          <h1 className="font-roboto text-2xl font-bold text-gray-900">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Here's what's happening with your teams today.
          </p>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-2 rounded-2xl border border-gray-100 bg-white lg:grid-cols-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-4 border-r border-gray-100 p-5 last:border-r-0"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="text-primary" />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  {label}
                </p>

                <p className="mt-1 text-xl font-semibold text-gray-900">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Main Content */}
        <section className="grid gap-6 lg:grid-cols-3">

          {/* Teams */}
          <div className="rounded-2xl border border-gray-100 bg-white lg:col-span-2">

            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <div>
                <h2 className="font-roboto font-semibold text-gray-900">
                  Your Teams
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  Teams currently using Sauti Push
                </p>
              </div>

              <button className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                View all
                <FaArrowRight className="text-xs" />
              </button>
            </div>

            <div className="divide-y divide-gray-100">
              {teams.map((team) => (
                <div
                  key={team.name}
                  className="flex items-center justify-between px-6 py-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                      <FaUsers className="text-gray-600" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {team.name}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {team.members} members
                      </p>
                    </div>
                  </div>

                  <span className="flex items-center gap-2 text-xs font-medium text-green-600">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    {team.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Talk */}
          <div className="rounded-2xl bg-primary p-6 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
              <FaWalkieTalkie />
            </div>

            <h2 className="mt-6 font-roboto text-xl font-semibold">
              Ready to talk?
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/70">
              Connect with your team instantly using push-to-talk.
            </p>

            <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-primary transition hover:bg-gray-100">
              Start Talking
              <FaArrowRight className="text-xs" />
            </button>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="rounded-2xl border border-gray-100 bg-white">

          <div className="border-b border-gray-100 px-6 py-5">
            <h2 className="font-share font-semibold text-gray-900">
              Recent Activity
            </h2>
          </div>

          <div className="divide-y divide-gray-100">
            <Activity
              title="John joined Operations"
              time="10 minutes ago"
            />

            <Activity
              title="Emergency channel was created"
              time="32 minutes ago"
            />

            <Activity
              title="Sarah sent a message"
              time="1 hour ago"
            />
          </div>
        </section>

      </main>
    </div>
  );
}

function Activity({ title, time }) {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-primary" />

        <p className="text-sm text-gray-700">
          {title}
        </p>
      </div>

      <span className="text-xs text-gray-400">
        {time}
      </span>
    </div>
  );
}

export default Dashboard;
