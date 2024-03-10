import axios from "@/utils/axios"
import { useQuery } from "@tanstack/react-query"

interface Params {
  readonly page: number
  readonly per_page: number
}

export interface Response {
  readonly page: number
  readonly per_page: number
  readonly total: number
  readonly total_pages: number
  readonly data: Data[]
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

export default function useGetUser(params: Params) {
  return useQuery<Response>({
    queryKey: ["USER", params.page, params.per_page],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`user`, {
        signal,
        params: { ...params, page: params?.page },
      })
      return response?.data || {}
    },
  })
}
