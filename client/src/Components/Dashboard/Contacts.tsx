import { useMemo, useState } from "react";
import { HiSearch, HiFilter } from "react-icons/hi";
import {
  HiPlus,
  HiUsers,
  HiPhone,
  HiChatBubbleLeftRight,
  HiEllipsisVertical,
  HiArrowUpRight,
  HiCheckCircle,
  HiClock,
  HiShieldCheck,
  HiBuildingOffice2,
  HiRadio
} from "react-icons/hi2";

/* -------------------------------- */
/* Data */
/* -------------------------------- */

const contacts = [
  {
    id: 1,
    name: "John Kamau",
    role: "Operations Manager",
    team: "Operations",
    phone: "+256 700 123 456",
    status: "Online",
    lastActive: "Active now",
    email: "j.kamau@sautipush.com",
    activeChannel: "Channel-Alpha",
    callsToday: 14,
  },
  {
    id: 2,
    name: "Sarah Nakato",
    role: "Security Officer",
    team: "Security",
    phone: "+256 701 234 567",
    status: "Online",
    lastActive: "Active now",
    email: "s.nakato@sautipush.com",
    activeChannel: "Emergency-Sec",
    callsToday: 8,
  },
  {
    id: 3,
    name: "David Okello",
    role: "Transport Coordinator",
    team: "Transport",
    phone: "+256 702 345 678",
    status: "Away",
    lastActive: "8 min ago",
    email: "d.okello@sautipush.com",
    activeChannel: "Logistics-Hub",
    callsToday: 5,
  },
  {
    id: 4,
    name: "Mary Achieng",
    role: "Security Officer",
    team: "Security",
    phone: "+256 703 456 789",
    status: "Offline",
    lastActive: "24 min ago",
    email: "m.achieng@sautipush.com",
    activeChannel: "None",
    callsToday: 2,
  },
  {
    id: 5,
    name: "Brian Mwangi",
    role: "Driver",
    team: "Transport",
    phone: "+256 704 567 890",
    status: "Online",
    lastActive: "Active now",
    email: "b.mwangi@sautipush.com",
    activeChannel: "Fleet-East",
    callsToday: 19,
  },
  {
    id: 6,
    name: "Grace Namusoke",
    role: "Operations Assistant",
    team: "Operations",
    phone: "+256 705 678 901",
    status: "Away",
    lastActive: "12 min ago",
    email: "g.namusoke@sautipush.com",
    activeChannel: "Channel-Alpha",
    callsToday: 7,
  },
];

/* -------------------------------- */
/* Main Component */
/* -------------------------------- */

function Contacts() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [teamFilter, setTeamFilter] = useState("All");

  const filteredContacts = useMemo(() => {
    const query = search.toLowerCase().trim();

    return contacts.filter((contact) => {
      const matchesSearch =
        contact.name.toLowerCase().includes(query) ||
        contact.role.toLowerCase().includes(query) ||
        contact.team.toLowerCase().includes(query) ||
        contact.phone.includes(query);

      const matchesStatus =
        statusFilter === "All" || contact.status === statusFilter;

      const matchesTeam =
        teamFilter === "All" || contact.team === teamFilter;

      return matchesSearch && matchesStatus && matchesTeam;
    });
  }, [search, statusFilter, teamFilter]);

  const stats = useMemo(() => {
    return {
      total: contacts.length,
      online: contacts.filter((c) => c.status === "Online").length,
      away: contacts.filter((c) => c.status === "Away").length,
      offline: contacts.filter((c) => c.status === "Offline").length,
    };
  }, []);

  return (
    <div className="w-full space-y-8 pb-12">
      <ContactsHeader />
      <ContactsStats stats={stats} />
      <ContactsDirectory
        contacts={filteredContacts}
        totalContacts={contacts.length}
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        teamFilter={teamFilter}
        setTeamFilter={setTeamFilter}
      />
    </div>
  );
}

/* -------------------------------- */
/* Header */
/* -------------------------------- */

function ContactsHeader() {
  return (
    <header className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-xs">
      <div>
        <div className="mb-2.5 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 border border-green-200/60">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Live Organization Directory
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
          Team Contacts & Dispatch
        </h1>

        <p className="mt-1.5 max-w-2xl text-sm text-gray-500">
          Monitor real-time availability, manage field staff, and instantly route secure push-to-talk calls across teams.
        </p>
      </div>

      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 focus:ring-4 focus:ring-primary/20"
      >
        <HiPlus className="h-5 w-5" />
        Add New Contact
      </button>
    </header>
  );
}

/* -------------------------------- */
/* Stats */
/* -------------------------------- */

function ContactsStats({ stats }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        label="Total Directory"
        value={stats.total}
        description="Active registered profiles"
        icon={HiUsers}
        trend="+2 this week"
      />
      <StatCard
        label="Online & Active"
        value={stats.online}
        description="Ready for live channel broadcast"
        icon={HiCheckCircle}
        active
        trend="83% availability"
      />
      <StatCard
        label="Away / On Field"
        value={stats.away}
        description="In transit or field assignment"
        icon={HiClock}
        trend="Expected back soon"
      />
      <StatCard
        label="Offline"
        value={stats.offline}
        description="Off-duty or disconnected"
        icon={HiShieldCheck}
        trend="Requires check-in"
      />
    </div>
  );
}

function StatCard({ label, value, description, icon: Icon, active = false, trend }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-6 transition-all hover:border-primary/40 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${active ? 'bg-green-100 text-green-600' : 'bg-secondary text-primary'}`}>
          <Icon className="h-6 w-6" />
        </div>
        {active && (
          <span className="flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-bold text-green-600 border border-green-200/40">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping" />
            LIVE
          </span>
        )}
      </div>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          {label}
        </p>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-3xl font-extrabold text-gray-900">{value}</span>
          <span className="text-xs font-medium text-gray-500">{trend}</span>
        </div>
        <p className="mt-1 text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* Directory & Table */
/* -------------------------------- */

function ContactsDirectory({
  contacts,
  totalContacts,
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  teamFilter,
  setTeamFilter,
}) {
  const teams = ["All", "Operations", "Security", "Transport"];

  return (
    <div className="rounded-2xl border border-gray-200/80 bg-white shadow-xs overflow-hidden">
      
      {/* Controls Bar */}
      <div className="border-b border-gray-100 p-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between bg-gray-50/50">
        
        {/* Left: Tabs / Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-gray-200/60 p-1 rounded-xl">
          {teams.map((team) => (
            <button
              key={team}
              onClick={() => setTeamFilter(team)}
              className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all ${
                teamFilter === team
                  ? "bg-white text-gray-900 shadow-xs"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {team}
            </button>
          ))}
        </div>

        {/* Right: Search & Status Dropdown */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:w-72">
            <HiSearch className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, role, phone..."
              className="h-10 w-full rounded-xl border border-gray-200 bg-white pl-10 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>

          <div className="relative w-full sm:w-48">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="h-10 w-full appearance-none rounded-xl border border-gray-200 bg-white px-3.5 pr-8 text-sm text-gray-700 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="Online">Online Only</option>
              <option value="Away">Away Only</option>
              <option value="Offline">Offline Only</option>
            </select>
            <HiFilter className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <div className="hidden border-b border-gray-100 bg-tertiary/60 px-6 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 md:grid md:grid-cols-12">
          <div className="col-span-4">Contact Profile</div>
          <div className="col-span-2">Department</div>
          <div className="col-span-2">Active Channel</div>
          <div className="col-span-2">Status & Activity</div>
          <div className="col-span-2 text-right">Quick Actions</div>
        </div>

        {contacts.length > 0 ? (
          <div className="divide-y divide-gray-100">
            {contacts.map((contact) => (
              <ContactRow key={contact.id} contact={contact} />
            ))}
          </div>
        ) : (
          <EmptyState search={search} clearSearch={() => { setSearch(""); setStatusFilter("All"); setTeamFilter("All"); }} />
        )}
      </div>

      {/* Footer Info Bar */}
      <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50/50 px-6 py-4 text-xs font-medium text-gray-500">
        <span>Showing <strong className="text-gray-900">{contacts.length}</strong> of <strong className="text-gray-900">{totalContacts}</strong> total members</span>
        <span className="hidden sm:inline-flex items-center gap-1.5 text-primary">
          <HiRadio className="h-4 w-4 animate-pulse" /> Sauti Push Node Secure Link Active
        </span>
      </div>

    </div>
  );
}

/* -------------------------------- */
/* Contact Row */
/* -------------------------------- */

function ContactRow({ contact }) {
  return (
    <div className="group transition hover:bg-quaternary/30 px-6 py-4">
      <div className="grid items-center gap-4 md:grid-cols-12">
        
        {/* Profile info */}
        <div className="md:col-span-4 flex items-center gap-3.5 min-w-0">
          <Avatar name={contact.name} status={contact.status} />
          <div className="min-w-0">
            <h3 className="font-semibold text-gray-900 truncate group-hover:text-primary transition">
              {contact.name}
            </h3>
            <p className="text-xs text-gray-500 truncate">{contact.role}</p>
            <p className="text-[11px] text-gray-400 font-mono mt-0.5">{contact.phone}</p>
          </div>
        </div>

        {/* Team Department */}
        <div className="md:col-span-2">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-secondary/80 px-2.5 py-1 text-xs font-semibold text-primary">
            <HiBuildingOffice2 className="h-3.5 w-3.5" />
            {contact.team}
          </span>
        </div>

        {/* Active Channel */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-1.5 text-xs font-medium text-gray-700">
            <HiRadio className="h-4 w-4 text-primary" />
            <span className="truncate">{contact.activeChannel}</span>
          </div>
          <span className="text-[10px] text-gray-400">{contact.callsToday} push transmissions today</span>
        </div>

        {/* Status */}
        <div className="md:col-span-2">
          <StatusBadge status={contact.status} lastActive={contact.lastActive} />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-1 md:col-span-2">
          <button
            type="button"
            title="Send Message"
            className="rounded-xl p-2 text-gray-500 transition hover:bg-secondary hover:text-primary"
          >
            <HiChatBubbleLeftRight className="h-5 w-5" />
          </button>
          
          <button
            type="button"
            title="Push-to-Talk Call"
            className="rounded-xl p-2 text-gray-500 transition hover:bg-secondary hover:text-primary"
          >
            <HiPhone className="h-5 w-5" />
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-xl bg-secondary/50 px-3 py-2 text-xs font-semibold text-primary transition hover:bg-primary hover:text-white"
          >
            Open
            <HiArrowUpRight className="h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            className="rounded-xl p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
          >
            <HiEllipsisVertical className="h-5 w-5" />
          </button>
        </div>

      </div>
    </div>
  );
}

/* -------------------------------- */
/* Subcomponents */
/* -------------------------------- */

function Avatar({ name, status }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const statusBorder = {
    Online: "ring-2 ring-green-500",
    Away: "ring-2 ring-yellow-400",
    Offline: "ring-2 ring-gray-200",
  };

  return (
    <div className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary shadow-xs ${statusBorder[status]}`}>
      {initials}
      <span className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
        status === 'Online' ? 'bg-green-500' : status === 'Away' ? 'bg-yellow-400' : 'bg-gray-300'
      }`} />
    </div>
  );
}

function StatusBadge({ status, lastActive }) {
  const styles = {
    Online: "bg-green-50 text-green-700 border-green-200/60",
    Away: "bg-yellow-50 text-yellow-700 border-yellow-200/60",
    Offline: "bg-gray-100 text-gray-600 border-gray-200",
  };

  return (
    <div>
      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${styles[status]}`}>
        <span className={`h-1.5 w-1.5 rounded-full ${status === 'Online' ? 'bg-green-500' : status === 'Away' ? 'bg-yellow-500' : 'bg-gray-400'}`} />
        {status}
      </span>
      <p className="mt-1 text-[11px] text-gray-400 font-medium">{lastActive}</p>
    </div>
  );
}

function EmptyState({ search, clearSearch }) {
  return (
    <div className="px-6 py-16 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-tertiary">
        <HiSearch className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mt-4 font-semibold text-gray-900">No matching contacts</h3>
      <p className="mt-1 text-sm text-gray-500">
        We couldn't find any team member matching "{search}".
      </p>
      <button
        type="button"
        onClick={clearSearch}
        className="mt-4 inline-flex items-center justify-center rounded-xl bg-secondary px-4 py-2 text-xs font-semibold text-primary transition hover:bg-primary hover:text-white"
      >
        Clear all search filters
      </button>
    </div>
  );
}

export default Contacts;