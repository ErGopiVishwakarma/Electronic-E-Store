import React, { useEffect } from 'react';
import {
  SimpleGrid,
  useBreakpointValue,
  Center,
  Box,
  Flex,
  Grid,
  Spinner,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/Product/action';
import { ProductCard } from '../component/ProductComponent/ProductCard';
import { FilterSort } from '../component/ProductComponent/FilterSort';
import { useSearchParams } from 'react-router-dom';
import Loader from '../component/Loader&Error/Loader';

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const products = useSelector(store => store.productReducer.products);

  let obj = {
    params: {
      brand: searchParams.getAll('brand'),
      category: searchParams.getAll('category'),
      _sort: searchParams.get('order') && 'price',
      _order: searchParams.get('order'),
    },
  };

  useEffect(() => {
    dispatch(getProducts(obj));
  }, [searchParams]);

  return (
    <Box pos={'relative'} minH={'1000px'}>
      <Flex direction={'column'} p="3%" gap="50px">
        <Center>
          <FilterSort products={products} />
        </Center>
        <Grid
          templateColumns={{
            base: 'repeat(2,1fr)',
            sm: 'repeat(2,1fr)',
            md: 'repeat(3,1fr)',
            lg: 'repeat(4,1fr)',
          }}
          gap="20px"
        >
          {products.length === 0 ? (
            // <Spinner
            //   thickness="4px"
            //   speed="0.65s"
            //   emptyColor="gray.200"
            //   color="blue.500"
            //   size="xl"
            // />
            <Loader />
          ) : (
            products?.map(el => <ProductCard key={el.id} {...el} />)
          )}
        </Grid>
      </Flex>
    </Box>
  );
};

export default ProductPage;
