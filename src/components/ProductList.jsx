import React from 'react';
import styles from './ProductList.module.css';
import Productcard from './Productcard';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Butchers Simply Gentle Wet Adult Dog Food',
      price: 9.99,
      description: 'Butchers believe nothing is better for your dog than natures most nourishing food',
      productimage:'https://media.petsathome.com/wcsstore/pah-cas01//300/7131375PL.jpg'
    },
    {
      id: 2,
      name: 'Lilys Kitchen Classic Dinners Multipack for Dogs 6x150g',
      price: 14.99,
      description: 'When Lily the border terrier became ill with itchy skin, it was homemade, natural food that made her better.',
      productimage:'https://media.petsathome.com/wcsstore/pah-cas01//300/7128800PL.jpg'
    },
    {
        id: 3,
        name: 'Wainwrights Wet Puppy Food Chicken Multipack 16x150g Pouches',
        price: 24.99,
        description: 'At Wainwrights we want the very best for your dog. So, our naturally inspired recipes are tailored to your dogs needs',
        productimage:'https://media.petsathome.com/wcsstore/pah-cas01//300/7142841.jpg'
      },
      {
        id: 4,
        name: 'Kong Wild Knots Tiger Dog Toy Medium/Large',
        price: 22.99,
        description: 'Dogs need to play. For dogs, physical and mental development, emotions and behaviour are all influenced by healthy play',
        productimage:'https://media.petsathome.com/wcsstore/pah-cas01//300/7147333PL.jpg'
      },
      {
        id: 5,
        name: 'Acana Premium Pate Complete Wet Adult Cat Food Chicken Multipack 8x85g',
        price: 20.99,
        description: 'Acana goes above and beyond in crafting their dog and cat food, including sourcing high quality animal proteins like fresh or raw* poultry, meats and wild-caught fish',
        productimage:'https://media.petsathome.com/wcsstore/pah-cas01//300/7147347PL.jpg'
      },
      {
        id: 6,
        name: 'Acana Premium Pate Complete Wet Kitten Food Chicken & Fish Multipack 8x85g',
        price: 20.99,
        description: 'Acana goes above and beyond in crafting their dog and cat food, including sourcing high quality animal proteins like fresh or raw* poultry, meats and wild-caught fish',
        productimage:'https://media.petsathome.com/wcsstore/pah-cas01//300/7147370PL.jpg'
      },
      {
        id: 7,
        name: 'Petstages Tower of Tracks',
        price: 10.99,
        description: 'Keep your kitty happy with this Petstages Tower of Tricks toy!',
        productimage:'https://media.petsathome.com/wcsstore/pah-cas01//300/7110768PL.jpg'
      },
      {
        id: 8,
        name: 'Willows Silver Vine Scratch Box Cat Toy',
        price: 13.99,
        description: 'Cats are playful and curious animals that love to climb to heights enabling them to survey their surroundings, hiding in private safe spaces to rest and conserve energy',
        productimage:'https://media.petsathome.com/wcsstore/pah-cas01//300/7137170PL.jpg'
      },
    // Add more products here...
  ];

  return (
    <div>
      {/* <h1>Pet Show E-commerce</h1> */}
      <h2>Product List</h2>
      <div className={styles.productList}>
        {products.map((product) => (
          
          <Productcard productid ={product.productid}productimage={product.productimage} name={product.name} price={product.price} description={product.description} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
