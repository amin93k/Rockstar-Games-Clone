import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, VStack } from "@chakra-ui/react"
import Logo from "./Logo"
import Genres from "../Genres"
import SearchBar from "./SearchBar"

type props = {
  onClose: () => void
  isOpen: boolean
}

export default function Aside({ onClose, isOpen }: props) {

  return (
    <Drawer
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
      isFullHeight={true}
    >
      <DrawerOverlay />

      <DrawerContent>
        <DrawerCloseButton top="1rem" />

        <DrawerHeader>
          <Logo />
        </DrawerHeader>

        <DrawerBody padding="0">
          <VStack padding="1rem" gap="1rem">
            <SearchBar />
            <Genres />
          </VStack>
        </DrawerBody>

      </DrawerContent>
    </Drawer>
  )
}
