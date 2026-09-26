
import {
  FaUsers,
  FaPlus,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";

const teams = [
  {
    name: "Operations",
    description: "Coordinate daily operations and field teams.",
    members: 12,
    status: "Active",
  },
  {
    name: "Security",
    description: "Security and emergency communication.",
    members: 8,
    status: "Active",
  },
  {
    name: "Transport",
    description: "Connect drivers and transport teams.",
    members: 6,
    status: "Active",
  },
];

function Teams() {
  return (
    <main className="space-y-8">

      {/* Header */}
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-primary">
            Communication
          </p>

          <h1 className="mt-1 font-roboto text-2xl font-bold text-gray-900">
            Teams
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your Sauti Push teams and members.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90">
          <FaPlus />
          Create Team
        </button>
      </header>

      {/* Search */}
      <div className="relative max-w-md">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400" />

        <input
          type="text"
          placeholder="Search teams..."
          className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-primary"
        />
      </div>

      {/* Teams */}
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {teams.map((team) => (
          <TeamCard
            key={team.name}
            team={team}
          />
        ))}
      </section>

    </main>
  );
}

function TeamCard({ team }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 transition hover:border-gray-200 hover:shadow-sm">

      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
          <FaUsers className="text-primary" />
        </div>

        <span className="flex items-center gap-2 text-xs font-medium text-green-600">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          {team.status}
        </span>
      </div>

      <h2 className="mt-5 font-roboto text-lg font-semibold text-gray-900">
        {team.name}
      </h2>

      <p className="mt-2 min-h-10 text-sm leading-5 text-gray-500">
        {team.description}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FaUsers className="text-xs" />
          {team.members} members
        </div>

        <button className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
          View
          <FaArrowRight className="text-xs" />
        </button>
      </div>

    </div>
  );
}

export default Teams;

