"use client"
import Button from "@/components/Button"
import ChevronLeftIcon from "@/components/Icons/ChevronLeftIcon"
import ChevronRightIcon from "@/components/Icons/CrevronRightIcon"
import Title from "@/components/Title"
import useGetUser from "@/queries/user/useGetUser"
import { useQueryState } from "next-usequerystate"
import Image from "next/image"
import Link from "next/link"

const PER_PAGE = 6

const User = () => {
  const [page, setPage] = useQueryState("page", { defaultValue: "1" })
  const { data, isLoading } = useGetUser({
    page: parseInt(page),
    per_page: PER_PAGE,
  })

  const isFirstPage = parseInt(page) === 1
  const isLastPage = data && parseInt(page) * PER_PAGE >= data.total

  return (
    <>
      <Title title="Users" />
      <div className="mt-10 bg-white rounded-xl pt-6 overflow-x-hidden shadow">
        <div className="px-6 mb-6">
          <h1 className="font-medium text-lg">All Users</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full divide-y divide-gray-200 border-b">
            <thead className="bg-white">
              <tr>
                <th className="pl-28 md:pl-28 lg:pl-36 pr-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Full Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data?.data.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 lg:pr-6 lg:pl-16 py-4 whitespace-nowrap flex items-center gap-6">
                    <div className="w-14">
                      <Image
                        src={user.avatar}
                        alt={user.first_name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>
                    <span>{`${user.first_name} ${user.last_name}`}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4">
                    <div className="w-36">
                      <Link href={`/user/${user.id}`}>
                        <Button>View Detail</Button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
              {isLoading &&
                [...Array(6)].map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    </td>
                    <td className="p-4">
                      <div className="h-8 w-32 bg-blue-300 rounded"></div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="p-8 flex justify-end text-gray-400 gap-4">
          <span>{`${data ? (parseInt(page) === 1 ? 1 : (parseInt(page) - 1) * PER_PAGE + 1) : 1}-${data ? parseInt(page) * PER_PAGE : PER_PAGE} of ${data?.total || 0}`}</span>
          <button
            disabled={isFirstPage}
            onClick={() => setPage((parseInt(page) - 1).toString())}
          >
            <ChevronLeftIcon />
          </button>
          <button
            disabled={isLastPage}
            onClick={() => setPage((parseInt(page) + 1).toString())}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </>
  )
}

export default User
