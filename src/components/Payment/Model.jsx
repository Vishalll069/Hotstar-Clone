import {useDisclosure,HStack,Text,Image,Modal,ModalFooter,Button,useToast,Box,ModalBody,ModalContent,ModalOverlay,ModalHeader,ModalCloseButton,FormControl,FormLabel,Input, VStack, AlertDialog} from "@chakra-ui/react"
import React, { useState ,useRef, useEffect} from "react"
import { useNavigate } from "react-router-dom"

export default function CustomModal({onClose,onOpen,isOpen,}) {
  const[name,setname]=useState("")
  const[state,sestate]=useState(true)

  const navigate=useNavigate();
    const toastRef = useRef();
    let toast = useToast();
    const initialRef = React.useRef(null)
    useEffect(()=>{
      if(name.length>0){
        sestate(true)
      }
      else{
        sestate(false)
      }
    },[name,state])

    
    return (
      <>
        <Modal
          initialFocusRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent h="400px" backgroundColor="white" >
            <Text  m="5%" fontSize="15px">Cedit/Debit Card</Text>
            <ModalCloseButton />

            <ModalBody h="60%"  p="2%" m="2%"  box-shadow ="xs" >
                 <Box boxShadow='lg' p='5' rounded='md' bg='white' h="85%">
                    <Text  color="blue"  fontSize="13px">
                      CARD NUMBER
                    </Text>
                    <Input  variant='flushed' placeholder="XXXXXXXXXXXXXXXX" >
                    
                    </Input>
                    <HStack p="10%">
                     <Box>
                     <Text  color="gray"  fontSize="13px">
                      VALIDITY
                    </Text>
                      <Input variant='flushed'  placeholder="MM/YY" fontSize="13px"></Input>
                      </Box> 
                      <Box>
                      <Text  color="gray"  fontSize="13px" placeholder="XXX">
                      CVV
                    </Text>
                     <Input variant='flushed'  placeholder="XXX" fontSize="13px"></Input>
                     </Box>
                     <Box>
                     <Text  color="gray"  fontSize="13px">
                      NAME ON CARD
                    </Text>
                      <Input variant='flushed'  placeholder="Add your name here" fontFamily="13px" value={name} onChange={(e)=>{
                        setname(e.target.value)
                      }}></Input>
                      </Box>
                     

                    </HStack>
                </Box>
                <Text fontSize="10px" p="5px">
                Your card will be securely stored as per RBI guidelines and you will be charged ₹899 every year until you cancel. Click pay securely to proceed.
                </Text>
            </ModalBody>
  
            <ModalFooter>
                 
              <Image mr="80px" width="50px" src="https://secure-media.hotstarext.com/web-assets/prod/images/DHLogo.svg"></Image>
               <Button colorScheme={state===false?"gray":"blue" }    mr={3} onClick={()=>{
                navigate('/Payment_Otp')
               onClose()
               toastRef.current = toast({
                position: "top",

                title: " Your OTP is ",
                description: '8542',
                status: "success",
                duration: 2000,
                isClosable: true,
                
              });
              }}> 
              
                PAY SECURELY
              </Button>
             

              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        
      </>
    )
  }