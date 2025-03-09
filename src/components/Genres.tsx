import { Avatar, Button, Heading, HStack, Skeleton, SkeletonCircle, Stack, Text } from "@chakra-ui/react";
import { memo, useContext } from "react";
import { GameQueryContext } from "../context/GameQueryContext";
import useBgImageCrop from "../hooks/useBgImageCrop";


const Genres = memo(function Genres() {
    const { selectedGenre, onChangeGenre, genresQuery } = useContext(GameQueryContext)
    const { data: genres, loading, error } = genresQuery

    const skeletonNumber = [1, 2, 3, 4, 5, 6]

    if (error) return null

    return (
        <Stack width="100%">
            <Button
                variant="ghost"
                onClick={() => onChangeGenre(null)}
            >
                <Heading as="h2" size="md" mb="2">
                    Genres
                </Heading>
            </Button>
            {loading &&
                skeletonNumber.map((_, index) =>
                    <HStack key={index}>
                        <SkeletonCircle size="10" />
                        <Skeleton height="10px" />
                    </HStack>
                )
            }

            {!loading &&
                genres?.map(genre => {
                    return (
                        <HStack key={genre.slug}>
                            <Avatar
                                name={genre.slug}
                                src={useBgImageCrop(genre.image_background)}
                                size="sm"
                            />
                            <Button
                                variant="link"
                                fontWeight={selectedGenre === genre.id ? "bold" : "normal"}
                                onClick={() => onChangeGenre(genre.id)}
                            >
                                <Text whiteSpace="wrap" textAlign="left">
                                    {genre.name}
                                </Text>
                            </Button>
                        </HStack>
                    )
                })}
        </Stack >
    )
})

export default Genres
