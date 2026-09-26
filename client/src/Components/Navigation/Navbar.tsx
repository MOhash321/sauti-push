import { Link } from 'react-router-dom'

import Button from '../UI/Button'
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,

} from '../UI/Dropdown'
import { FaWalkieTalkie } from 'react-icons/fa6'

const navItems = [
  {
    label: 'Why Sauti Push',
    items: [
      {
        label: 'Team Communication',
        description: 'Connect your teams instantly',
        path: '/team-communication',
        icon: 'users',
      },
      {
        label: 'Push-to-Talk',
        description: 'Real-time voice communication',
        path: '/push-to-talk',
        icon: 'mic',
      },
      {
        label: 'Dispatch',
        description: 'Coordinate your field teams',
        path: '/dispatch',
        icon: 'dispatch',
      },
      {
        label: 'Emergency Communication',
        description: 'Respond when every second matters',
        path: '/emergency',
        icon: 'emergency',
      },
    ],
  },

  {
    label: 'Industries',
    items: [
      {
        label: 'Transportation',
        description: 'Keep drivers and dispatch connected',
        path: '/transportation',
        icon: 'truck',
      },
      {
        label: 'Construction',
        description: 'Connect teams across every site',
        path: '/construction',
        icon: 'construction',
      },
      {
        label: 'Retail',
        description: 'Keep store teams connected',
        path: '/retail',
        icon: 'retail',
      },
      {
        label: 'Hospitality',
        description: 'Coordinate hospitality teams',
        path: '/hospitality',
        icon: 'hospitality',
      },
      {
        label: 'Manufacturing',
        description: 'Connect your operations',
        path: '/manufacturing',
        icon: 'manufacturing',
      },
      {
        label: 'Emergency Response',
        description: 'Coordinate critical response teams',
        path: '/emergency',
        icon: 'emergency',
      },
    ],
  },

  {
    label: 'Resources',
    items: [
      {
        label: 'Resource Hub',
        description: 'Guides, insights and useful resources',
        path: '/resources-hub',
        icon: 'book',
      },
      {
        label: 'Customer Stories',
        description: 'See how teams use Sauti Push',
        path: '/customers',
        icon: 'users',
      },
      {
        label: 'Blog',
        description: 'Insights and company updates',
        path: '/blog',
        icon: 'document',
      },
      {
        label: 'Help Center',
        description: 'Get help with Sauti Push',
        path: '/help',
        icon: 'help',
      },
      {
        label: 'Developer Tools',
        description: 'Build with Sauti Push',
        path: '/developers',
        icon: 'code',
      },
      {
        label: 'Contact Support',
        description: 'Talk to our support team',
        path: '/support',
        icon: 'support',
      },
    ],
  },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-15 max-w-7xl items-center justify-between px-6 lg:px-8">
        <NavbarLogo />

        <NavbarNavigation />

        <NavbarActions />

        <NavbarMobileButton />
      </nav>
    </header>
  )
}

function NavbarLogo() {
  return (
    <Link
      to="/"
      className="flex shrink-0 items-center gap-2"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
        <FaWalkieTalkie className="text-lg text-white" />
      </div>

      <span className="font-share text-300 font-bold tracking-tight text-primary">
        Sauti Push
      </span>
    </Link>
  );
}
function NavbarNavigation() {
  return (
    <div className="hidden items-center gap-7 lg:flex">
      {navItems.map((item) => (
        <NavbarDropdown
          key={item.label}
          item={item}
        />
      ))}

      <NavbarLink to="/enterprise">
        Enterprise
      </NavbarLink>

      <NavbarLink to="/pricing">
        Pricing
      </NavbarLink>
    </div>
  )
}

function NavbarDropdown({ item }) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <span className="flex items-center gap-1.5 text-sm font-medium text-gray-800 transition-colors hover:text-primary">
          {item.label}

          <ChevronDown />
        </span>
      </DropdownTrigger>

      <DropdownContent
        align="center"
        className="w-[560px]"
      >
        <div className="grid grid-cols-2 gap-2">
          {item.items.map((subItem) => (
            <Link
              key={subItem.path}
              to={subItem.path}
              className="block rounded-xl p-4 transition-colors hover:bg-gray-50"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0 text-primary">
                  <DropdownIcon type={subItem.icon} />
                </div>

                <div>
                  <p className="font-medium text-gray-900">
                    {subItem.label}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {subItem.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </DropdownContent>
    </Dropdown>
  )
}

function NavbarLink({ children, to }) {
  return (
    <Link
      to={to}
      className="text-sm font-medium text-gray-800 transition-colors hover:text-primary"
    >
      {children}
    </Link>
  )
}

function NavbarActions() {
  return (
    <div className="hidden items-center gap-5 lg:flex">
      <NavbarLink to="/contact">
        Contact Us
      </NavbarLink>

      <Button to="/signup">
        Try Now
      </Button>
    </div>
  )
}

function NavbarMobileButton() {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
      aria-label="Open navigation menu"
    >
      <MenuIcon />
    </button>
  )
}

function DropdownIcon({ type }) {
  const icons = {
    users: <UsersIcon />,
    mic: <MicIcon />,
    dispatch: <DispatchIcon />,
    emergency: <EmergencyIcon />,
    truck: <TruckIcon />,
    construction: <ConstructionIcon />,
    retail: <RetailIcon />,
    hospitality: <HospitalityIcon />,
    manufacturing: <ManufacturingIcon />,
    book: <BookIcon />,
    document: <DocumentIcon />,
    help: <HelpIcon />,
    code: <CodeIcon />,
    support: <SupportIcon />,
  }

  return icons[type] || null
}

function UsersIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
      />
    </svg>
  )
}

function MicIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="9"
        y="2"
        width="6"
        height="12"
        rx="3"
        strokeWidth="1.8"
      />

      <path
        strokeLinecap="round"
        strokeWidth="1.8"
        d="M5 10a7 7 0 0014 0M12 17v5M8 22h8"
      />
    </svg>
  )
}

function DispatchIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M4 6h16M4 12h10M4 18h16"
      />

      <circle
        cx="18"
        cy="12"
        r="2"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function EmergencyIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M12 3l9 4v5c0 5.25-3.5 8.75-9 9-5.5-.25-9-3.75-9-9V7l9-4z"
      />

      <path
        strokeLinecap="round"
        strokeWidth="1.8"
        d="M12 8v4M12 16h.01"
      />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M3 6h11v11H3zM14 10h4l3 3v4h-7z"
      />

      <circle
        cx="7"
        cy="19"
        r="2"
        strokeWidth="1.8"
      />

      <circle
        cx="18"
        cy="19"
        r="2"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function ConstructionIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M3 20h18M6 20V9l6-4 6 4v11M9 20v-5h6v5"
      />
    </svg>
  )
}

function RetailIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M4 9h16l-1-5H5L4 9zM6 9v11h12V9M9 13h6"
      />
    </svg>
  )
}

function HospitalityIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M4 18v-6a4 4 0 014-4h8a4 4 0 014 4v6M4 15h16M7 18v2M17 18v2"
      />
    </svg>
  )
}

function ManufacturingIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M3 20h18M5 20V9l5 3V7l5 3V5l4 2v13"
      />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M4 5a3 3 0 013-3h10a3 3 0 013 3v16H7a3 3 0 01-3-3V5z"
      />

      <path
        strokeLinecap="round"
        strokeWidth="1.8"
        d="M8 7h8M8 11h8M8 15h5"
      />
    </svg>
  )
}

function DocumentIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
      />

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M14 2v6h6M8 13h8M8 17h6"
      />
    </svg>
  )
}

function HelpIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        strokeWidth="1.8"
      />

      <path
        strokeLinecap="round"
        strokeWidth="1.8"
        d="M9.5 9a2.5 2.5 0 115 0c0 2-2.5 2-2.5 4M12 17h.01"
      />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M8 9l-3 3 3 3M16 9l3 3-3 3M14 5l-4 14"
      />
    </svg>
  )
}

function SupportIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M18 10a6 6 0 10-12 0v1a3 3 0 003 3h1v-5H7M18 10v1a3 3 0 01-3 3h-1v-5h4zM18 14v2a3 3 0 01-3 3h-1"
      />
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 1.04l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  )
}

export default Navbar
