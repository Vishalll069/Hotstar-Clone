import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import {Box, Button,useToast,Input,HStack,VStack,Text} from "@chakra-ui/react"
function Otp() {
    const[otp,setotp]=useState()
    const toastRef = useRef();
    let toast = useToast();
    const navigate=useNavigate();
    
  return (
    <VStack  backgroundColor="rgb(34,35,38)" color={'white'} height={{ base: '600px', sm: '500px', md: '300px' }}  width={{ base: '700px', sm: '600px', md: '400px' }}display="flex" m="auto" borderRadius="2%" >
        
    <Text color ="red"  p="10px" m="20px" >Do not Share Your OTP</Text>
    <Input width="60%" placeholder="Enter OTP" value={otp} onChange={(e)=>{
        setotp(e.target.value)
        
    }}></Input>
    <Button width="30%" color="white" backgroundColor="blue" onClick={()=>{
        if(otp==="8542"){
            toastRef.current = toast({
                position: "top",
    
                title: "Payment Succesfull.",
                description:
                  "Enjoy you Subcription .",
                status: "success",
                duration: 2000,
                isClosable: true,
                
              });
            navigate('/');  
        }
        else{
            toastRef.current = toast({
                position: "top",
    
                title: "Transaction Failed .",
                description:
                  "Enter Corret password.",
                status: "error",
                duration: 2000,
                isClosable: true,
    
              });
        }
          
    }}>Submit</Button>
    </VStack>
  )
}

export default Otp
