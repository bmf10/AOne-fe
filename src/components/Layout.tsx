"use client"
import { FC, ReactNode, useEffect, useRef, useState } from "react"
import HamburgerIcon from "./Icons/HamburgerIcon"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import ExclamationIcon from "./Icons/ExclamationIcon"
import UserIcon from "./Icons/UserIcon"
import { usePathname } from "next/navigation"

interface Props {
  readonly children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="flex">
      {/* Backdrop */}
      <div
        className={clsx(
          "fixed inset-0 bg-black transition-opacity duration-200 ease-in-out md:hidden",
          {
            "opacity-50": isOpen,
            "opacity-0 pointer-events-none": !isOpen,
          },
        )}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={clsx(
          "bg-sidebar w-64 space-y-6 py-4 fixed inset-y-0 left-0 transition duration-200 ease-in-out h-full overflow-y-auto",
          {
            "translate-x-0": isOpen,
            "-translate-x-full md:translate-x-0": !isOpen,
          },
        )}
      >
        <div className="px-4">
          <Image src="/logo.png" alt="logo" width={150} height={100} />
        </div>
        {/* Content */}
        <div className="space-y-2">
          <Link
            href="/"
            className={clsx("text-white flex gap-4 px-4 py-4", {
              "bg-gray-600": pathname === "/",
            })}
            onClick={toggleSidebar}
          >
            <ExclamationIcon />
            <span>About</span>
          </Link>
          <Link
            href="/user"
            className={clsx("text-white flex gap-4 px-4 py-4", {
              "bg-gray-600":
                pathname === "/user" || /\/user\/\d/.test(pathname),
            })}
            onClick={toggleSidebar}
          >
            <UserIcon />
            <span>User</span>
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full bg-slate-100 md:ml-64">
        <button
          onClick={toggleSidebar}
          className="p-4 bg-sidebar text-white md:hidden"
        >
          <HamburgerIcon />
        </button>
        <div className="h-full p-4 md:p-6 bg-slate-100">{children}</div>
      </div>
    </div>
  )
}

export default Layout
