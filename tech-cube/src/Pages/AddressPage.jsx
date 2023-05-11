import React, { useEffect, useRef, useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,

  Checkbox,
  Grid,
  Text,
  UnorderedList,
  ListItem,
  Stack,
  Image,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData, updatePaymentMethod } from '../redux/CartReducer/action';
import { Link } from 'react-router-dom';


let handleSubmitTriggure; // for adding details on local storage on Address Page
let handlePaymentDetails; // for adding details on redux on Payment page



export const AddressForm = () => {


  const [user, setUser] = useState({});

  const handleChenge = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }

  handleSubmitTriggure = () => {

    localStorage.setItem("user_details", JSON.stringify(user))

  }

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])



  return (
    <Box>
      < Box width={{ base: "full", sm: 'full', md: 'sm', lg: 'lg', xl: '2xl' }} >

        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
          Update Billing Address
        </Heading>
        <Flex>
          <FormControl mr="5%" isRequired>
            <FormLabel htmlFor="first-name" fontWeight={'normal'}>
              First name
            </FormLabel>
            <Input id="first-name" placeholder="First name" value={user.name} name='name' onChange={handleChenge} />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
              Last name
            </FormLabel>
            <Input id="last-name" placeholder="First name" />
          </FormControl>
        </Flex>
        <FormControl mt="2%">
          <FormLabel htmlFor="email" fontWeight={'normal'} >
            Email address
          </FormLabel>
          <Input type="email" name='email' value={user.email} placeholder='example@abc.com' onChange={handleChenge} />
          <FormHelperText>We'll never share your email.</FormHelperText>
          <FormLabel mt="2%" fontWeight={'normal'}>
            Phone No
          </FormLabel>

          <Input type="tel" name='phone' value={user.phone} placeholder='999999999' maxLength={'10'} onChange={handleChenge} />
        </FormControl>

        <FormControl>
          <FormLabel fontWeight={'normal'} mt="2%">
            Address
          </FormLabel>
          <Textarea type="text" name='address' onChange={handleChenge} />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight={'normal'} mt="2%">
            City
          </FormLabel>
          <Input type="text" name='city' />
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="postal_code"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%">
            ZIP / Postal
          </FormLabel>
          <Input
            type="tel"
            maxLength={"6"}
            name="pincode"


            focusBorderColor="gray.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            onChange={handleChenge}
          />
        </FormControl>
      </Box>

      <Box>
        
      </Box>

    </Box>
  );
};

export const PaymentForm = () => {
  const [paymentDetails, setPaymentDetails] = useState({});
  const dispatch = useDispatch();

  const handlechenge = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value })
    dispatch(updatePaymentMethod(paymentDetails));
  }

  handlePaymentDetails = () => {
    dispatch(updatePaymentMethod(paymentDetails));
  }

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Payment method
      </Heading>
      <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={3}>
        <GridItem colSpan={{ sm: 1, md: 1 / 2 }}>
          <FormControl isRequired>
            <FormLabel htmlFor="cardName">Name on card</FormLabel>
            <Input type="text" name="cardHolderName" autoComplete="cc-name" placeholder='Johnsmith Doe' onChange={handlechenge} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ sm: 1, md: 1 / 2 }}>
          <FormControl isRequired>
            <FormLabel htmlFor="cardNumber">Card number</FormLabel>
            <Input type="text" name="cardNumber" autoComplete="cc-number" maxLength={'16'} onChange={handlechenge} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ sm: 1, md: 1 / 2 }}>
          <FormControl isRequired>
            <FormLabel htmlFor="expDate">Expiry date</FormLabel>
            <Input type="text" name="expDate" autoComplete="cc-exp" placeholder='04/2024' maxLength={'7'} onChange={handlechenge} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ sm: 1, md: 1 / 2 }}>
          <FormControl isRequired>
            <FormLabel htmlFor="cvv">CVV</FormLabel>
            <Input type="text" id="cvv" autoComplete="cc-csc" />
            <FormHelperText>Last three digits on signature strip</FormHelperText>
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ sm: 1 }}>
          <Checkbox colorScheme="green" defaultIsChecked>
            Remember credit card details for next time
          </Checkbox>
        </GridItem>
      </Grid>




    </>
  );
};

//===================================================================================================



const Form3 = () => {


  const { cart, paymentDetails } = useSelector((store) => store.cartReducer)
  const dispatch = useDispatch();
  const totalPrice = useRef(0)
  useEffect(() => {
    dispatch(getCartData())
    console.log(paymentDetails);
  }, [])
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Social Handles
      </Heading>
      <Box>
        <Heading as="h6" size="md" mb={2}>
          Order summary
        </Heading>
        <UnorderedList pl={0}>
          {cart?.map((product) => {
            totalPrice.current = totalPrice.current + (product.price * product.quantity)
            return (
              <ListItem key={product.id} py={1}>
                <Stack direction="row" justify="space-between" alignItems="center">
                  <Box>
                    <Box fontSize="md" fontWeight="semibold" display={'flex'} ><Image width={'30px'} height={'30px'} src={product.image} alt={product.title} />
                      <h4>{product.title}</h4>
                    </Box>
                    <Text fontSize="sm" color="gray.600">
                      {product.quantity} - {product.color}
                    </Text>
                  </Box>
                  <Text fontSize="md" fontWeight="semibold">
                    ${product.price + product.quantity}
                  </Text>
                </Stack>
              </ListItem>
            )
          })}
          <ListItem py={1}>
            <Stack direction="row" justify="space-between" alignItems="center">
              <Text fontSize="md" fontWeight="semibold">
                Total
              </Text>
              <Text fontSize="md" fontWeight="semibold">
                $ {totalPrice.current}
              </Text>
            </Stack>
          </ListItem>
        </UnorderedList>
        <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={4} mt={4}>
          <GridItem colSpan={{ sm: 1, md: 1 / 2 }}>
            <Heading as="h6" size="md" mb={2}>
              Shipping
            </Heading>
            <Text mb={2}>John Smith</Text>
            <Text mb={2}>In Heare I displayed Address</Text>
          </GridItem>
          <GridItem colSpan={{ sm: 1, md: 1 / 2 }}>
            <Heading as="h6" size="md" mb={2}>
              Payment details
            </Heading>
            <Grid templateColumns="repeat(2, 1fr)" gap={2}>


              <React.Fragment >
                <GridItem>
                  <Text fontWeight="semibold">Card type</Text>
                </GridItem>
                <GridItem>
                  <Text>Visa</Text>
                </GridItem>
              </React.Fragment>


              <React.Fragment >
                <GridItem>
                  <Text fontWeight="semibold">Card holder</Text>
                </GridItem>
                <GridItem>
                  <Text>{paymentDetails.cardHolderName}</Text>
                </GridItem>
              </React.Fragment>

              <React.Fragment >
                <GridItem>
                  <Text fontWeight="semibold">Card number</Text>
                </GridItem>
                <GridItem>
                  <Text>'xxxx-xxxx-xxxx-{paymentDetails.cardNumber.substr(paymentDetails.cardNumber.length - 4)}</Text>
                </GridItem>
              </React.Fragment>


              <React.Fragment >
                <GridItem>
                  <Text fontWeight="semibold">Expiry date</Text>
                </GridItem>
                <GridItem>
                  <Text>{paymentDetails.expDate}</Text>
                </GridItem>
              </React.Fragment>


            </Grid>
          </GridItem>
        </Grid>
      </Box>

    </>
  );
};

export const Multistep = () => {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);


  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <AddressForm /> : step === 2 ? <PaymentForm /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);

                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  if (step === 1) {
                    handleSubmitTriggure();
                  }
                  if (step === 2) {

                    handlePaymentDetails();
                  }


                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Link to={"/payment"}>
                <Button
                  w="7rem"
                  colorScheme="green"
                  variant="solid"
                  onClick={() => {
                    toast({
                      title: 'Order Placed.',
                      description: "Your order placed successfully  ",
                      status: 'success',
                      duration: 3000,
                      isClosable: true,
                    });
                  }}
                >
                  Pay
                </Button>
              </Link>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}