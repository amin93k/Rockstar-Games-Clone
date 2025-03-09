import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GameQueryContext } from "../context/GameQueryContext";

export default function SortedOrder() {
    const { sort, onSort } = useContext(GameQueryContext)

    const sortMap = [
        { orderName: "Relevance", query: "" },
        { orderName: "Date added", query: "-created" },
        { orderName: "Name", query: "-name" },
        { orderName: "Release date", query: "-released" },
        { orderName: "Popularity", query: "-added" },
        { orderName: "Average rating", query: "-rating" }
    ]

    const menuName =sortMap.find(item => {
        if (item.query === sort)
            return item.orderName
    })
    
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<IoIosArrowDown />} size="sm">
                Order by : {menuName?.orderName}
            </MenuButton>
            <MenuList >
                {sortMap.map(item => (
                    <MenuItem
                        key={item.orderName}
                        onClick={() => onSort(item.query)}
                    >
                        {item.orderName}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}
