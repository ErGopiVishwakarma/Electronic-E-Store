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
  Radio,
  RadioGroup,
  Select,
  Stack,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';

import { HiChevronDown } from 'react-icons/hi';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const FilterSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBrand = searchParams.getAll('brand');
  const [brand, setBrand] = useState(initialBrand || []);
  // console.log(useSearchParams.getAll(""));
  const initialCategory = searchParams.getAll('brand');
  const [category, setcategory] = useState(initialCategory || []);

  // const initialOrder=searchParams.get("order");
  // const [order,setOrder]=useState(initialOrder||"");

  useEffect(() => {
    let params = {
      brand,
      category,
    };

    setSearchParams(params);
  }, [brand, category]);

  const handleBrand = e => {
    console.log('brand', e.target.value);
    const { value } = e.target;
    let newBrand = [...brand];
    if (newBrand.includes(value)) {
      newBrand = newBrand.filter(el => el !== value);
    } else {
      newBrand.push(value);
    }
    setBrand(newBrand);
  };
  const handleCategory = e => {
    console.log('category', e.target.value);
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter(el => el !== value);
    } else {
      newCategory.push(value);
    }
    setcategory(newCategory);
  };
  const handleSort = e => {
    console.log(e.target.value);
  };
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
        <Flex
          gap={'40px'}
          justifyContent={'space-evenly'}
          display={'flex'}
          flexDirection={'row'}
        >
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              colorScheme="gray"
              rightIcon={<HiChevronDown />}
            >
              Mobile Phones
            </MenuButton>
            <MenuList minWidth="240px">
              <Flex
                title="Choose Brand"
                type="checkbox"
                onChange={handleBrand}
                flexDirection={'column'}
              >
                <MenuItemOption value={'APPLE'}>
                  <Checkbox value={'APPLE'}>Apple</Checkbox>
                </MenuItemOption>
                <MenuItemOption value={'SAMSUNG'}>
                  <Checkbox value={'SAMSUNG'}>Samsung</Checkbox>
                </MenuItemOption>
                <MenuItemOption value={'POCO'}>
                  <Checkbox value={'POCO'}>Poco</Checkbox>
                </MenuItemOption>
                <MenuItemOption value={'Infinix'}>
                  <Checkbox value={'Infinix'}>Infinix</Checkbox>
                </MenuItemOption>
              </Flex>
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
              <Flex
                title="Choose Brand"
                type="checkbox"
                flexDirection={'column'}
                onChange={handleBrand}
              >
                <MenuItemOption value="DELL">
                  <Checkbox value="DELL">Dell</Checkbox>
                </MenuItemOption>
                <MenuItemOption value="LENOVO">
                  <Checkbox value="LENOVO">Lenovo</Checkbox>
                </MenuItemOption>
                <MenuItemOption value="Acer">
                  <Checkbox value="Acer">Acer</Checkbox>
                </MenuItemOption>
                <MenuItemOption value="HP">
                  <Checkbox value="HP">HP</Checkbox>
                </MenuItemOption>
                <MenuItemOption value="REDMI">
                  <Checkbox value="REDMI">Redmi</Checkbox>
                </MenuItemOption>
              </Flex>
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
              <Flex
                title="Choose Brand"
                type="checkbox"
                flexDirection={'column'}
                onChange={handleBrand}
              >
                <MenuItemOption value="ONEPLUS">
                  <Checkbox value="ONEPLUS">One plus</Checkbox>
                </MenuItemOption>
                <MenuItemOption value="Realme Tvs">
                  <Checkbox value="Realme Tvs">Realme Tvs</Checkbox>
                </MenuItemOption>
                <MenuItemOption value="MI REDMI">
                  <Checkbox value="MI REDMI">MI Redmi</Checkbox>
                </MenuItemOption>
              </Flex>
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
              <Flex
                title="Choose Type"
                type="checkbox"
                flexDirection={'column'}
                onChange={handleCategory}
              >
                <MenuItemOption value="wireless_earbuds">
                  <Checkbox value="wireless_earbuds">Wireless Earbuds</Checkbox>
                </MenuItemOption>
                <MenuItemOption value="wireless_earphones">
                  <Checkbox value="wireless_earphones">
                    {' '}
                    Wireless Earphones
                  </Checkbox>
                </MenuItemOption>
                <MenuItemOption value="earphones">
                  <Checkbox value="earphones">Earphones</Checkbox>
                </MenuItemOption>
                <MenuItemOption value="wireless_speakers">
                  <Checkbox value="wireless_speakers">
                    {' '}
                    Wireless Speakers
                  </Checkbox>
                </MenuItemOption>
              </Flex>
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
              <Flex
                title="Choose Type"
                type="checkbox"
                flexDirection={'column'}
                onChange={handleCategory}
              >
                <MenuItemOption value="smart_watches">
                  <Checkbox value="smart_watches"> Smart Watch</Checkbox>
                </MenuItemOption>
                <MenuItemOption value="power_bank">
                  <Checkbox value="power_bank">Power Bank</Checkbox>
                </MenuItemOption>
              </Flex>
            </MenuList>
          </Menu>
        </Flex>
        <Stack>
          <Flex
            defaultValue="asc"
            title="Price"
            type="radio"
            flexDirection={'column'}
          >
            <Select onChange={handleSort} bg={'#edf2f7'}>
              <option value={''}>Sort By Price</option>

              <option value={'asc'}>Ascending</option>

              <option value={'desc'}>Descending</option>
            </Select>
            <Select onChange={handleSort}>
              <option value={''} onf>
                Sort By Discount
              </option>

              <option value={'asc'}>Ascending</option>

              <option value={'desc'}>Descending</option>
            </Select>
          </Flex>

          {/* <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              colorScheme="gray"
              rightIcon={<HiChevronDown />}
            >
              Sort by
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup
                defaultValue="asc"
                title="Price"
                type="radio"
                onChange={handleSort}
              >
                <MenuItemOption value="asc">Ascending</MenuItemOption>
                <MenuItemOption value="desc">Descending</MenuItemOption>
              </MenuOptionGroup>
              <MenuDivider />
              <MenuOptionGroup
                defaultValue="asc"
                title="Discount"
                type="radio"
                onChange={handleSort}
              >
                <MenuItemOption value="asc">Low to High</MenuItemOption>
                <MenuItemOption value="desc">High to Low</MenuItemOption>
              </MenuOptionGroup>
              <MenuDivider />
              <MenuOptionGroup
                defaultValue="asc"
                title="Rating"
                type="radio"
                onChange={handleSort}
              >
                <MenuItemOption value="asc">Low to High</MenuItemOption>
                <MenuItemOption value="desc">High to Low</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu> */}
        </Stack>
      </Flex>
    </Box>
  );
};
