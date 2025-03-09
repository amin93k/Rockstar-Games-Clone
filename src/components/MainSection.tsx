import { HStack } from "@chakra-ui/react";
import GameGrid from "./GameGrid";
import PlatformSelector from "./PlatformSelector";
import SortedOrder from "./SortedOrder";

export default function MainSection() {

    return (
        <>
            <HStack alignItems="center" mb="5">
                <PlatformSelector />
                <SortedOrder />
            </HStack>
            <GameGrid />
        </>
    )
}
