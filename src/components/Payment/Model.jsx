import {useDisclosure,HStack,Modal,ModalFooter,Button,useToast,Box,ModalBody,ModalContent,ModalOverlay,ModalHeader,ModalCloseButton,FormControl,FormLabel,Input, VStack, AlertDialog} from "@chakra-ui/react"
import React, { useState ,useRef} from "react"
import { BackdropExample } from "./Otp";
export default function CustomModal({onClose,onOpen,isOpen,}) {
    const toastRef = useRef();
    let toast = useToast();
    
   
    
    const initialRef = React.useRef(null)

    
    return (
      <>
      
        
        <Modal
          initialFocusRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Cedit/Debit Card</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}> <FormControl mt={4}>
                <FormLabel> Card Holder Name</FormLabel>
                <Input placeholder='Name'  type="text"/>
              </FormControl>


              <FormControl>
                <FormLabel>Enter Card Number</FormLabel>
                <Input  type="number"  ref={initialRef} placeholder='Card Number' />
              </FormControl>

             



              <HStack mt={4}>
                
              <FormControl >
                <FormLabel>Expary </FormLabel>
                <Input placeholder='MM/Y'  type="month-year"/>
              </FormControl>
              <FormControl>
                <FormLabel>CVV </FormLabel>
                <Input placeholder='CVV'  type="number"  minLength={3} maxLength={3}/>
              </FormControl>
                
                 </HStack>
            


            </ModalBody>
  
            <ModalFooter>
                 
            
               <Button colorScheme='blue' mr={3} onClick={()=>{
               onClose()
               toastRef.current = toast({
                position: "top",

                title: " Your OTP is ",
                description:
                  "Your OTP is  2468",
                status: "success",
                duration: 2000,
                isClosable: true,

              });
              }}> 
              
                Pay
              </Button>
             

              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        
      </>
    )
  }