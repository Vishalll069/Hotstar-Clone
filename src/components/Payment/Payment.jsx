import React, { useState } from 'react'
import {Box,Text,Image,HStack, VStack, Center} from "@chakra-ui/react"

import { useDisclosure } from '@chakra-ui/react'

import CustomModal from './Model'
function Payment2(props) {
    
    const { isOpen, onOpen, onClose } = useDisclosure()

    
  return (
    <Box width="100%" justifyContent="center" display="Flex"  m="0" p="0"  backgroundColor="#f5f5f5">
        <Box w={{ base: '95%', md: '70%', lg: '35%' }}  boxShadow={'0px 0px 1px solid black'}>
           <Box   backgroundColor="#F5F5F5" width="100%" height='7%' m="0" p="0">
          
                 <Text m="0 5%"  backgroundColor="#F5F5F5"    p="1rem" fontSize={{ base: '10px', md: '15px', lg: '20px' }} fontWeight="bold">
                          Pay Securely
                </Text>
        
           </Box>
           <Box border=".5px solid gray"></Box>
           <HStack backgroundColor="#F5F5F5" m="0"  p="0" spacing="50%">
                 <Image
                      m="0 6%"
                      width={{ base: '40px', md: '60px', lg: '80px' }}
                      src='https://secure-media.hotstarext.com/web-assets/prod/images/DHLogo.svg'
                     alt='Hotstar logo'
                   />
                   <VStack   >
                     <Text  fontWeight="bold" fontSize={{ base: '10px', md: '15px', lg: '20px' }}>
                      899/Year
                     </Text>
                     <Text fontSize="lg"  fontWeight={'bold'} > 
                        24/04/2024
                     </Text>
                 </VStack>
                 
           </HStack>
           <CustomModal onClose={onClose} onOpen={onOpen} isOpen={isOpen}/>
           
           <Box backgroundColor     ="white" onClick={()=>{
               
                onOpen()
           }} >
          
          <>
          <Text m="5%" p={2}>CREDIT CARDS</Text>
          <HStack border="1px solid blue"  m="5%" p="0">
          <Text cursor={'pointer'} p="3" m="0" color="blue" fontSize="12" fontWeight="bold"  mr="40px">
          ENTER CARD NUMBER
         </Text>
         <>  <Image w="10%" src="https://th.bing.com/th?id=OIP.xVREsbEnxpFwYsgl4hNO7QHaDA&w=350&h=142&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"></Image>
            <Image w="7%" src=' https://th.bing.com/th/id/OIP.Dq8EBEyyYbEVqCOl3uMzOAHaEc?w=286&h=180&c=7&r=0&o=5&pid=1.7'></Image>
            <Image w="10%" src='https://th.bing.com/th/id/OIP.J35mz4lTYA8fDuNXYngMYQHaB-?w=331&h=93&c=7&r=0&o=5&pid=1.7 '></Image>
            <Image w="10%" src="https://th.bing.com/th/id/OIP.ig-VT_BYZOUH5yYz8EZ4FAHaEK?w=313&h=180&c=7&r=0&o=5&pid=1.7"></Image></>
          </HStack>
          </ >
           <hr  />
           <>
               <Text m="5%">DEBIT CARDS</Text>
               <HStack border="1px solid gray"  m="5%" p="0">
                  <Text cursor={'pointer'} p="3" m="0" color="gray" fontSize="12" fontWeight="bold"  mr="40px">
                     ENTER CARD NUMBER
                  </Text>
         <>  <Image w="10%" src="https://th.bing.com/th?id=OIP.xVREsbEnxpFwYsgl4hNO7QHaDA&w=350&h=142&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"></Image>
            <Image w="7%" src=' https://th.bing.com/th/id/OIP.Dq8EBEyyYbEVqCOl3uMzOAHaEc?w=286&h=180&c=7&r=0&o=5&pid=1.7'></Image>
            <Image w="10%" src='https://th.bing.com/th/id/OIP.J35mz4lTYA8fDuNXYngMYQHaB-?w=331&h=93&c=7&r=0&o=5&pid=1.7 '></Image>
            
         </>
          </HStack>
          
            
          </>
           <hr />
           <>
           <HStack><Text m="4%" mr="190px">NET BANKING</Text>
           <Text color="blue" fontWeight="700" fontSize="12px">MORE BANKS  </Text>
           </HStack>
          
          <HStack >
            <VStack>

            <Image w="40%" src="https://secure-media.hotstar.com/static/subscription/logo/banks/sbi.png"></Image>
            <>SBI</>
            </VStack>
          <VStack>
          <Image  w="40%"src="https://secure-media.hotstar.com/static/subscription/logo/banks/hdfc.png"></Image>
          <>HDFC</>
          </VStack>
         
         <VStack>
         <Image w="110%" src="https://secure-media.hotstar.com/static/subscription/web/images/bank/icici.svg"></Image>
            <>
            ICICI
            </>
         </VStack>
         <VStack>
         <Image w="40%" src="https://secure-media.hotstar.com/static/subscription/logo/banks/axis.png"></Image>
            <>
            AXIS
            </>
         </VStack>
         
         <VStack>
         <Image w="40%" src="https://secure-media.hotstar.com/static/subscription/logo/banks/idbi_bank_ltd.png"></Image>
            <>
            IDBI
            </>
         </VStack>
         
          </HStack>
          
          
          </>
           
           
          <hr /> 
           <Box border="0px solid gray" p="0"m="0">
           <HStack><Text m="3% 4%" mr="50%">WALLETS</Text>
           <Text color="blue" fontWeight="700" fontSize="12px">Pay Now </Text>
           </HStack>
          
          <HStack >
            <HStack>

            <Image w="12%" m="7%"  src="https://th.bing.com/th?id=OIP.zDdbKEbhOLAaHneazArlZQHaCd&w=350&h=115&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2 "></Image>
            <>Paytm</>
            
            </HStack>
          
         
          </HStack>
          
          <hr />
          </Box>
           
           <Box  border="0px solid gray" p="0"m="0">
           <Text m="3% 5%" p="0">UPI</Text>
           <HStack m="0" p="0">
            <Text m="0 5%" p="0" fontSize="30px" color="blue">+</Text>
            <Text color="blue">ENTER UPI </Text>
             
           </HStack >
           <Text m=" 0 21%" color="blue">ID</Text>
           <hr />
           </Box>
           <Box>
            <Text p={5} fontSize="10px" mb={1} textAlign="center">
            
            You will be charged ₹{props.price} once a year until you cancel.
            By proceeding, I confirm that I am over 18, and I agree to the Terms of use and Privacy policy
          
            </Text>
            
           </Box>
           <hr />
           </Box>
        </Box>
        
    </Box>







  )
}


export default Payment2
