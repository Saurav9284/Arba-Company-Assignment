import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

const MyStore = () => {
  const [showCategories, setShowCategories] = useState(true); // Initially show categories

  // Sample data for categories and products
  const categories = [
    { id: 1, name: 'Category 1', description: 'Description 1' },
    { id: 2, name: 'Category 2', description: 'Description 2' },
    { id: 3, name: 'Category 3', description: 'Description 3' },
  ];

  const products = [
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$20' },
    { id: 3, name: 'Product 3', price: '$30' },
  ];

  const handleHeaderClick = (type) => {
    if (type === 'categories') {
      setShowCategories(true);
    } else {
      setShowCategories(false);
    }
  };

  const handleEdit = (id, type) => {
    console.log(`Editing ${type} with id ${id}`);
  };

  const handleDelete = (id, type) => {
    console.log(`Deleting ${type} with id ${id}`);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: "bolder", fontSize: "40px" }}>My Store</h1>
      <br />
      <br />
      <br />
      <br />
      <Table variant="striped" colorScheme="teal" borderWidth="1px">
        <Thead>
          <Tr>
            <Th borderWidth="1px" colSpan={3} textAlign="center" onClick={() => handleHeaderClick('categories')} style={{ cursor: 'pointer' }}>Categories</Th>
            <Th borderWidth="1px" colSpan={3} textAlign="center" onClick={() => handleHeaderClick('products')} style={{ cursor: 'pointer' }}>Products</Th>
          </Tr>
          <Tr>
            <Th borderWidth="1px">ID</Th>
            <Th borderWidth="1px">Name</Th>
            <Th borderWidth="1px">Description/Price</Th>
            <Th borderWidth="1px">ID</Th>
            <Th borderWidth="1px">Name</Th>
            <Th borderWidth="1px">Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {showCategories ? (
            categories.map(category => (
              <Tr key={category.id}>
                <Td borderWidth="1px">{category.id}</Td>
                <Td borderWidth="1px">{category.name}</Td>
                <Td borderWidth="1px">{category.description}</Td>
                <Td borderWidth="1px">
                  <Button colorScheme="blue" onClick={() => handleEdit(category.id, 'category')}>Edit</Button>
                </Td>
                <Td borderWidth="1px">
                  <Button colorScheme="red" onClick={() => handleDelete(category.id, 'category')}>Delete</Button>
                </Td>
                <Td borderWidth="1px"></Td>
              </Tr>
            ))
          ) : (
            products.map(product => (
              <Tr key={product.id}>
                <Td borderWidth="1px"></Td>
                <Td borderWidth="1px"></Td>
                <Td borderWidth="1px"></Td>
                <Td borderWidth="1px">{product.id}</Td>
                <Td borderWidth="1px">{product.name}</Td>
                <Td borderWidth="1px">{product.price}</Td>
                <Td borderWidth="1px">
                  <Button colorScheme="blue" onClick={() => handleEdit(product.id, 'product')}>Edit</Button>
                </Td>
                <Td borderWidth="1px">
                  <Button colorScheme="red" onClick={() => handleDelete(product.id, 'product')}>Delete</Button>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </div>
  )
}

export default MyStore;
