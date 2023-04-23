import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Subscribe.css'
import Slider from './Slider';
import { useState } from 'react';
import {
  Box, Flex, Image, Heading,
  Select, Button, Text, Stack, ButtonGroup
} from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { TbCheck } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { RiArrowRightSLine } from "react-icons/ri";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";

// import Footer from './Footer';

export const Subscribe = () => {

  const [isPremium, setPremium] = useState(false);

  const [button, setButton] = useState(false);

  const [isSuper, setSuper] = useState(true);

  const navigate = useNavigate();

  const Super = () => {
    setPremium(false);
    setSuper(true);
  }

  const Premium1 = () => {
    setPremium(true);
    setButton(false);
    setSuper(false);
  }

  const Premium2 = () => {
    setPremium(true);
    setButton(true);
    setSuper(false);
  }

  // console.log(isPremium);


  let gold = {
    color: 'rgb(255,204,117)'
  }


  if (isPremium) {
    return (
      <Box bg={"#0F1014"}>

        <Flex>
          {/* <button >abc</button> */}

          {/* left box */}
          <Box mx={'10'} width={'50%'} height={'112vh'}>

            <Box className='carousel' height={'112vh'} zIndex={'0'}>
              <Slider />
            </Box>

            <Box className='leftA' zIndex={'2'} position={'absolute'} mt={'-112vh'}>


              <Flex gap={'4'} my={'4'}>
                <Button colorScheme={'black'} mt={'3'}
                  fontSize={'4xl'}><RxCross2 ></RxCross2></Button>
                <Image src='https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/v1656431456/web-images/logo-d-plus.svg' width={'80px'} zIndex={'2'} />
              </Flex>


              <Box boxSize='250px' my={'8'} border={'2px'} borderColor={'white'}>
                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' zIndex={'2'} />
              </Box>

              <Box >
                <Heading as='h2' size='xl' color={'white'} >
                  Subscribe now and start
                </Heading>
                <Heading as='h2' size='xl' color={'white'} >
                  streaming
                </Heading>
              </Box>
            </Box>


          </Box>

          {/* right box    bg={'rgb(14,16,20)'}  */}
          <Box fontSize={'lg'} width={'50%'} mr={'12'}>
            {/* login language buttons */}
            <Box display={'flex'} gap={'6'} justifyContent={'end'} my={'5'}>
              <Box bg={'rgb(34,35,38)'}>
                <Select bg={'rgb(34,35,38)'} color={'rgb(215,220,229)'} variant='filled'
                  fontWeight={'bold'} fontSize={'lg'} size={'lg'} width={'150px'}
                  _hover={{ bg: 'rgb(34,35,38)' }}  >
                  <option value='English' style={{ backgroundColor: "black" }}>English</option>
                  <option value='Hindi' style={{ backgroundColor: "black" }}>Hindi</option>
                  <option value='Tamil' style={{ backgroundColor: "black" }}>Tamil</option>
                  <option value='Telugu' style={{ backgroundColor: "black" }}>Telugu</option>
                </Select>
              </Box>

              <Button bgGradient='linear(to-r, rgb(11,85,223), rgb(6,41,151))' fontSize={'xl'}
                py={'2'} px={'8'} color={'white'} size={'lg'} className='shailesh'
                _hover={{ bg: 'blue', bgGradient: 'linear(to-r, rgb(11,85,223), rgb(6,41,151))' }}
                onClick={() => { navigate('/login') }}>Login</Button>
            </Box>

            {/* subscription plan */}
            <TableContainer>
              <Table variant='unstyled' size={'md'} color={'white'}>
                <Thead>
                  <Tr>
                    <Th>  </Th>
                    <Th color={'rgb(112,122,148)'} fontSize={'md'}>Super</Th>
                    <Th bg={'rgb(31,33,42)'} color={'rgb(255,204,117)'} fontSize={'md'}>Premium</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td><Box>All Content</Box>
                      <Box color={'rgb(112,122,148)'}>Movies,Live Sports,TV, Specials</Box></Td>
                    <Td fontSize={'3xl'} color={'rgb(112,122,148)'}><TbCheck /></Td>
                    <Td fontSize={'3xl'} bg={'rgb(31,33,42)'}><TbCheck /></Td>
                  </Tr>

                  <Tr>
                    <Td>Watch on TV or Laptop</Td>
                    <Td fontSize={'3xl'} color={'rgb(112,122,148)'}><TbCheck /></Td>
                    <Td fontSize={'3xl'} bg={'rgb(31,33,42)'}><TbCheck /></Td>
                  </Tr>

                  <Tr>
                    <Td><Box>
                      Ads free movies and shows (except
                    </Box>
                      <Box>
                        Sports
                      </Box>
                    </Td>
                    <Td fontSize={'3xl'} color={'rgb(112,122,148)'}><RxCross2 /></Td>
                    <Td fontSize={'3xl'} bg={'rgb(31,33,42)'}><TbCheck /></Td>
                  </Tr>

                  <Tr>
                    <Td>Number of devices that can be logged in</Td>
                    <Td color={'rgb(112,122,148)'}>2</Td>
                    <Td bg={'rgb(31,33,42)'}>4</Td>
                  </Tr>

                  <Tr>
                    <Td>Max video quality</Td>
                    <Td color={'rgb(112,122,148)'}>
                      <Box>Full HD</Box>
                      <Box>1080p</Box>
                    </Td>
                    <Td bg={'rgb(31,33,42)'}>
                      <Box>4k</Box>
                      <Box>2160p</Box>
                    </Td>
                  </Tr>

                  <Tr>
                    <Td>
                      <Box>Max audio quality</Box>
                      <Box color={'rgb(112,122,148)'}>Atmos available on select titles only</Box>
                    </Td>
                    <Td color={'rgb(112,122,148)'}>Dolby Atmos</Td>
                    <Td bg={'rgb(31,33,42)'}>Dolby Atmos</Td>
                  </Tr>
                </Tbody>

              </Table>
            </TableContainer>



            {/* subscription plan buttons */}
            <Flex my={'6'} gap={'4'}>
              <Button display={'block'} py={'12'} px={'16'} colorScheme='black' border={'2px'}
                color={'rgb(225,230,240)'} variant='outline'
                borderColor={'rgb(37,40,51)'} justifyContent={'left'} onClick={Super}>
                <Box mt={'-5'} >
                  <Text fontSize={'2xl'}>Super</Text>
                  <Text fontSize={'2xl'}>₹899/year</Text>
                </Box>
              </Button>

              <Button display={'block'} py={'12'} px={'16'} colorScheme='black' border={'2px'}
                color={'rgb(225,230,240)'} variant='outline' borderColor={'rgb(37,40,51)'} onClick={Premium1}
                _focus={{ border: '2px', borderColor: 'white' }} className={!button ? 'after' : ''}>
                <Box mt={'-5'}>
                  <Text fontSize={'2xl'}>Premium</Text>
                  <Text fontSize={'2xl'}>₹1499/year</Text>
                </Box>
              </Button>

              <Button display={'block'} py={'12'} px={'16'} colorScheme='black' border={'2px'}
                color={'rgb(225,230,240)'} variant='outline' borderColor={'rgb(37,40,51)'} onClick={Premium2}
                _focus={{ border: '2px', borderColor: 'white' }} className={button ? 'after' : ''}>
                <Box mt={'-5'} >
                  <Text fontSize={'2xl'}>Premium</Text>
                  <Text fontSize={'2xl'}>₹299/month</Text>
                </Box>
              </Button>
            </Flex>

            {/* continue button */}
            <Box width='100%'>
              <Button bgGradient='linear(to-r, rgb(11,85,223), rgb(6,41,151))'
                size={'lg'} py={'8'} fontSize={'2xl'}
                color={'white'} width={'100%'}
                className='shailesh'
                _hover={{ bg: 'blue', bgGradient: 'linear(to-r, rgb(11,85,223), rgb(6,41,151))' }}
                onClick={()=>{navigate('/payment')}}
              ><Box>Continue with Premium </Box>
                <Box mb={'-1.5'} ml={'2'}><RiArrowRightSLine /></Box>
              </Button>
            </Box>

          </Box>
        </Flex>

        {/* Footer */}


      </Box>
    )
  }
  else {
    return (
      <Box bg={"#0F1014"}>
        <Flex>
          {/* left box */}
          <Box mx={'10'} width={'50%'} height={'100vh'}>

            <Box className='carousel' height={'100vh'} zIndex={'0'}>
              <Slider />
            </Box>

            <Box className='leftA' zIndex={'2'} position={'absolute'} mt={'-112vh'}>


              <Flex gap={'4'} my={'4'}>
                <Button colorScheme={'black'} mt={'3'}
                  fontSize={'4xl'}><RxCross2 ></RxCross2></Button>
                <Image src='https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/v1656431456/web-images/logo-d-plus.svg' width={'80px'} zIndex={'2'} />
              </Flex>

              <Box boxSize='250px' my={'8'} border={'2px'} borderColor={'white'}>
                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' zIndex={'2'} />
              </Box>

              <Box >
                <Heading as='h2' size='xl' color={'white'} >
                  Subscribe now and start
                </Heading>
                <Heading as='h2' size='xl' color={'white'} >
                  streaming
                </Heading>
              </Box>
            </Box>


          </Box>

          {/* right box  */}
          <Box bg={'"#0F1014"'} fontSize={'lg'} width={'50%'} mr={'12'}>
            {/* login language buttons */}
            <Box display={'flex'} gap={'6'} justifyContent={'end'} my={'5'}>
              <Box bg={'rgb(34,35,38)'}>
                <Select bg={'rgb(34,35,38)'} color={'rgb(215,220,229)'} variant='filled'
                  fontWeight={'bold'} fontSize={'lg'} size={'lg'} width={'150px'} _hover={{ bg: 'rgb(34,35,38)' }} >
                  <option value='English' style={{ backgroundColor: "black" }}>English</option>
                  <option value='Hindi' style={{ backgroundColor: "black" }}>Hindi</option>
                  <option value='Tamil' style={{ backgroundColor: "black" }}>Tamil</option>
                  <option value='Telugu' style={{ backgroundColor: "black" }}>Telugu</option>
                </Select>
              </Box>

              <Button bgGradient='linear(to-r, rgb(11,85,223), rgb(6,41,151))' fontSize={'xl'}
                py={'2'} px={'8'} color={'white'} size={'lg'} className='shailesh'
                _hover={{ bg: 'blue', bgGradient: 'linear(to-r, rgb(11,85,223), rgb(6,41,151))' }}
                onClick={() => { navigate('/login') }}>Login</Button>
            </Box>

            {/* subscription plan */}
            <TableContainer bg={"#0F1014"}>
              <Table variant='unstyled' size={'md'} color={'white'} my={"2%"}>
                <Thead>
                  <Tr>
                    <Th>  </Th>
                    <Th bg={'rgb(31,33,42)'} color={'rgb(255,204,93)'} fontSize={'md'}>Super</Th>
                    <Th color={'rgb(112,122,148)'} fontSize={'md'}>Premium</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td  ><Box>All Content</Box>
                      <Box color={'rgb(112,122,148)'}>Movies,Live Sports,TV, Specials</Box></Td>
                    <Td fontSize={'3xl'} bg={'rgb(31,33,42)'}><TbCheck /></Td>
                    <Td fontSize={'3xl'} color={'rgb(112,122,148)'}><TbCheck /></Td>
                  </Tr>

                  <Tr>
                    <Td>Watch on TV or Laptop</Td>
                    <Td fontSize={'3xl'} bg={'rgb(31,33,42)'}><TbCheck /></Td>
                    <Td fontSize={'3xl'} color={'rgb(112,122,148)'}><TbCheck /></Td>
                  </Tr>

                  <Tr>
                    <Td><Box>
                      Ads free movies and shows (except
                    </Box>
                      <Box>
                        Sports
                      </Box> </Td>
                    <Td fontSize={'3xl'} bg={'rgb(31,33,42)'}><RxCross2 /></Td>
                    <Td fontSize={'3xl'} color={'rgb(112,122,148)'}><TbCheck /></Td>
                  </Tr>

                  <Tr>
                    <Td>Number of devices that can be logged in</Td>
                    <Td bg={'rgb(31,33,42)'}>2</Td>
                    <Td color={'rgb(112,122,148)'}>4</Td>
                  </Tr>

                  <Tr>
                    <Td>Max video quality</Td>
                    <Td bg={'rgb(31,33,42)'}>
                      <Box>Full HD</Box>
                      <Box>1080p</Box>
                    </Td>
                    <Td color={'rgb(112,122,148)'}>
                      <Box>4k</Box>
                      <Box>2160p</Box>
                    </Td>
                  </Tr>

                  <Tr>
                    <Td>
                      <Box>Max audio quality</Box>
                      <Box color={'rgb(112,122,148)'}>Atmos available on select titles only</Box>
                    </Td>
                    <Td bg={'rgb(31,33,42)'}>Dolby Atmos</Td>
                    <Td color={'rgb(112,122,148)'}>Dolby Atmos</Td>
                  </Tr>
                </Tbody>

              </Table>
            </TableContainer>



            {/* subscription plan buttons */}
            <Flex my={'6'} gap={'4'}>
              <Button display={'block'} py={'12'} px={'16'} colorScheme='black' border={'2px'}
                color={'rgb(225,230,240)'} variant='outline' borderColor={'rgb(37,40,51)'} onClick={Super}
                _focus={{ border: '2px', borderColor: 'white' }} className='after' id='a'>
                <Box mt={'-5'} >
                  <Text fontSize={'2xl'}>Super</Text>
                  <Text fontSize={'2xl'}>₹899/year</Text>
                </Box>
              </Button>

              <Button display={'block'} py={'12'} px={'16'} colorScheme='black' border={'2px'}
                color={'rgb(225,230,240)'} variant='outline' borderColor={'rgb(37,40,51)'}>
                <Box mt={'-5'} onClick={Premium1}>
                  <Text fontSize={'2xl'}>Premium</Text>
                  <Text fontSize={'2xl'}>₹1499/year</Text>
                </Box>
              </Button>

              <Button display={'block'} py={'12'} px={'16'} colorScheme='black' border={'2px'}
                color={'rgb(225,230,240)'} variant='outline' borderColor={'rgb(37,40,51)'} onClick={Premium2}>
                <Box mt={'-5'}>
                  <Text fontSize={'2xl'}>Premium</Text>
                  <Text fontSize={'2xl'}>₹299/month</Text>
                </Box>
              </Button>
            </Flex>

            {/* continue button */}
            <Box width='100%'>
              <Button bgGradient='linear(to-r, rgb(11,85,223), rgb(6,41,151))'
                size={'lg'} py={'8'} fontSize={'2xl'}
                color={'white'} width={'100%'}
                className='shailesh'
                _hover={{ bg: 'blue', bgGradient: 'linear(to-r, rgb(11,85,223), rgb(6,41,151))' }}
                onClick={()=>{navigate('/payment')}}
              ><Box>Continue with Super </Box>
                <Box mb={'-1.5'} ml={'2'}><RiArrowRightSLine /></Box>
              </Button>
            </Box>

          </Box>
        </Flex>



        {/* Footer */}

        {/* <Box><Footer/></Box> */}


      </Box>
    )
  }
}


