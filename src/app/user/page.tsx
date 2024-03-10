import User from "@/containers/User"
import { Suspense } from "react"

export default function UserPage() {
  return (
    <Suspense>
      <User />
    </Suspense>
  )
}
