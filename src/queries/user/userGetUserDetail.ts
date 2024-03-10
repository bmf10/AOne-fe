import axios from "@/utils/axios"
import { useQuery } from "@tanstack/react-query"

export interface Response {
  readonly data: Data
  readonly support: Support
}

export interface Data {
  readonly id: number
  readonly email: string
  readonly first_name: string
  readonly last_name: string
  readonly avatar: string
}

export interface Support {
  readonly url: string
  readonly text: string
}

export default function useGetUserDetail(id: number | string) {
  return useQuery<Response>({
    queryKey: ["USER_DETAIL", id],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`user/${id}`, {
        signal,
      })
      return response?.data || {}
    },
  })
}
