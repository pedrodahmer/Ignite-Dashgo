import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile () {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Pedro Dahmer</Text>
                <Text color="gray.300" fontSize="small">pedrohd1213@gmail.com</Text>
            </Box>

            <Avatar size="md" name="Pedro Dahmer" src="http://github.com/pedrodahmer.png"/>
        </Flex>
    )
}