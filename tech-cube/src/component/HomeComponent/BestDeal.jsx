
import { Box, Button, Flex, Grid, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const BestDeal = () => {
  return (
    <Box>
      <Grid templateColumns={{ base: 'repeat(2,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)' }} gap="20px" p="3%">
        <Flex direction={'column'} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} gap='0' >
        <Box p="20px"  bg="red.50">
        <Box className='bestdeal' >
        <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png" />
          </Box>
        </Box>
          <Stack mt='6' spacing='3' p="30px">
           <Flex justifyContent={'space-between'}>
           <Text>gopi singh vishwakarma</Text>
           <Text>₹ 500</Text>
           </Flex>
           <Text fontSize={'13px'}>actually my name is gopi vishwakarma</Text>
           <Text></Text>
           <Button variant={'unstyled'}>Add To Cart</Button>
          </Stack>
        </Flex>
        <Flex direction={'column'} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} gap='0' >
        <Box p="50px"  bg="red.50">
        <Box bgImage="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png" w='100%' h='250px' className='bestdeal' >
          </Box>
        </Box>
          <Stack mt='6' spacing='3' p="30px">
           <Flex justifyContent={'space-between'}>
           <Text>gopi singh vishwakarma</Text>
           <Text>₹ 500</Text>
           </Flex>
           <Text></Text>
           <Text></Text>
           <Button></Button>
          </Stack>
        </Flex>
        <Flex direction={'column'} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} gap='0' >
        <Box p="50px"  bg="red.50">
        <Box bgImage="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png" w='100%' h='250px' className='bestdeal' >
          </Box>
        </Box>
          <Stack mt='6' spacing='3' p="30px">
           <Flex justifyContent={'space-between'}>
           <Text>gopi singh vishwakarma</Text>
           <Text>₹ 500</Text>
           </Flex>
           <Text></Text>
           <Text></Text>
           <Button></Button>
          </Stack>
        </Flex>
        <Flex direction={'column'} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} gap='0' >
        <Box p="50px"  bg="red.50">
        <Box bgImage="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png" w='100%' h='250px' className='bestdeal' >
          </Box>
        </Box>
          <Stack mt='6' spacing='3' p="30px">
           <Flex justifyContent={'space-between'}>
           <Text>gopi singh vishwakarma</Text>
           <Text>₹ 500</Text>
           </Flex>
           <Text></Text>
           <Text></Text>
           <Button></Button>
          </Stack>
        </Flex>
      </Grid>
    </Box>
  )
}

export default BestDeal