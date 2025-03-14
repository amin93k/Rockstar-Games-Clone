import { HStack, Image, Text } from '@chakra-ui/react'

export default function Logo() {
    return (
        <HStack flexShrink="0">
            <Image
                src="/assets/RAGE_Technology_Group_Logo.png"
                alt='logo'
                boxSize='30px'
                objectFit='cover'
            />
            <Text as='b'>Rockstar Games</Text>
        </HStack>
    )
}
