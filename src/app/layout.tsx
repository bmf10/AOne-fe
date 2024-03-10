import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import QueryProvider from "@/context/QueryProvider"
import Layout from "@/components/Layout"
import clsx from "clsx"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AOne Assesment",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <QueryProvider>
      <html lang="en">
        <body className={clsx(inter.className, "bg-slate-100 text-black")}>
          <Layout>{children}</Layout>
        </body>
      </html>
    </QueryProvider>
  )
}
