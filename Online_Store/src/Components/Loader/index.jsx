import { Box, Spinner } from "@chakra-ui/react"

export const Loader = () => {
    return (
        <Box className="w-16 h-16 mb-16">
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        </Box>
    )
}

