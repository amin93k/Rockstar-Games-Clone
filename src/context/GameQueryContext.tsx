import { createContext, ReactElement, useCallback, useState } from "react"
import { Genre } from "../type/game"
import useData from "../hooks/useData"

interface GameQuery {
    selectedGenre: number | null
    selectedPlatform: number | null
    searchGame: string | null
    sort: string | null
    pagination: number
    genresQuery: { data: Genre[], loading: boolean, error: string | undefined }
    onChangeGenre: (genreId: number | null) => void
    onSelectedPlatform: (platformID: number | null) => void
    onSearchGame: (searchContent: string) => void
    onSort: (searchContent: string) => void
    increasePagination: () => void
}

interface Props {
    children: ReactElement
}

export const GameQueryContext = createContext<GameQuery>({
    selectedGenre: null,
    selectedPlatform: null,
    searchGame: null,
    sort: null,
    pagination: 1,
    genresQuery: { data: [], loading: true, error: undefined },
    onChangeGenre: () => { },
    onSelectedPlatform: () => { },
    onSearchGame: () => { },
    onSort: () => { },
    increasePagination: () => { },
})


export const GameQueryProvider = ({ children }: Props) => {
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null)
    const [selectedPlatform, setSelectedPlatform] = useState<number | null>(null)
    const [searchGame, setSearchGame] = useState<string | null>(null)
    const [sort, setSort] = useState<string>("")
    const [pagination, setPagination] = useState(1)
    const genresQuery = useData<Genre>("/genres")

    const onChangeGenre = useCallback((genreID: number | null) => {
        setSelectedGenre(genreID)
        setPagination(1)
    }, [])

    const onSelectedPlatform = useCallback((platformID: number | null) => {
        setSelectedPlatform(platformID)
        setPagination(1)
    }, [])

    const onSearchGame = useCallback((searchContent: string | null) => {
        setSearchGame(searchContent)
        setPagination(1)
    }, [])

    const onSort = useCallback((sort: string) => {
        setSort(sort)
        setPagination(1)
    }, [])

    const increasePagination = () => setPagination(prev => prev + 1)

    return (
        <GameQueryContext.Provider
            value={{
                selectedGenre,
                selectedPlatform,
                searchGame,
                sort,
                pagination,
                genresQuery,
                onSearchGame,
                onChangeGenre,
                onSelectedPlatform,
                onSort,
                increasePagination
            }}
        >
            {children}
        </GameQueryContext.Provider>
    )
}

