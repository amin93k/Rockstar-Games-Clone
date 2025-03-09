import { Button, Flex, Spacer, useBreakpointValue, useColorMode, useDisclosure } from "@chakra-ui/react";
import { memo } from "react";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Aside from "./Aside";


const Navbar = memo(function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const iconSize = useBreakpointValue({ base: "16px", md: "22px" })

    return (
        <Flex alignItems="center" gap='4'>
            <Logo />
            <Spacer />
            <SearchBar />
            <Spacer />
            <Button variant='ghost' onClick={toggleColorMode} size="sm">
                {colorMode === "dark" ?
                    <MdOutlineWbSunny size={iconSize} /> :
                    <FaRegMoon size={iconSize} />
                }
            </Button>
            <Button
                variant='ghost'
                size="sm"
                onClick={onOpen}
                display={{base: "flex", md: "none"}}
                >
                <FiMenu size={iconSize} />
                <Aside
                    isOpen={isOpen}
                    onClose={onClose}
                />
            </Button>
        </Flex>
    )
})

export default Navbar