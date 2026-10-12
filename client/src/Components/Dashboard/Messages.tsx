import { useMemo, useState } from "react";
import { HiSearch } from "react-icons/hi";
import {
  HiPlus,
  HiChatBubbleLeftRight,
  HiPhone,
  HiEllipsisVertical,
} from "react-icons/hi2";

const messages = [
  {
    id: 1,
    name: "John Kamau",
    message: "The operations team is ready for the morning shift.",
    time: "09:42 AM",
    unread: 3,
    status: "Online",
  },
  {
    id: 2,
    name: "Sarah Nakato",
    message: "Security check completed successfully.",
    time: "09:25 AM",
    unread: 1,
    status: "Online",
  },
  {
    id: 3,
    name: "David Okello",
    message: "I have arrived at the transport site.",
    time: "08:56 AM",
    unread: 0,
    status: "Away",
  },
  {
    id: 4,
    name: "Mary Achieng",
    message: "Can we schedule a team briefing?",
    time: "Yesterday",
    unread: 2,
    status: "Offline",
  },
  {
    id: 5,
    name: "Brian Mwangi",
    message: "Everything is clear on the security channel.",
    time: "Yesterday",
    unread: 0,
    status: "Online",
  },
];

function Messages() {
  const [search, setSearch] = useState("");

  const filteredMessages = useMemo(() => {
    const query = search.toLowerCase().trim();

    return messages.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.message.toLowerCase().includes(query)
    );
  }, [search]);

  const stats = {
    total: messages.length,
    unread: messages.reduce((total, item) => total + item.unread, 0),
    active: messages.filter((item) => item.status === "Online").length,
  };

  return (
    <section className="w-full space-y-8">
      <MessagesHeader />

      <MessagesStats stats={stats} />

      <MessagesDirectory
        messages={filteredMessages}
        search={search}
        setSearch={setSearch}
      />
    </section>
  );
}

function MessagesHeader() {
  return (
    <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500" />

          <span className="text-sm font-medium text-green-600">
            Team messaging
          </span>
        </div>

        <h1 className="font-roboto text-3xl font-bold text-gray-900">
          Messages
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Communicate with your team members and stay connected.
        </p>
      </div>

      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
      >
        <HiPlus className="h-5 w-5" />
        New Message
      </button>
    </header>
  );
}

function MessagesStats({ stats }) {
  const items = [
    {
      label: "Conversations",
      value: stats.total,
      description: "Active conversations",
    },
    {
      label: "Unread",
      value: stats.unread,
      description: "Messages to read",
    },
    {
      label: "Online",
      value: stats.active,
      description: "Contacts available",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <StatCard key={item.label} {...item} />
      ))}
    </div>
  );
}

function StatCard({ label, value, description }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 transition hover:border-secondary">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
        <HiChatBubbleLeftRight className="h-5 w-5 text-primary" />
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

function MessagesDirectory({ messages, search, setSearch }) {
  return (
    <section>
      <div className="flex flex-col gap-4 border-b border-gray-200 pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-primary">
            Inbox
          </p>

          <h2 className="mt-1 text-lg font-semibold text-gray-900">
            Conversations
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            View your latest team conversations.
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <HiSearch className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search messages"
            className="h-10 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-xl border border-gray-200 bg-white">
        {messages.length > 0 ? (
          messages.map((message) => (
            <MessageRow key={message.id} message={message} />
          ))
        ) : (
          <EmptyState
            search={search}
            clearSearch={() => setSearch("")}
          />
        )}
      </div>
    </section>
  );
}

function MessageRow({ message }) {
  return (
    <div className="border-b border-gray-100 px-5 py-5 transition last:border-0 hover:bg-tertiary/40 md:px-6">
      <div className="flex items-center gap-4">
        <Avatar name={message.name} status={message.status} />

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <h3 className="truncate font-semibold text-gray-900">
              {message.name}
            </h3>

            <span className="shrink-0 text-xs text-gray-400">
              {message.time}
            </span>
          </div>

          <p className="mt-1 truncate text-sm text-gray-500">
            {message.message}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {message.unread > 0 && (
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-primary px-2 text-xs font-semibold text-white">
              {message.unread}
            </span>
          )}

          <button
            type="button"
            className="rounded-lg p-2 text-gray-400 transition hover:bg-secondary hover:text-primary"
            aria-label={`Call ${message.name}`}
          >
            <HiPhone className="h-5 w-5" />
          </button>

          <button
            type="button"
            className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
            aria-label={`More options for ${message.name}`}
          >
            <HiEllipsisVertical className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Avatar({ name, status }) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  const statusColors = {
    Online: "bg-green-500",
    Away: "bg-yellow-500",
    Offline: "bg-gray-400",
  };

  return (
    <div className="relative shrink-0">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
        {initials}
      </div>

      <span
        className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
          statusColors[status] || "bg-gray-400"
        }`}
      />
    </div>
  );
}

function EmptyState({ search, clearSearch }) {
  return (
    <div className="px-6 py-16 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-tertiary">
        <HiChatBubbleLeftRight className="h-5 w-5 text-primary" />
      </div>

      <h3 className="mt-4 font-semibold text-gray-900">
        No messages found
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        No conversation matches "{search}".
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

export default Messages;