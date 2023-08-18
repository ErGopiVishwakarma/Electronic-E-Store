<<<<<<< HEAD
import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

export const Pagination = ({ totalPage=1, setPage, page=1 }) => {
  console.log(totalPage);
  const { products} = useSelector(
    store => store.productReducer
  );
  const btnArr = new Array(totalPage).fill(1);
  console.log(btnArr);
  return (
    <Box
      display={products.length === 0 ? 'none' : 'flex'}
      flexDirection={'row'}
      justifyContent={'center'}
      gap={'15px'}
    >
      <Button isDisabled={page <= 1} onClick={() => setPage(page - 1)}>
        Previous
      </Button>

      {btnArr.map((el, ind) => {
        return (
          <Button
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'inline',
              xl: 'inline',
              '2xl': 'inline',
            }}
            onClick={() => setPage(ind + 1)}
          >
            {ind + 1}
          </Button>
        );
      })}
      <Button
        
        display={{
          base: 'inline',
          sm: 'inline',
          md: 'inline',
          lg: 'none',
          xl: 'none',
          '2xl': 'none',
        }}
      >
        {page}
      </Button>
      <Button isDisabled={page === totalPage || products.length === 0} onClick={() => setPage(page + 1)}>
        Next
      </Button>
    </Box>
  );
};
=======
import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

export const Pagination = ({ totalPage=1, setPage, page=1 }) => {
  console.log(totalPage);
  const { products} = useSelector(
    store => store.productReducer
  );
  const btnArr = new Array(totalPage).fill(1);
  console.log(btnArr);
  return (
    <Box
      display={products.length === 0 ? 'none' : 'flex'}
      flexDirection={'row'}
      justifyContent={'center'}
      gap={'15px'}
    >
      <Button isDisabled={page <= 1} onClick={() => setPage(page - 1)}>
        Previous
      </Button>

      {btnArr.map((el, ind) => {
        return (
          <Button
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'inline',
              xl: 'inline',
              '2xl': 'inline',
            }}
            onClick={() => setPage(ind + 1)}
          >
            {ind + 1}
          </Button>
        );
      })}
      <Button
        
        display={{
          base: 'inline',
          sm: 'inline',
          md: 'inline',
          lg: 'none',
          xl: 'none',
          '2xl': 'none',
        }}
      >
        {page}
      </Button>
      <Button isDisabled={page === totalPage || products.length === 0} onClick={() => setPage(page + 1)}>
        Next
      </Button>
    </Box>
  );
};
>>>>>>> 0b96a5fc907bded82facbd27f754a029d6d4b2cb
