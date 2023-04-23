import { HamburgerIcon } from '@chakra-ui/icons'
import { HStack ,Box,Flex, Spacer,Image} from '@chakra-ui/react'
import React from 'react'

export const Navbar2 = () => {
  return (
    <Box display={["block","block","block","none"]} color={"white"} p={"2%"} >
        <Flex>
            <Box size={"35px"}>
                <HamburgerIcon fontSize={"35px"} />
            </Box>
            <Spacer/>
            <Box>
                <Image src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" />
            </Box>

        </Flex>

    </Box>
  )
}
