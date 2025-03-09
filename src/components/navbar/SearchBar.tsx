import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { GameQueryContext } from "../../context/GameQueryContext";


export default function SearchBar() {
    const { onSearchGame } = useContext(GameQueryContext)
    const ref = useRef<HTMLInputElement>(null)

    return (
        <InputGroup display={{ base: "none", md: "flex" }}>
            <form onSubmit={(eve) => {
                eve.preventDefault()
                if(ref.current) {
                    const searchContent: string = ref.current.value
                    onSearchGame(searchContent)
                }
            }}>
                <InputLeftElement pointerEvents='none' top="-3px">
                    <IoSearch />
                </InputLeftElement>
                <Input
                    ref={ref}
                    type='text'
                    placeholder='Search Game'
                    size="sm"
                    borderRadius="lg"
                    variant="filled"
                    pl="35px"
                />
            </form>
        </InputGroup>
    )
}
