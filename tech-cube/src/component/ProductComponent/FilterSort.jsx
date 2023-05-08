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
} from '@chakra-ui/react';

import { HiChevronDown } from 'react-icons/hi';
import React from 'react';

 export const FilterSort = () => {
  return (
    <Box>
      <Flex justifyContent={'space-around'}>
        <HStack width={'60%'} gap={'40px'}>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              colorScheme="gray"
              rightIcon={<HiChevronDown />}
            >
              color
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup title="Choose color" type="checkbox">
                <MenuItemOption value="red">Red</MenuItemOption>
                <MenuItemOption value="black">Black</MenuItemOption>
                <MenuItemOption value="grey">Grey</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              colorScheme="gray"
              rightIcon={<HiChevronDown />}
            >
              category
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup title="Choose category" type="checkbox">
                <MenuItemOption value="phone">Phone</MenuItemOption>
                <MenuItemOption value="earphone">Earphone</MenuItemOption>
                <MenuItemOption value="laptop">laptop</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              colorScheme="gray"
              rightIcon={<HiChevronDown />}
            >
              Brand
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup title="Choose brand" type="checkbox">
                <MenuItemOption value="phone">Phone</MenuItemOption>
                <MenuItemOption value="earphone">Earphone</MenuItemOption>
                <MenuItemOption value="laptop">laptop</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              colorScheme="gray"
              rightIcon={<HiChevronDown />}
            >
              4
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup title="Choose category" type="checkbox">
                <MenuItemOption value="phone">Phone</MenuItemOption>
                <MenuItemOption value="earphone">Earphone</MenuItemOption>
                <MenuItemOption value="laptop">laptop</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              colorScheme="gray"
              rightIcon={<HiChevronDown />}
            >
              5
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup title="Choose category" type="checkbox">
                <MenuItemOption value="phone">Phone</MenuItemOption>
                <MenuItemOption value="earphone">Earphone</MenuItemOption>
                <MenuItemOption value="laptop">laptop</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </HStack>
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

