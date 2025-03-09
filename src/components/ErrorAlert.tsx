import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react";

interface Props {
    error: string
}

export default function ErrorAlert({ error }: Props) {
    return (
        <Alert
            status='error'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
        >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
                Sorry An error occurred!
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
                {error}
            </AlertDescription>
        </Alert>
    )
}
