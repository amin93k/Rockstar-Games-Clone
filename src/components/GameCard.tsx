import { Badge, Card, CardBody, Flex, Heading, HStack, Image, Spacer, Stack }
    from "@chakra-ui/react";
import { Game } from "../type/game";
import PlatformListIcon from "./PlatformListIcon";
import useBgImageCrop from "../hooks/useBgImageCrop";
import { useEffect, useState } from "react";

interface Props {
    game: Game
}

/**
 * GameCard component displays game information in a card format
 * Features:
 * - Shows game image that cycles through screenshots on hover
 * - Displays platform icons
 * - Shows metacritic score if available
 * - Shows game name
 */
export default function GameCard({ game }: Props) {
    // Get cropped version of main background image
    const mainBgImage: string = useBgImageCrop(game.background_image)
    const [bgImage, setBgImage] = useState<string>(mainBgImage)
    const [isHovered, setIsHovered] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(1)

    const screenShotImages = game.short_screenshots?.map(image => useBgImageCrop(image.image))

    // Effect to handle image cycling on hover
    useEffect(() => {
        const imagesNumber = screenShotImages.length
        let interval: number | null = null

        if (isHovered && imagesNumber > 0) {
            setBgImage(screenShotImages[currentImageIndex])

            interval = setInterval(() => {
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % imagesNumber)
                setBgImage(screenShotImages[currentImageIndex])
            }, 1000)
        }

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    }, [isHovered, currentImageIndex])

    const handleMouseOver = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        setCurrentImageIndex(1) // Reset index to main image
        setBgImage(mainBgImage)
    }

    return (
        <Card borderRadius={15} overflow="hidden">
            <Image
                src={bgImage}
                alt={game.name}
                transition="ease-in-out"
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            />
            <CardBody>
                <Stack spacing='4'>
                    <Flex >
                        <HStack >
                            {game.parent_platforms.map(({ platform }) =>
                                <PlatformListIcon platform={platform} key={platform.id} />
                            )}
                        </HStack>
                        <Spacer />

                        {game.metacritic &&
                            <Badge variant="subtle" opacity="0.7" fontSize="14px">
                                {game.metacritic}
                            </Badge>
                        }
                    </Flex>
                    <Heading size="md" as='h2'>
                        {game.name}
                    </Heading>
                </Stack>
            </CardBody>
        </Card>
    )
}
