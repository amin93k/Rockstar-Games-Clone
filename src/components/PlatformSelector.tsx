import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useData from "../hooks/useData";
import { GeneralType } from "../type/game";
import { useContext, useState } from "react";
import { GameQueryContext } from "../context/GameQueryContext";
import { IoIosArrowDown } from "react-icons/io";

// PlatformSelector component for filtering games by platform
export default function PlatformSelector() {
  const { data: platforms, error } = useData<GeneralType>("/platforms/lists/parents")
  // Get platform selection handler from context
  const { onSelectedPlatform } = useContext(GameQueryContext)
  const [menuName, setMenuName] = useState('All platforms')

  if (error) {
    return null
  }

  return (
    <Menu>
      {/* Dropdown button showing selected platform */}
      <MenuButton as={Button} rightIcon={<IoIosArrowDown />} size="sm">
        {menuName}
      </MenuButton>
      <MenuList >
        {/* Option to show all platforms */}
        <MenuItem
          onClick={() => {
            onSelectedPlatform(null)
            setMenuName("All platforms")
          }}
        >
          All platforms
        </MenuItem>
        {/* Create menu items */}
        {platforms.map(platform => (
          <MenuItem
            key={platform.slug}
            onClick={() => {
              onSelectedPlatform(platform.id)
              setMenuName(platform.name)
            }}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
