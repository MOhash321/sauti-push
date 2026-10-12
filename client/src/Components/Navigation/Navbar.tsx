import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  HiSearch, 
  HiBell, 
  HiChevronDown, 
  HiUser, 
  HiCog, 
  HiLogout, 
  HiShieldExclamation,
  HiCheckCircle,
  HiInformationCircle
} from "react-icons/hi";

export default function TopNavbar({ user = { name: "Abdulaziz", role: "Administrator", email: "abdulaziz@sautipush.com" } }) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const notificationsRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setNotificationsOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    { id: 1, title: "Emergency alert triggered", desc: "Security team dispatched to Sector 4", time: "2m ago", type: "emergency", unread: true },
    { id: 2, title: "New team member", desc: "John Kamau joined Operations", time: "15m ago", type: "success", unread: true },
    { id: 3, title: "System update", desc: "Push-to-talk node optimized successfully", time: "1h ago", type: "info", unread: false },
  ];

  const initials = user.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white/95 px-6 backdrop-blur-md lg:px-8 font-plex">
      
      {/* Left: Search Bar */}
      <div className="flex items-center gap-4 flex-1 max-w-md">
        <div className="relative w-full">
          <HiSearch className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search teams, channels, contacts..."
            className="h-10 w-full rounded-xl border border-gray-200 bg-quaternary/40 pl-10 pr-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
          />
        </div>
      </div>

      {/* Right: Actions & User Profile */}
      <div className="flex items-center gap-3">
        
        {/* Notifications Dropdown */}
        <div className="relative" ref={notificationsRef}>
          <button
            type="button"
            onClick={() => {
              setNotificationsOpen(!notificationsOpen);
              setProfileOpen(false);
            }}
            aria-label="View notifications"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 transition hover:bg-tertiary hover:text-primary"
          >
            <HiBell className="h-5 w-5" />
            <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-primary ring-2 ring-white"></span>
          </button>

          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl border border-gray-200 bg-white shadow-xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="flex items-center justify-between px-4 pb-3 border-b border-gray-100">
                <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
                <span className="rounded-full bg-secondary px-2 py-0.5 text-[11px] font-medium text-primary">
                  2 unread
                </span>
              </div>

              <div className="divide-y divide-gray-100 max-h-80 overflow-y-auto">
                {notifications.map((n) => (
                  <div key={n.id} className={`flex items-start gap-3 p-3 transition hover:bg-tertiary/50 ${n.unread ? 'bg-tertiary/20' : ''}`}>
                    <div className="mt-0.5 shrink-0">
                      {n.type === 'emergency' && <HiShieldExclamation className="h-5 w-5 text-red-500" />}
                      {n.type === 'success' && <HiCheckCircle className="h-5 w-5 text-emerald-500" />}
                      {n.type === 'info' && <HiInformationCircle className="h-5 w-5 text-primary" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-900">{n.title}</p>
                      <p className="text-xs text-gray-500 truncate">{n.desc}</p>
                      <p className="mt-1 text-[10px] text-gray-400">{n.time}</p>
                    </div>
                    {n.unread && <span className="h-2 w-2 rounded-full bg-primary self-center"></span>}
                  </div>
                ))}
              </div>

              <div className="px-4 pt-3 border-t border-gray-100 text-center">
                <button className="text-xs font-semibold text-primary hover:underline">
                  Mark all as read
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Vertical Separator */}
        <div className="h-6 w-[1px] bg-gray-200 mx-1"></div>

        {/* Profile Menu Dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            type="button"
            onClick={() => {
              setProfileOpen(!profileOpen);
              setNotificationsOpen(false);
            }}
            className="flex items-center gap-3 rounded-xl p-1.5 transition hover:bg-tertiary"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary font-bold text-primary shadow-sm">
              {initials}
            </div>
            <div className="hidden text-left sm:block">
              <p className="text-xs font-semibold text-gray-900 leading-tight">{user.name}</p>
              <p className="text-[11px] text-gray-500 leading-tight">{user.role}</p>
            </div>
            <HiChevronDown className="h-4 w-4 text-gray-400 hidden sm:block" />
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-gray-200 bg-white shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="px-4 py-3 border-b border-gray-100 sm:hidden">
                <p className="text-xs font-semibold text-gray-900">{user.name}</p>
                <p className="text-[11px] text-gray-500 truncate">{user.email}</p>
              </div>

              <div className="py-1">
                <Link
                  to="/settings"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-gray-700 hover:bg-tertiary hover:text-primary transition"
                >
                  <HiUser className="h-4 w-4 text-gray-400" />
                  Your Profile
                </Link>
                <Link
                  to="/settings"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-gray-700 hover:bg-tertiary hover:text-primary transition"
                >
                  <HiCog className="h-4 w-4 text-gray-400" />
                  Settings & Preferences
                </Link>
              </div>

              <div className="border-t border-gray-100 pt-1">
                <button
                  onClick={() => {
                    setProfileOpen(false);
                    // Add logout logic here
                  }}
                  className="flex w-full items-center gap-2.5 px-4 py-2 text-xs font-medium text-red-600 hover:bg-red-50 transition"
                >
                  <HiLogout className="h-4 w-4" />
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}