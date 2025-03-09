interface GeneralType {
    id: number
    name: string
    slug: string
}

export interface Platform extends GeneralType {
}

export interface Game extends GeneralType {
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: string
    short_screenshots: {id: number, image: string}[]
}

export interface GamesResponse {
    count: number
    next: string
    previous: string
    results: Game[]
}


export interface Genre extends GeneralType {
    games_count: number
    image_background: string
    games: GeneralType[]
}

export interface GenresResponse {
    count: number
    results: Genre[]
}