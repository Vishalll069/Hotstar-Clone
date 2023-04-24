import React, { useEffect, useState } from 'react'
import Carousal from './Carousal'
import './Subscribe.css';
import { RiArrowRightSLine } from "react-icons/ri";
import { BiMessage } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';


import {
    Box, Button, Flex, Heading, Text
    , Input, InputLeftAddon, InputGroup, PinInput, PinInputField,useToast
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

const OTP = ({number,pin}) => {

    const [input,setInput]=useState("");
    const [checkOTP,setCheck]=useState(false); 
    const toast=useToast();
    const navigate=useNavigate();

    const { isOpen, onOpen, onClose } = useDisclosure()

    console.log('pin',pin,"input", input);

    useEffect(()=>{
        if(input==pin){
            setCheck(true);
        }
    },[input]);

    useEffect(()=>{
        toast({
            position:'top',
            title: 'Your OTP is:',
            description: pin,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
    },[]);
 
    return (
        <>
            {/* <Button onClick={onOpen}>Open Modal</Button> */}


            <Modal isOpen={true} onClose={onClose} size={'4xl'} >
                <ModalOverlay bg={'black'}/>
                <ModalContent bg={'black'}>
                    <ModalCloseButton color={'white'} zIndex={'12'} size={'lg'} />
                    <ModalBody>
                        <Flex justifyContent={'center'} width={'100%'} color={'white'}>

                            {/* carousel */}
                            <Box  width={'50%'}>
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

                            <Box width={'80%'} ml={'50px'} pt={'20px'} mt={'20px'}>
                                <Text fontSize={'xl'} fontWeight={'bold'}>
                                    Enter OTP sent to
                                </Text>
                                <Text className='moblie_number' fontSize={'xl'}
                                mt={'20px'} color={'rgb(143,151,173)'}>+91{number}</Text><br />


                                {/* otp box  */}

                                <PinInput type='number'  size={'lg'}
                                 placeholder='    ' onChange={(e)=>setInput(e)}>
                                    <PinInputField mr='10px' borderColor={'rgb(143,151,173)'}
                                    _focus={{ borderColor:'rgb(143,151,173)', border:'1px'}}/>
                                    <PinInputField mr='10px' borderColor={'rgb(143,151,173)'}
                                    _focus={{ borderColor:'rgb(143,151,173)', border:'1px'}}/>
                                    <PinInputField mr='10px'  borderColor={'rgb(143,151,173)'}
                                    _focus={{ borderColor:'rgb(143,151,173)', border:'1px'}}/>
                                    <PinInputField mr='10px'  borderColor={'rgb(143,151,173)'}
                                    _focus={{ borderColor:'rgb(143,151,173)', border:'1px'}}/>
                                </PinInput>

                                <Flex justifyContent={'space-around'} mt={'20px'} ml={'-40px'}>
                                    <Box id='msgBox' display={'flex'}>
                                        <Box mt={'5px'} mr={'20px'} fontSize={'lg'}>
                                            <BiMessage />
                                        </Box>
                                        <Text fontSize={'md'} fontWeight={'bold'}  cursor={'pointer'}
                                        onClick={()=>{
                                            toast({
                                                position:'top',
                                                title: 'Your OTP is:',
                                                description: pin,
                                                status: 'success',
                                                duration: 9000,
                                                isClosable: true,
                                              })
                                        }}> Resend OTP</Text>
                                    </Box>

                                    <Box display={'flex'}>
                                        <Box id='phoneBox' mt={'5px'} mr={'20px'} fontSize={'lg'}>
                                            <FiPhoneCall />
                                        </Box>
                                        <Text fontSize={'md'} fontWeight={'bold'}> Request by call</Text>
                                    </Box>
                                </Flex>


                               <Box height={'100px'}>
                               {
                                    (checkOTP) && <Button bgGradient='linear(to-r, rgb(11,85,223), rgb(6,41,151))'
                                    size={'lg'} mt={'80px'} fontSize={'xl'}
                                    color={'white'} width={'80%'}
                                    className='shailesh'
                                    _hover={{ bg: 'blue', bgGradient: 'linear(to-r, rgb(11,85,223), rgb(6,41,151))' }}
                                    onClick={()=>{navigate('/subscribepage')}}
                                ><Box>Continue </Box>
                                    <Box ml={'3'}><RiArrowRightSLine /></Box>
                                </Button>
                                }
                               </Box>



                                <Flex ml={'80px'} mt={'100px'} position={'fixed'}>
                                    <Text ml={'-70px'} mr={'10px'} color={'rgb(143,151,173)'}>Having trouble logging in?</Text>
                                    <Text color='rgb(53,134,240)' fontWeight={'bold'}>Get Help</Text>
                                </Flex>
                            </Box>



                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}


export default OTP;