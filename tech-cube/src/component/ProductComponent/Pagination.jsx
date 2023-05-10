import { Box, Button } from '@chakra-ui/react';
import React from 'react';

export const Pagination = ({ totalPage, setPage, page }) => {
  console.log(totalPage);
  const btnArr = new Array(totalPage).fill(1);
  console.log(btnArr);
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'center'}
      gap={'15px'}
      minH={'1000px'}
    >
      <Button isDisabled={page === 1} onClick={() => setPage(page - 1)}>
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
        isDisabled
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
      <Button isDisabled={page === totalPage} onClick={() => setPage(page + 1)}>
        Next
      </Button>
    </Box>
  );
};
