import { Box, Button, Center, Flex, FormControl, FormLabel, Image, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import paymentlogo from '../../Assets/payment.png'
import PaymentPopup from './PaymentPopup'
import '../../Css/PaymentDetail.css'

const PaymentDetail = () => {
    const [set,setClass] = useState('')
    const [val,setTrue] = useState(false)
  return (
    <Flex className={set} pt="90px" px='3%' justifyContent={'center'} direction={{base:'column',sm:'column' ,md:'column',lg:'row'}} gap={{base:'50px',md:'70px',lg:''}}>
            {/* <Flex>
                <Image src={'https://www.investopedia.com/thmb/3H96L9iC_VUhvsqmnypxfEQW4UA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/full-color-800x450-cee226a48bed4177b90351075b332227.jpg'} w='100px' />
                <Image src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/200px-MasterCard_Logo.svg.png'} w='100px' />
                <Image src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/1200px-JCB_logo.svg.png'} w='100px' />
                <Image src={'https://d28wu8o6itv89t.cloudfront.net/images/amexlogopng-1578907833580.png'} w='100px' />
            </Flex> */}
       
            <Flex m="auto" w={{base:'100%',sm:'100%' ,md:'80%',lg:'50%'}} p={{base:'20px',sm:'30px' ,md:'10px',lg:'100px'}} justifyContent={'center'}>
            <Image src={paymentlogo} />
            </Flex>
          
        
            <Box  w={{base:'100%',sm:'100%' ,md:'80%',lg:'50%'}} m="auto" >
           <Box p={{base:'20px',sm:'30px' ,md:'10px',lg:'100px'}}  boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}>
           <form style={{display:'flex',flexDirection:'column',rowGap:'20px',margin:'auto'}}>
                <FormControl>
                    <FormLabel>Card Number</FormLabel>
                    <Input type='text' placeholder='1234 5678 9012 3456' />
                </FormControl>
                <FormControl>
                    <FormLabel>Name on Card</FormLabel>
                    <Input type='text' placeholder='Ex - Bruce Wayne' />
                </FormControl>
                <Flex>
                    <FormControl>
                        <FormLabel>Expiry Date</FormLabel>
                        <Input type='text' placeholder='Ex - Bruce Wayne' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Security Code</FormLabel>
                        <Input type='text' placeholder='* * *' />
                    </FormControl>
                </Flex>
                <Center><PaymentPopup bg="blackAlpha.900" colorScheme='white' w="200px" fun={setClass} val={val} seFun={setTrue} onClick={()=>setClass('blur')}>Proceed</PaymentPopup></Center>
            </form>
           </Box>
           </Box>
           
       </Flex>
  )
}

export default PaymentDetail