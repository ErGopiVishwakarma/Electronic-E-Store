import React, { useEffect } from 'react';
import { SimpleGrid, useBreakpointValue, Center } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/Product/action';
import { ProductCard } from '../component/ProductComponent/ProductCard';
const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(store => store.productReducer.products);
  useEffect(() => {
    dispatch(getProducts);
  }, []);
  return (
    <Center pt={'100px'} p="3%">
      <SimpleGrid
        columns={{ base: 2, sm: 2, md: 3, lg: 4 }}
        w={useBreakpointValue({ base: '100%', lg: '90%' })}
        gap={'25px'}
      >
        {products.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          products?.map(el => <ProductCard key={el.id} {...el} />)
        )}
      </SimpleGrid>
    </Center>
  );
};

export default ProductPage;
