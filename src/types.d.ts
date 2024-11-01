declare type reponseApi = {
  total_pages: number
  current_page: number
  results: Movie[]
}

declare type Movie = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

declare type SearchParams = {
  search: string
  page?: number
  year?: string
}
