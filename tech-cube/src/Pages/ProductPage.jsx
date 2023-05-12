import React, { useEffect, useState } from 'react';
import { Center, Box, Flex, Grid, Heading, Image } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/Product/action';
import { ProductCard } from '../component/ProductComponent/ProductCard';
import { FilterSort } from '../component/ProductComponent/FilterSort';
import { useSearchParams } from 'react-router-dom';
import Loader from '../component/Loader&Error/Loader';
import { Pagination } from '../component/ProductComponent/Pagination';

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { products, totalProducts } = useSelector(
    store => store.productReducer
  );
  console.log(totalProducts)
  const [page, setPage] = useState(1);

  let obj = {
    params: {
      brand: searchParams.getAll('brand'),
      category: searchParams.getAll('category'),
      _sort: searchParams.get('order') && 'price',
      _order: searchParams.get('order'),
    },
  };

  // console.log(searchParams.getAll('brand'), 'brand');
  useEffect(() => {
    dispatch(getProducts(obj, page));
  }, [page, searchParams]);

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])

  console.log(totalProducts, 'totalproducts Count');
  console.log(page, 'pages');
  return (
    <Box pos={'relative'} minH={''}>
      <Flex direction={'column'} p="3%" gap="50px">
        <Center>
          <FilterSort products={products} />
        </Center>
        {products.length === 0 ? (
          <Flex justifyContent={'center'}>
          <Image src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png"  />
          </Flex>
        ) : (
          <Grid
            templateColumns={{
              base: 'repeat(2,1fr)',
              sm: 'repeat(2,1fr)',
              md: 'repeat(3,1fr)',
              lg: 'repeat(4,1fr)',
            }}
            w={['100%', '100%']}
            gap="20px"
          >
            {products.length > 0 &&  products.map(el => (
              <ProductCard key={el.id} {...el} />
            ))}
         
          </Grid>
        )}
      </Flex>
    
      <Pagination
        totalPage={Math.ceil(totalProducts / 20)}
        setPage={setPage}
        page={page}
      />
    </Box>
  );
};

export default ProductPage;
