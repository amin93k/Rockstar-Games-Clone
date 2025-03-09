import { Alert, Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import GameCard from "./GameCard"
import SkeletonGameCard from "./SkeletonGameCard"
import ErrorAlert from "./ErrorAlert"
import { Game } from "../type/game"
import useData from "../hooks/useData"
import { useContext, useEffect, useRef, useState } from "react"
import { GameQueryContext } from "../context/GameQueryContext"
import { IoAlertCircleOutline } from "react-icons/io5";

/**
 * GameGrid component displays a grid of game cards with infinite scrolling functionality
 * Handles loading states, errors, and no results scenarios
 */

export default function GameGrid() {
    // Destructure values from GameQueryContext for filtering and pagination
    const {
        selectedGenre, // selected game genre for filtering 
        selectedPlatform, // selected platform for filtering 
        searchGame, // search term entered by user
        sort, // sorting criteria selected by user
        pagination, // current page number
        increasePagination // function to increment page number
    } = useContext(GameQueryContext)


    const { data: games, loading, error } = useData<Game>(
        "/games",
        {
            params: {
                page_size: 21,
                genres: selectedGenre,
                parent_platforms: selectedPlatform ? selectedPlatform : null,
                search: searchGame,
                ordering: sort ? sort : null,
                page: pagination
            }
        }
    )

    const [loadMore, setLoadMore] = useState(true)
    const loadMoreRef = useRef(null)

    // Reset loadMore state when filters change
    useEffect(() => {
        if (!error)
            setLoadMore(true)
    }, [selectedGenre, selectedPlatform, searchGame, sort, error])

    // Setup intersection observer for infinite scrolling
    useEffect(() => {
        if (error) {
            setLoadMore(false)
            return
        }

        // Create observer to detect when user scrolls to bottom
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            if (entry.isIntersecting && !error && !loading) {
                increasePagination()
            }
        }, {
            threshold: 1.0
        })

        // Start observing the load more element
        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current)
        }

        return () => {
            if (loadMoreRef.current)
                observer.unobserve(loadMoreRef.current)
        }
    }, [loading, error, loadMoreRef])


    if (error) {
        if (error !== "Invalid page.")
            return (
                <ErrorAlert error={error} />
            )
    }

    if (!games.length && !loading)
        return (
            <Alert
                status='warning'
                borderRadius="10"
                alignItems="center"
                justifyContent="center "
                gap="2"
            >
                <IoAlertCircleOutline size="30px" />
                Games not found
            </Alert>
        )

    return (
        <>
            <SimpleGrid minChildWidth='250px' spacing={6} mb="5">
                {/* Show skeleton loader for initial load */}
                {loading && pagination === 1 && <SkeletonGameCard />}

                {games.map((game) =>
                    <GameCard key={game.id} game={game} />
                )}
            </SimpleGrid>

            {/* Show loading spinner for infinite scroll */}
            {loadMore &&
                <Center justifyContent="center" my="5">
                    <Spinner size="lg" ref={loadMoreRef} />
                </Center>
            }
        </>
    )
}
