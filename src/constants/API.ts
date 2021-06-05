const joinDomain = (path: string): string => {
  return process.env.NEXT_PUBLIC_API + path
}

const API = {
  topPage: {
    find: joinDomain('/api/top-page/find'),
    findByAlias: joinDomain('/api/top-page/byAlias'),
  },
  product: {
    find: joinDomain('/api/product/find'),
  },
  review: {
    create: joinDomain('/api/review/create-demo'),
  },
}

export { API }
