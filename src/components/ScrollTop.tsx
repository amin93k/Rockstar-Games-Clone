import { Button, Flex } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ScrollTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            const windowHeight = document.documentElement.clientHeight + 200

            if (window.scrollY > windowHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!isVisible) return null

    return (
        <Flex 
            justifyContent="right" 
            position="fixed"
            bottom="4"
            right="4"
            zIndex="999"
        >
            <Button
                onClick={handleScrollToTop}
                borderRadius="full"
                colorScheme="gray"
                // bg="blackAlpha.700"
                variant="solid"
            >
                <FaArrowUp />
            </Button>
        </Flex>
    )
}
