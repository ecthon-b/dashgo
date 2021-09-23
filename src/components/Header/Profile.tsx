import { Avatar, Box, Flex, Text } from "@chakra-ui/react";


export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Ecthon Almeida</Text>
                <Text color="gray.300" fontSize="small">
                    ecthon@gmail.com
                </Text>
            </Box>

            <Avatar
                size="md"
                name="Ecthon Almeida"
                src="https://github.com/ecthon.png"
            />
        </Flex>
    );
}