"use client"
import Button from "@/components/Button"
import Title from "@/components/Title"
import useGetUserDetail from "@/queries/user/userGetUserDetail"
import Image from "next/image"

import { useParams, useRouter } from "next/navigation"

const UserDetail = () => {
  const params = useParams()
  const router = useRouter()
  const { data, isLoading } = useGetUserDetail(params.id as string)

  return (
    <>
      <Title title="Users" />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {data ? (
          <div className="p-4 md:p-8 md:pb-16 bg-white rounded-lg shadow">
            <h1 className="text-xl mb-4">{`${data.data.first_name} ${data.data.last_name}`}</h1>
            <div className="grid grid-cols-2 gap-6">
              <Image
                className="rounded-lg"
                src={data.data.avatar}
                width={300}
                height={300}
                alt={data?.data.first_name}
              />
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <h2 className="font-medium">First Name</h2>
                  <span className="text-gray-400">{data.data.first_name}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="font-medium">Last Name</h2>
                  <span className="text-gray-400">{data.data.last_name}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="font-medium">Email</h2>
                  <span className="text-gray-400 break-words">
                    {data.data.email}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {isLoading && (
          <div className="grid grid-cols-2 animate-pulse p-4">
            <div>
              <div className="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
              <div className="w-32 h-32 bg-gray-300 rounded-lg"></div>
            </div>
            <div>
              <div className="mb-4">
                <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
              <div className="mb-4">
                <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
              <div className="mb-4">
                <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Button className="mt-9" onClick={() => router.back()}>
        Back
      </Button>
    </>
  )
}

export default UserDetail
