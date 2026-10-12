
import { useMemo, useState } from "react";
import { HiSearch } from "react-icons/hi";
import {
  HiPlus,
  HiRadio,
  HiUsers,
  HiEllipsisVertical,
  HiArrowUpRight,
  HiMicrophone,
  HiSignal,
  HiClock,
  HiChatBubbleLeftRight,
} from "react-icons/hi2";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

/* -------------------------------- */
/* Data */
/* -------------------------------- */

const channels = [
  {
    id: 1,
    name: "Operations",
    description: "Daily operations and field coordination.",
    members: 12,
    messages: 486,
    status: "Active",
    activity: 92,
    lastActive: "2 min ago",
  },
  {
    id: 2,
    name: "Security",
    description: "Security and emergency response communication.",
    members: 8,
    messages: 364,
    status: "Active",
    activity: 78,
    lastActive: "5 min ago",
  },
  {
    id: 3,
    name: "Transport",
    description: "Driver and transportation communication.",
    members: 6,
    messages: 218,
    status: "Active",
    activity: 64,
    lastActive: "8 min ago",
  },
  {
    id: 4,
    name: "Emergency",
    description: "Priority communication for emergency situations.",
    members: 5,
    messages: 92,
    status: "Active",
    activity: 48,
    lastActive: "14 min ago",
  },
];

const activityData = [
  { day: "Day 1", activity: 32 },
  { day: "Day 2", activity: 45 },
  { day: "Day 3", activity: 38 },
  { day: "Day 4", activity: 56 },
  { day: "Day 5", activity: 48 },
  { day: "Day 6", activity: 62 },
  { day: "Day 7", activity: 58 },
  { day: "Day 8", activity: 72 },
  { day: "Day 9", activity: 66 },
  { day: "Day 10", activity: 78 },
  { day: "Day 11", activity: 70 },
  { day: "Day 12", activity: 84 },
  { day: "Day 13", activity: 76 },
  { day: "Today", activity: 92 },
];

const recentActivity = [
  {
    title: "Operations channel became active",
    time: "2 minutes ago",
    icon: HiSignal,
  },
  {
    title: "John sent a voice message",
    time: "8 minutes ago",
    icon: HiMicrophone,
  },
  {
    title: "3 members joined Security",
    time: "18 minutes ago",
    icon: HiUsers,
  },
  {
    title: "Emergency channel received a message",
    time: "24 minutes ago",
    icon: HiChatBubbleLeftRight,
  },
];

/* -------------------------------- */
/* Main Component */
/* -------------------------------- */

function Channels() {
  const [search, setSearch] = useState("");

  const filteredChannels = useMemo(() => {
    const query = search.toLowerCase().trim();

    return channels.filter((channel) =>
      channel.name.toLowerCase().includes(query)
    );
  }, [search]);

  const stats = useMemo(() => {
    const activeChannels = channels.filter(
      (channel) => channel.status === "Active"
    ).length;

    const totalMembers = channels.reduce(
      (total, channel) => total + channel.members,
      0
    );

    const totalMessages = channels.reduce(
      (total, channel) => total + channel.messages,
      0
    );

    return {
      totalChannels: channels.length,
      activeChannels,
      totalMembers,
      totalMessages,
    };
  }, []);

  return (
    <section className="w-full space-y-8">

      {/* Header */}
      <ChannelsHeader />

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Channels"
          value={stats.totalChannels}
          icon={HiRadio}
          description="Communication channels"
        />

        <StatCard
          label="Active Channels"
          value={stats.activeChannels}
          icon={HiSignal}
          description="Currently online"
          active
        />

        <StatCard
          label="Connected Members"
          value={stats.totalMembers}
          icon={HiUsers}
          description="Across all channels"
        />

        <StatCard
          label="Messages"
          value={stats.totalMessages.toLocaleString()}
          icon={HiChatBubbleLeftRight}
          description="Total channel activity"
        />
      </div>

      {/* Analytics */}
      <div className="grid gap-6 xl:grid-cols-3">

        <ActivityAnalytics />

        <ChannelDistribution />

      </div>

      {/* Channel Directory */}
      <ChannelDirectory
        channels={filteredChannels}
        totalChannels={channels.length}
        search={search}
        setSearch={setSearch}
      />

      {/* Recent Activity */}
      <RecentActivity />

    </section>
  );
}

/* -------------------------------- */
/* Header */
/* -------------------------------- */

function ChannelsHeader() {
  return (
    <header className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500" />

          <span className="text-sm font-medium text-green-600">
            Communication system online
          </span>
        </div>

        <h1 className="font-roboto text-3xl font-bold tracking-tight text-gray-900">
          Channels
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-gray-500">
          Monitor your communication channels, activity, and team
          conversations in real time.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="hidden items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 sm:flex"
        >
          <HiSignal className="h-4 w-4" />
          Live Status
        </button>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
        >
          <HiPlus className="h-5 w-5" />
          Create Channel
        </button>
      </div>
    </header>
  );
}

/* -------------------------------- */
/* Stat Card */
/* -------------------------------- */

function StatCard({
  label,
  value,
  icon: Icon,
  description,
  active = false,
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 transition hover:border-secondary">

      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
          <Icon className="h-5 w-5 text-primary" />
        </div>

        {active && (
          <span className="flex items-center gap-1.5 rounded-full bg-green-50 px-2 py-1 text-[10px] font-semibold text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            LIVE
          </span>
        )}
      </div>

      <p className="mt-5 text-xs font-medium uppercase tracking-wide text-gray-400">
        {label}
      </p>

      <p className="mt-1 text-2xl font-bold text-gray-900">
        {value}
      </p>

      <p className="mt-1 text-xs text-gray-500">
        {description}
      </p>
    </div>
  );
}

/* -------------------------------- */
/* Activity Analytics */
/* -------------------------------- */

function ActivityAnalytics() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 xl:col-span-2">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
            Channel activity
          </p>

          <div className="mt-1 flex items-end gap-3">
            <h2 className="text-2xl font-bold text-gray-900">
              1,284
            </h2>

            <span className="mb-1 flex items-center gap-1 text-xs font-semibold text-green-600">
              <HiArrowUpRight className="h-3.5 w-3.5" />
              18.4%
            </span>
          </div>

          <p className="mt-1 text-sm text-gray-500">
            Messages and voice activity over the last 14 days
          </p>
        </div>

        <select
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 outline-none focus:border-primary"
          defaultValue="14"
        >
          <option value="14">Last 14 days</option>
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
        </select>
      </div>

      <div className="mt-8 h-[230px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={activityData}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient
                id="channelActivityGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#F29191"
                  stopOpacity={0.3}
                />

                <stop
                  offset="100%"
                  stopColor="#F29191"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#f3f4f6"
            />

            <XAxis
              dataKey="day"
              hide
            />

            <YAxis
              hide
              domain={[0, 100]}
            />

            <Tooltip
              cursor={{
                stroke: "#e5e7eb",
                strokeWidth: 1,
              }}
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
              formatter={(value) => [`${value}%`, "Activity"]}
            />

            <Area
              type="monotone"
              dataKey="activity"
              stroke="#F29191"
              strokeWidth={3}
              fill="url(#channelActivityGradient)"
              dot={{
                r: 4,
                fill: "#ffffff",
                stroke: "#F29191",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 6,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex justify-between text-xs text-gray-400">
        <span>14 days ago</span>
        <span>7 days ago</span>
        <span>Today</span>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* Channel Distribution */
/* -------------------------------- */

function ChannelDistribution() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">

      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
          Channel activity
        </p>

        <h2 className="mt-1 text-lg font-semibold text-gray-900">
          Most active
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Activity across your communication channels.
        </p>
      </div>

      <div className="mt-7 space-y-6">
        {channels.map((channel) => (
          <ChannelActivity
            key={channel.id}
            channel={channel}
          />
        ))}
      </div>
    </div>
  );
}

/* -------------------------------- */
/* Channel Activity */
/* -------------------------------- */

function ChannelActivity({ channel }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
            <HiRadio className="h-4 w-4 text-primary" />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-900">
              {channel.name}
            </p>

            <p className="text-xs text-gray-400">
              {channel.messages} messages
            </p>
          </div>
        </div>

        <span className="text-sm font-semibold text-gray-700">
          {channel.activity}%
        </span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{
            width: `${channel.activity}%`,
          }}
        />
      </div>
    </div>
  );
}

/* -------------------------------- */
/* Channel Directory */
/* -------------------------------- */

function ChannelDirectory({
  channels,
  totalChannels,
  search,
  setSearch,
}) {
  return (
    <section>

      <div className="flex flex-col gap-4 border-b border-gray-200 pb-4 sm:flex-row sm:items-end sm:justify-between">

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-primary">
            Communication
          </p>

          <h2 className="mt-1 text-lg font-semibold text-gray-900">
            Your Channels
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Open a channel to communicate with your team.
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <HiSearch className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search channels"
            className="h-10 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-xl border border-gray-200 bg-white">

        <div className="hidden border-b border-gray-100 bg-tertiary px-6 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 md:grid md:grid-cols-12">

          <div className="col-span-5">
            Channel
          </div>

          <div className="col-span-2">
            Members
          </div>

          <div className="col-span-2">
            Activity
          </div>

          <div className="col-span-3 text-right">
            Action
          </div>

        </div>

        {channels.length > 0 ? (
          channels.map((channel) => (
            <ChannelRow
              key={channel.id}
              channel={channel}
            />
          ))
        ) : (
          <EmptyState
            search={search}
            clearSearch={() => setSearch("")}
          />
        )}
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
        <span>
          Showing {channels.length} of {totalChannels} channels
        </span>

        <span className="hidden sm:block">
          Sauti Push Communication
        </span>
      </div>
    </section>
  );
}

/* -------------------------------- */
/* Channel Row */
/* -------------------------------- */

function ChannelRow({ channel }) {
  return (
    <div className="group border-b border-gray-100 px-5 py-5 transition last:border-0 hover:bg-tertiary/40 md:px-6">

      <div className="grid items-center gap-4 md:grid-cols-12">

        <div className="md:col-span-5">
          <div className="flex items-center gap-4">

            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary">

              <HiRadio className="h-5 w-5 text-primary" />

              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500" />

            </div>

            <div className="min-w-0">
              <h3 className="font-semibold text-gray-900">
                {channel.name}
              </h3>

              <p className="mt-0.5 truncate text-sm text-gray-500">
                {channel.description}
              </p>
            </div>

          </div>
        </div>

        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <HiUsers className="h-4 w-4 text-primary" />

            {channel.members}

            <span className="text-gray-400">
              members
            </span>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="max-w-[120px]">

            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="text-gray-500">
                Activity
              </span>

              <span className="font-semibold text-gray-700">
                {channel.activity}%
              </span>
            </div>

            <div className="h-1.5 rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{
                  width: `${channel.activity}%`,
                }}
              />
            </div>

          </div>
        </div>

        <div className="flex items-center justify-between md:col-span-3 md:justify-end md:gap-2">

          <div className="hidden text-right md:block">
            <p className="text-xs text-gray-400">
              Last active
            </p>

            <p className="mt-0.5 text-xs font-medium text-gray-600">
              {channel.lastActive}
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-primary transition hover:bg-secondary"
          >
            Open

            <HiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            type="button"
            aria-label={`More options for ${channel.name}`}
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
/* Recent Activity */
/* -------------------------------- */

function RecentActivity() {
  return (
    <section className="rounded-xl border border-gray-200 bg-white">

      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

        <div>
          <h2 className="font-roboto font-semibold text-gray-900">
            Recent Activity
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Latest communication events
          </p>
        </div>

        <button
          type="button"
          className="text-sm font-medium text-primary hover:underline"
        >
          View all
        </button>

      </div>

      <div className="divide-y divide-gray-100">
        {recentActivity.map((activity) => (
          <ActivityItem
            key={activity.title}
            activity={activity}
          />
        ))}
      </div>

    </section>
  );
}

/* -------------------------------- */
/* Activity Item */
/* -------------------------------- */

function ActivityItem({ activity }) {
  const Icon = activity.icon;

  return (
    <div className="flex items-center gap-4 px-6 py-4 transition hover:bg-tertiary/40">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
        <Icon className="h-4 w-4 text-primary" />
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-sm font-medium text-gray-800">
          {activity.title}
        </p>

        <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-400">
          <HiClock className="h-3.5 w-3.5" />
          {activity.time}
        </div>

      </div>

    </div>
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
        No channels found
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        No channel matches "{search}".
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

export default Channels;

