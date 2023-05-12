import { Box, Container, Link, SimpleGrid, Stack, Text, IconButton, useColorModeValue, HStack, Divider, Image, Center, Grid,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube,FaUser, FaFacebook, FaPinterest } from 'react-icons/fa';
export default function Footer() {
  const text = useColorModeValue('light','dark')
  const textColor = text==='dark'?'gray.100':'blackAlpha.900'
  return (
    <>
    <Box w={'100%'} borderTop="1px solid lightgray">
    </Box>
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')} border="0.2px solid lightgray" w="100%">
      <Container as={Stack} maxW={'8xl'} py={19} >
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1.5fr' }}
          spacing={2} py={18}>
          <Stack spacing={2}>
            <Text fontSize={16} fontWeight="bolder">KNOW US</Text>
            <Link fontSize={14}>About Tech-Cube</Link>
            <Link fontSize={14}>Blogs</Link>
         
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontSize={16} fontWeight="bolder">HELPDESK</Text>
            <Text fontSize={14}>Terms Of Use</Text>
            <Text fontSize={14}>Warranty Policy</Text>
            <Text fontSize={14}>Shipping Policy</Text>
            <Text fontSize={14}>Cancellation Policy</Text>
            <Text fontSize={14}>Return and Exchange Policy</Text>
            <Text fontSize={14}>Privacy & Security Policy</Text>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontSize={16} fontWeight="bolder">NETWORK</Text>
            <Text fontSize={14}>Contact Us</Text>
            <Text fontSize={14}>Corporate Gifting</Text>

          </Stack>
          <Stack align={'flex-start'} borderLeft="1px solid lightgray" spacing={10}>
            
            <Stack direction={'column'} pl={5}>
              {/* forth orbit ========================= */}
            <Text fontSize={25} fontWeight={'bolder'}>FOLLOW US ON</Text>
            <Divider ></Divider>
            <HStack>
              <Link><IconButton borderRadius={'50%'} border={text === 'dark' ? "2px solid white" : "2px solid black"} variant={'outline'} color={textColor}  icon={<FaInstagram />} /></Link>
              <Link><IconButton borderRadius={'50%'} border={text === 'dark' ? "2px solid white" : "2px solid black"} variant={'outline'} color={textColor} icon={<FaFacebook />} /></Link>
              <Link><IconButton borderRadius={'50%'} border={text === 'dark' ? "2px solid white" : "2px solid black"} variant={'outline'} color="red"  icon={<FaYoutube />} /></Link>
              <Link><IconButton borderRadius={'50%'} border={text === 'dark' ? "2px solid white" : "2px solid black"} variant={'outline'} color="blue.500"  icon={<FaTwitter />} /></Link>
              <Link><IconButton borderRadius={'50%'} border={text === 'dark' ? "2px solid white" : "2px solid black"} variant={'outline'} color="brown.500"  icon={<FaPinterest />} /></Link>

            </HStack>
            </Stack> 
            <Divider border={'1px solid lightgray'} w="100%"/>
            <Stack direction={'column'} pl={5}>
              {/* forth orbit ========================= */}
              <Text fontSize={25} fontWeight={'bolder'} >DOWNLOAD OUR APP</Text>
              <HStack spacing={7}>
                <Link><Image src="https://images.dailyobjects.com/marche/icons/android.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1" /></Link>
                <Link><Image src="https://images.dailyobjects.com/marche/icons/IOS.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1" /></Link>
              </HStack>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
    <Box w={'100%'}>
       <Center>
        <Stack direction={'column'}  py={50}>
         <Center><Text fontSize={16}>100% SECURE PAYMENT</Text></Center>
            <Grid direction={{base:'column', md:'row'}} templateColumns={{base:'repeat(3,1fr)',md:'repeat(8,1fr)'}} gap={'15px'} p="15px">
               <Image src="https://images.dailyobjects.com/marche/icons/payments/amex-update.png?tr=cm-pad_resize,v-2,dpr-1"  w={{base:'100%',md:'80px'}}/>
               <Image src="https://images.dailyobjects.com/marche/icons/payments/maestro-update.png?tr=cm-pad_resize,v-2,dpr-1" w={{base:'100%',md:'80px'}} />
               <Image src="https://images.dailyobjects.com/marche/icons/payments/mastercard-update.png?tr=cm-pad_resize,v-2,dpr-1" w={{base:'100%',md:'80px'}} /> 
               <Image src="https://images.dailyobjects.com/marche/icons/payments/mobikwik-update.png?tr=cm-pad_resize,v-2,dpr-1" w={{base:'100%',md:'80px'}} />
               <Image src="https://images.dailyobjects.com/marche/icons/payments/paytm-update.png?tr=cm-pad_resize,v-2,dpr-1" w={{base:'100%',md:'80px'}} /> 
               <Image src="https://images.dailyobjects.com/marche/icons/payments/rupay-update.png?tr=cm-pad_resize,v-2,dpr-1" w={{base:'100%',md:'80px'}} /> 
               <Image src="https://images.dailyobjects.com/marche/icons/payments/upi-update.png?tr=cm-pad_resize,v-2,dpr-1" w={{base:'100%',md:'80px'}} />
               <Image src="https://images.dailyobjects.com/marche/icons/payments/visa-update.png?tr=cm-pad_resize,v-2,dpr-1" w={{base:'100%',md:'80px'}} />
             
            </Grid>
        </Stack>
       </Center>
    </Box>
    </>
  );
}