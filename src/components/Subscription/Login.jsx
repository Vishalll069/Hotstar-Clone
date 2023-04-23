import React, { useEffect, useState } from 'react'
import Carousal from './Carousal'
import OTP from './OTP';
import './Subscribe.css';
import { RiArrowRightSLine } from "react-icons/ri";

import {
    Box, Button, Flex, Heading, Text
    , Input, InputLeftAddon, InputGroup
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

const Login = () => {
    const [state, setState] = useState("");
    const [btn,setbtn]=useState(false);
    const [otp,setotp]=useState(false);
    const [pin,setPin]=useState("");
  useEffect(()=>{
    if(state.length==10){
        setbtn(true);
    }
    else{
        setbtn(false);
    }

  },[state,btn])

  let handleOtp=()=>{
    let num = Math.floor(1000 + Math.random() * 9000);
    setPin(num);
     setotp(true);
  }

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            {/* <Button onClick={onOpen}>Open Modal</Button> */}


           {
            (otp) && <OTP number={state} pin={pin}/>
           }    

           {
            (!otp) &&  <Modal isOpen={true} onClose={onClose} size={'4xl'} >
            <ModalOverlay bg={'black'}/>
            <ModalContent bg={'rgb(22,24,31)'}>
                <ModalCloseButton color={'white'} zIndex={'12'} size={'lg'} />
                <ModalBody >
                    <Flex  justifyContent={'space-between'} color={'white'}>
                        
                        {/* carousel */}
                        <Box position="relative">
                            <Box
                                position="relative"
                                zIndex="-1"
                                bg="black"
                            // p={4}
                            // borderRadius="md"
                            // boxShadow="md"
                            >
                                <Carousal />
                            </Box>
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                right="0"
                                bottom="0"
                                bgGradient="linear(to-l, rgb(22,24,31), transparent)"
                                opacity="0.7"
                                borderRadius="md"
                            />
                        </Box>

                        {/* input login */}
                        <Box bg={'rgb(22,24,31)'} width={'50%'} zIndex={'10'}>
                            <Text as='h2' size='lg' my={'10'} fontWeight={'bold'}
                                fontSize={'2xl'} ml={'10px'} >
                                Log in or sign up to continue
                            </Text>

                            <Flex>
                                <Button disabled={'true'} size={'lg'} mr={'10px'}
                                    borderColor={'rgb(143,151,173)'} color={'rgb(143,151,173)'}
                                    bg={'black'} variant={'outline'} >+91</Button>
                                <Input type='tel' placeholder='Enter Mobile Number'
                                    size={'lg'} width={'70%'} borderColor={'rgb(143,151,173)'}
                                    _focus={{borderColor:'rgb(143,151,173)',border:'1px'}}
                                    onChange={(e) => { setState(e.target.value) }} />
                            </Flex>
                            <Text fontSize={'10px'} mt={'5px'} color={'rgb(143,151,173)'} width={'95%'}>By proceeding you confirm that you are above 18 years of age and agree to the Privacy Policy & Terms of Use</Text>

                            {/* otp button  */}
                          <Box height={'100px'} >
                          {
                            (btn) && 
                             <Button bgGradient='linear(to-r, rgb(11,85,223), rgb(6,41,151))'
                             size={'lg'} mt={'80px'} fontSize={'xl'}
                             color={'white'} width={'100%'}
                             className='shailesh'
                             _hover={{ bg: 'blue', bgGradient: 'linear(to-r, rgb(11,85,223), rgb(6,41,151))' }}
                              onClick={handleOtp}
                        ><Box>Get OTP </Box>
                             <Box ml={'3'}><RiArrowRightSLine /></Box>
                         </Button>
                           }
                          </Box>


                            {/* end */}
                            <Flex  ml={'80px'} mt={'100px'} position={'fixed'}>
                                <Text mr={'10px'} color={'rgb(143,151,173)'}>Having trouble logging in?</Text>
                                <Text color='rgb(53,134,240)' fontWeight={'bold'}>Get Help</Text>
                            </Flex>



                        </Box>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>  
           }

        </>
    )
}

export default Login