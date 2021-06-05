const joinDomain = (path: string): string => {
  return process.env.NEXT_PUBLIC_API + path
}

const API = {
  topPage: {
    find: joinDomain('/api/top-page/find'),
  },
}

export { API }
