
import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import {
  HiUsers,
  HiPlus,
  HiEllipsisVertical,
  HiArrowRight,
  HiRadio,
} from "react-icons/hi2";

const teams = [
  {
    id: 1,
    name: "Operations",
    description:
      "Coordinate daily operations and field teams seamlessly.",
    members: 12,
    status: "Active",
  },
  {
    id: 2,
    name: "Security",
    description:
      "Stay connected with the security and response unit.",
    members: 8,
    status: "Active",
  },
  {
    id: 3,
    name: "Transport",
    description:
      "Manage active drivers and transportation networks.",
    members: 6,
    status: "Active",
  },
];

const summaryItems = [
  {
    label: "Teams",
    icon: HiUsers,
    getValue: (teams) => teams.length,
  },
  {
    label: "Members",
    icon: HiUsers,
    getValue: (_, totalMembers) => totalMembers,
  },
  {
    label: "Active",
    icon: HiRadio,
    getValue: (_, __, activeTeams) => activeTeams,
  },
];

function Teams() {
  const [search, setSearch] = useState("");

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalMembers = teams.reduce(
    (total, team) => total + team.members,
    0
  );

  const activeTeams = teams.filter(
    (team) => team.status === "Active"
  ).length;

  return (
    <section className="w-full space-y-8">

      {/* Header */}
      <header className="flex flex-col gap-5 border-b border-gray-200 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">
            Team Management
          </p>

          <h1 className="mt-1 font-plex text-3xl font-bold tracking-tight text-gray-900">
            Teams
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-gray-500">
            Manage teams, members, and communication groups from
            one place.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
        >
          <HiPlus className="h-5 w-5" />
          Create Team
        </button>
      </header>

      {/* Summary */}
      <div className="grid gap-4 sm:grid-cols-3">
        {summaryItems.map((item, index) => {
          const Icon = item.icon;

          const value = item.getValue(
            teams,
            totalMembers,
            activeTeams
          );

          return (
            <div
              key={item.label}
              className="border border-gray-200 bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    {item.label}
                  </p>

                  <div className="mt-0.5 flex items-center gap-2">
                    <p className="text-2xl font-bold text-gray-900">
                      {value}
                    </p>

                    {index === 2 && (
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Teams Section */}
      <section>

        {/* Section Header */}
        <div className="flex flex-col gap-4 border-b border-gray-200 pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Your Teams
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Select a team to manage its communication and members.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <HiSearch className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search teams"
              className="h-10 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>
        </div>

        {/* Team Directory */}
        <div className="mt-5 overflow-hidden border border-gray-200 bg-white">

          {/* Table Header */}
          <div className="hidden border-b border-gray-100 bg-tertiary px-6 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 md:grid md:grid-cols-12">
            <div className="col-span-5">
              Team
            </div>

            <div className="col-span-2">
              Members
            </div>

            <div className="col-span-2">
              Status
            </div>

            <div className="col-span-3 text-right">
              Action
            </div>
          </div>

          {/* Teams */}
          {filteredTeams.length > 0 ? (
            <div>
              {filteredTeams.map((team) => (
                <TeamRow
                  key={team.id}
                  team={team}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              search={search}
              clearSearch={() => setSearch("")}
            />
          )}
        </div>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
          <span>
            Showing {filteredTeams.length} of {teams.length} teams
          </span>

          <span className="hidden sm:block">
            Sauti Push Team Management
          </span>
        </div>
      </section>
    </section>
  );
}

/* -------------------------------- */
/* Team Row */
/* -------------------------------- */

function TeamRow({ team }) {
  return (
    <div className="group border-b border-gray-100 px-5 py-5 last:border-0 transition hover:bg-tertiary/40 md:px-6">
      <div className="grid items-center gap-4 md:grid-cols-12">

        {/* Team */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary">
              <HiUsers className="h-5 w-5 text-primary" />
            </div>

            <div className="min-w-0">
              <h3 className="font-semibold text-gray-900">
                {team.name}
              </h3>

              <p className="mt-0.5 truncate text-sm text-gray-500">
                {team.description}
              </p>
            </div>

          </div>
        </div>

        {/* Members */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <HiUsers className="h-4 w-4 text-primary" />

            <span>
              {team.members} members
            </span>
          </div>
        </div>

        {/* Status */}
        <div className="md:col-span-2">
          <StatusBadge status={team.status} />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between md:col-span-3 md:justify-end md:gap-2">

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-primary transition hover:bg-secondary"
          >
            View Team

            <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            aria-label={`More options for ${team.name}`}
            className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
          >
            <HiEllipsisVertical className="h-5 w-5" />
          </button>

        </div>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* Status Badge */
/* -------------------------------- */

function StatusBadge({ status }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
      {status}
    </span>
  );
}

/* -------------------------------- */
/* Empty State */
/* -------------------------------- */

function EmptyState({ search, clearSearch }) {
  return (
    <div className="px-6 py-16 text-center">

      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-tertiary">
        <HiSearch className="h-5 w-5 text-primary" />
      </div>

      <h3 className="mt-4 font-semibold text-gray-900">
        No teams found
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        No team matches "{search}".
      </p>

      <button
        type="button"
        onClick={clearSearch}
        className="mt-4 text-sm font-semibold text-primary hover:underline"
      >
        Clear search
      </button>

    </div>
  );
}

export default Teams;

