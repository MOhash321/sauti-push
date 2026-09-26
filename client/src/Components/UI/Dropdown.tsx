import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

type DropdownContextType = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
)

function useDropdown() {
  const context = useContext(DropdownContext)

  if (!context) {
    throw new Error(
      'Dropdown components must be used inside <Dropdown>'
    )
  }

  return context
}

type DropdownProps = {
  children: React.ReactNode
}

export function Dropdown({ children }: DropdownProps) {
  const [open, setOpen] = useState(false)

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-block text-left">
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

type DropdownTriggerProps = {
  children: React.ReactNode
}

export function DropdownTrigger({
  children,
}: DropdownTriggerProps) {
  const { open, setOpen } = useDropdown()

  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      className="inline-flex items-center justify-center"
    >
      {children}
    </button>
  )
}

type DropdownContentProps = {
  children: React.ReactNode
  align?: 'start' | 'center' | 'end'
  className?: string
}

export function DropdownContent({
  children,
  align = 'start',
  className = '',
}: DropdownContentProps) {
  const { open, setOpen } = useDropdown()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    function handleClickOutside(event: MouseEvent) {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open, setOpen])

  if (!open) return null

  const alignment = {
    start: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    end: 'right-0',
  }

  return (
    <div
      ref={contentRef}
      className={`
        absolute top-full z-50 mt-3
        min-w-56
        rounded-xl
        border border-gray-100
        bg-white
        p-2
        shadow-lg
        shadow-gray-200/50
        ${alignment[align]}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

type DropdownItemProps = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function DropdownItem({
  children,
  onClick,
  className = '',
}: DropdownItemProps) {
  const { setOpen } = useDropdown()

  function handleClick() {
    onClick?.()
    setOpen(false)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
        flex w-full items-center
        rounded-lg
        px-3 py-2.5
        text-left
        text-sm
        font-medium
        text-gray-700
        transition-colors
        hover:bg-gray-50
        hover:text-primary
        ${className}
      `}
    >
      {children}
    </button>
  )
}
