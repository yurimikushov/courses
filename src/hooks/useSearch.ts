import { useRouter } from "next/router"

const useSearch = (): ((searchQuery: string) => void) => {
  const router = useRouter()

  return (searchQuery: string): void => {
    router.push({
      pathname: '/search',
      query: {
        q: searchQuery,
      },
    })
  }
}

export { useSearch }
