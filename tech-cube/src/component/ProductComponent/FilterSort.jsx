import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

import { HiChevronDown } from 'react-icons/hi';
import React from 'react';

 export const FilterSort = () => {
  return (
    <Box
      w={'100%'}
      mt={'80px'}
      bg={'white'}
      // w={'70%'}
    >
      <Flex
        w={'100%'}
        pos={'relative'}
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        // minH={'70px'}

        direction={{ base: 'row', md: 'row' }}
        justifyContent={{ base: 'space-between' }}
        // display={{ base: 'none', md: 'none', lg: 'block' }}
        align={'center'}
      >
        <Flex gap={'40px'} justifyContent={'space-evenly'}>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              colorScheme="gray"
              rightIcon={<HiChevronDown />}
            >
              Mobile Phones
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup title="Choose Brand" type="checkbox">
                <MenuItemOption value="APPLE">IPhone</MenuItemOption>
                <MenuItemOption value="SAMSUNG">Samsung</MenuItemOption>
                <MenuItemOption value="POCO">Poco</MenuItemOption>
                <MenuItemOption value="Infinix">Infinix</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              colorScheme="gray"
              rightIcon={<HiChevronDown />}
            >
              Laptop
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup title="Choose Brand" type="checkbox">
                <MenuItemOption value="DELL">Dell</MenuItemOption>
                <MenuItemOption value="LENOVO">Lenovo</MenuItemOption>
                <MenuItemOption value="Acer">Acer</MenuItemOption>
                <MenuItemOption value="HP">HP</MenuItemOption>
                <MenuItemOption value="REDMI">Redmi</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              colorScheme="gray"
              rightIcon={<HiChevronDown />}
            >
              Televisions
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup title="Choose Brand" type="checkbox">
                <MenuItemOption value="ONEPLUS">One plus</MenuItemOption>
                <MenuItemOption value="Realme Tvs">Realme Tvs</MenuItemOption>
                <MenuItemOption value="MI REDMI">MI Redmi</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              colorScheme="gray"
              rightIcon={<HiChevronDown />}
            >
              Earphones & Speakers
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup title="Choose Type" type="checkbox">
                <MenuItemOption value="wireless_earbuds">
                  Wireless Earbuds
                </MenuItemOption>
                <MenuItemOption value="wireless_earphones">
                  Wireless Earphones
                </MenuItemOption>
                <MenuItemOption value="earphones">Earphones</MenuItemOption>
                <MenuItemOption value="wireless_speakers">
                  Wireless Speakers
                </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              colorScheme="gray"
              rightIcon={<HiChevronDown />}
            >
              Other Accessories
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup title="Choose Type" type="checkbox">
                <MenuItemOption value="smart_watches">
                  Smart Watch
                </MenuItemOption>
                <MenuItemOption value="power_bank">Power Bank</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Flex>
        <Stack>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              colorScheme="gray"
              rightIcon={<HiChevronDown />}
            >
              Sort by
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup defaultValue="asc" title="Price" type="radio">
                <MenuItemOption value="asc">Ascending</MenuItemOption>
                <MenuItemOption value="desc">Descending</MenuItemOption>
              </MenuOptionGroup>
              <MenuDivider />
              <MenuOptionGroup defaultValue="asc" title="Discount" type="radio">
                <MenuItemOption value="asc">Low to High</MenuItemOption>
                <MenuItemOption value="desc">High to Low</MenuItemOption>
              </MenuOptionGroup>
              <MenuDivider />
              <MenuOptionGroup defaultValue="asc" title="Rating" type="radio">
                <MenuItemOption value="asc">Low to High</MenuItemOption>
                <MenuItemOption value="desc">High to Low</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Stack>
      </Flex>
    </Box>
  );
};

