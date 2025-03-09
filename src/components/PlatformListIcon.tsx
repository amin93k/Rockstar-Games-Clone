import { Icon, Tooltip } from "@chakra-ui/react";
import { Platform } from "../type/game";
import { FaWindows, FaApple, FaPlaystation, FaLinux, FaXbox, FaAndroid } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import { SiSega, SiCommodore, SiAtari } from "react-icons/si";
import { IconType } from "react-icons";

interface Props {
    platform: Platform
}

interface PlatformIcons {
    [key: string]: IconType;
}

export default function PlatformListIcon({ platform }: Props) {
    const iconsMap: PlatformIcons = {
        "PC": FaWindows,
        "Apple Macintosh": FaApple,
        "PlayStation": FaPlaystation,
        "Linux": FaLinux,
        "Xbox": FaXbox,
        "Android": FaAndroid,
        "Nintendo": BsNintendoSwitch,
        "Web": TbWorldWww,
        "iOS": MdPhoneIphone,
        "SEGA": SiSega,
        "Commodore / Amiga": SiCommodore,
        "Atari": SiAtari 
    }

    return (
        <Tooltip label={platform.name}>
            <span>
                <Icon as={iconsMap[platform.name]} boxSize="14px" opacity="0.7"/>
            </span>
        </Tooltip>
    )
}
