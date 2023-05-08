import { Flex, Center, Box, Heading, Image, Text, Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllData } from '../../redux/Admin/action'
import EditProduct from './EditProduct'

const Products = () => {

const dispatch = useDispatch()
const productsData = useSelector(store=>store.adminReducer.allProductData)

useEffect(()=>{
    dispatch(getAllData())
},[])


    return (
        <Flex direction={'column'} bg='white' borderRadius={'10px'}>
            <Flex justify={'space-between'} px={{ base: '7px', md: '20px', lg: '50px' }} alignItems={'center'} py="8px">
                <Text fontSize={'20px'} fontWeight={'bolder'}>Total Products - 5</Text>
                <Button>Add Product</Button>
            </Flex>
            <Box w="98%" h={{ base: "100vh", md: '100vh', lg: '450px' }} direction={'column'} overflowY={'scroll'} >

                {
                    productsData?.map((el,ind) => (
                        <Flex key={ind} direction={{ base: 'column', md: 'row' }} justify="space-between" alignItems={'center'} px={{ base: '7px', md: '20px', lg: '50px' }} py="10px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px">
                            <Flex w="100%" justifyContent={'space-between'} pr={{ base: '0px', md: '30px', lg: '100px' }} alignItems={'center'}>
                                <Image src={el.image[0]} w='70px' h='70px' borderRadius={'50%'} />
                                <Text>{el.title.substring(0,20)}</Text>
                                <Button display={{ base: 'block', md: 'none' }}>show detail</Button>
                                <Text display={{ base: 'none', md: 'block' }}>{el.brand}</Text>
                                <Text display={{ base: 'none', md: 'block' }}>{el.price}</Text>
                            </Flex>
                            <Flex gap={{ base: '30px', md: '30px', lg: '50px' }} display={{ base: 'none', md: 'flex' }} >
                                <EditProduct id={el.id}>Edit</EditProduct>
                                <Button bg="red.600" colorScheme="white">Delete</Button>
                            </Flex>
                        </Flex>
                    ))
                }
            </Box>
        </Flex>

    )
}

export default Products