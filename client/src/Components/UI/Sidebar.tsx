
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaAddressBook,
  FaComments,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";
import { FaRadio, FaWalkieTalkie } from "react-icons/fa6";

const navigation = [
  {
    title: "Main",
    items: [
      {
        label: "Dashboard",
        path: "/dashboard",
        icon: FaHome,
      },
    ],
  },
  {
    title: "Communication",
    items: [
      {
        label: "Teams",
        path: "/dashboard/teams",
        icon: FaUsers,
      },
      {
        label: "Channels",
        path: "/dashboard/channels",
        icon: FaRadio,
      },
      {
        label: "Contacts",
        path: "/dashboard/contacts",
        icon: FaAddressBook,
      },
      {
        label: "Messages",
        path: "/dashboard/messages",
        icon: FaComments,
      },
    ],
  },
  {
    title: "Operations",
    items: [
      {
        label: "Emergency",
        path: "/dashboard/emergency",
        icon: FaExclamationTriangle,
      },
      {
        label: "Dispatch",
        path: "/dashboard/dispatch",
        icon: FaMapMarkerAlt,
      },
    ],
  },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-gray-100 bg-white">

      {/* Logo */}
      <div className="flex h-20 items-center gap-3 border-b border-gray-100 px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
          <FaWalkieTalkie className="text-sm text-white" />
        </div>

        <span className="font-share text-lg font-bold text-primary">
          Sauti Push
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6">
        {navigation.map((section) => (
          <div key={section.title} className="mb-7">

            <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
              {section.title}
            </p>

            <div className="space-y-1">
              {section.items.map(({ label, path, icon: Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`
                  }
                >
                  <Icon className="text-sm" />
                  <span>{label}</span>
                </NavLink>
              ))}
            </div>

          </div>
        ))}
      </nav>

      {/* Bottom Links */}
      <div className="border-t border-gray-100 p-4">
        <NavLink
          to="/dashboard/settings"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
        >
          <FaCog />
          Settings
        </NavLink>

        <NavLink
          to="/dashboard/help"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
        >
          <FaQuestionCircle />
          Help & Support
        </NavLink>

        {/* User */}
        <div className="mt-4 flex items-center gap-3 border-t border-gray-100 px-3 pt-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
            A
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-gray-900">
              Abdulaziz
            </p>

            <p className="text-xs text-gray-400">
              Administrator
            </p>
          </div>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;

