import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { debounce } from "lodash";
import { FaSearch, FaFilter, FaTh, FaThLarge, FaHeart, FaRegHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { toast } from 'react-toastify'; // Add this import for notifications

const ProductPageContainer = styled.div`
  background-color: #f9f9f9;
  padding: 40px 5%;
  min-height: 100vh;
`;

const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const SectionTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    background-color: #ff69b4;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const CategoryDescription = styled(motion.p)`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const ViewSelect = styled.select`
  padding: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background-color: white;
  font-size: 0.9rem;
  color: #4a4a4a;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff69b4;
    box-shadow: 0 0 0 2px rgba(255, 105, 180, 0.2);
  }
`;

const SearchInputWrapper = styled.div`
  position: relative;
  width: 200px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 8px 8px 30px;
  font-size: 0.9rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #ff69b4;
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 105, 180, 0.2);
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  width: 14px;
  height: 14px;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  color: #4a4a4a;
  background-color: transparent;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    color: #ff69b4;
    border-color: #ff69b4;
  }

  svg {
    width: 16px;
    height: 16px;
    margin-left: 6px;
  }
`;

const ProductCount = styled.p`
  font-size: 1.1rem;
  color: #4a4a4a;
  font-weight: 500;
`;

const ProductsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  gap: 40px;
  justify-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled(motion.div)`
  width: 100%;
  max-width: 350px;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ProductCard}:hover & {
    transform: scale(1.1);
  }
`;

const WishlistIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${(props) => (props.isWishlisted ? "#ff69b4" : "#ffffff")};
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;
  border-radius: 50%;
  padding: 10px;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    color: #ff69b4;
  }
`;

const ProductInfo = styled.div`
  padding: 24px;
  text-align: left;
`;

const ProductName = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 12px;
  transition: color 0.3s ease;

  ${ProductCard}:hover & {
    color: #ff69b4;
  }
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: #333333;
  margin-bottom: 20px;
  font-weight: 500;
`;

const AddToCartButton = styled.button`
  background-color: #000000;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  white-space: nowrap;

  &:hover {
    background-color: #ff69b4;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const PageButton = styled.button`
  background-color: ${props => props.active ? '#ff69b4' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 1px solid #e0e0e0;
  padding: 8px 12px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.active ? '#ff69b4' : '#f0f0f0'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const FilterModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const FilterContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
`;

const PriceRangeInput = styled.input`
  width: 100%;
  margin: 10px 0;
`;

const ApplyFilterButton = styled.button`
  background-color: #ff69b4;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff1493;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f0f0;
  border-radius: 6px;
  overflow: hidden;
  width: 100px;
`;

const QuantityButton = styled.button`
  background-color: transparent;
  border: none;
  color: #333;
  font-size: 1.2rem;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const QuantityDisplay = styled.span`
  font-size: 1rem;
  padding: 0 10px;
  background-color: white;
`;

const ProductCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
`;

const AddedToCartMessage = styled.div`
  background-color: #4CAF50;
  color: white;
  text-align: center;
  padding: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${props => props.visible && `
    transform: translateY(0);
  `}
`;

const ProductPage = () => {
  const { categoryid } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [columns, setColumns] = useState(3);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState({});
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [cartItems, setCartItems] = useState({});
  const [addedToCartMessages, setAddedToCartMessages] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:3001/category/${categoryid}/products`);
        const fetchedProducts = response.data.products;
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
        setCategoryName(response.data.name);
        setCategoryDescription(response.data.description || "Explore our curated collection of premium products.");
        const highestPrice = Math.max(...fetchedProducts.map(p => p.price));
        setMaxPrice(highestPrice);
        setPriceRange(highestPrice);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [categoryid]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost:3001/products/cart', {
          credentials: 'include',
        });
        const data = await response.json();
        if (response.ok) {
          const cartItemsMap = {};
          data.cartItems.forEach(item => {
            cartItemsMap[item.product._id] = item.quantity;
          });
          setCartItems(cartItemsMap);
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleViewChange = (e) => {
    setColumns(Number(e.target.value));
  };

  const debouncedSearch = useMemo(
    () =>
      debounce((searchTerm) => {
        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
        setCurrentPage(1);
      }, 300),
    [products]
  );

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
    debouncedSearch(e.target.value);
  }, [debouncedSearch]);

  const handleSort = useCallback(() => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    const sorted = [...filteredProducts].sort((a, b) => 
      newSortOrder === "asc" ? a.price - b.price : b.price - a.price
    );
    setFilteredProducts(sorted);
  }, [filteredProducts, sortOrder]);

  const handleFilter = useCallback(() => {
    setShowFilters(true);
  }, []);

  const handleWishlistToggle = useCallback((productId) => {
    setWishlist((prevWishlist) => ({
      ...prevWishlist,
      [productId]: !prevWishlist[productId],
    }));
  }, []);

  const applyFilters = useCallback(() => {
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.price <= priceRange
    );
    setFilteredProducts(filtered);
    setShowFilters(false);
    setCurrentPage(1);
  }, [products, searchTerm, priceRange]);

  const handleAddToCart = useCallback(async (productId) => {
    try {
      const response = await fetch(`http://localhost:3001/products/${productId}/cart`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setCartItems(prevItems => ({
          ...prevItems,
          [productId]: (prevItems[productId] || 0) + 1
        }));
        toast.success('Item added to cart!');
      } else {
        throw new Error('Failed to add item to cart');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('Failed to add item to cart. Please try again.');
    }
  }, []);

  const handleQuantityChange = useCallback(async (productId, action) => {
    const endpoint = action === 'increase' 
      ? `http://localhost:3001/products/cart/increase/${productId}`
      : `http://localhost:3001/products/cart/decrease/${productId}`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setCartItems(prevItems => ({
          ...prevItems,
          [productId]: action === 'increase' 
            ? (prevItems[productId] || 0) + 1
            : Math.max((prevItems[productId] || 0) - 1, 0)
        }));
        toast.success(`Item quantity ${action}d`);
      } else {
        throw new Error(`Failed to ${action} item quantity`);
      }
    } catch (error) {
      console.error(`Error ${action}ing quantity:`, error);
      toast.error(`Failed to ${action} item quantity. Please try again.`);
    }
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ProductPageContainer>
      <PageHeader>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categoryName}
        </SectionTitle>
        <CategoryDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categoryDescription}
        </CategoryDescription>
      </PageHeader>
      <ControlsContainer>
        <ViewSelect value={columns} onChange={handleViewChange}>
          <option value={2}>2 Columns</option>
          <option value={3}>3 Columns</option>
          <option value={4}>4 Columns</option>
        </ViewSelect>
        <SearchInputWrapper>
          <SearchIcon />
          <SearchInput
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </SearchInputWrapper>
        <FilterButton onClick={handleFilter} title="Open Filters">
          Filter <FaFilter />
        </FilterButton>
      </ControlsContainer>
      
      <ProductsGrid
        columns={columns}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <AnimatePresence>
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <ProductImageContainer>
                <ProductImage src={product.image} alt={product.name} />
                <WishlistIcon
                  isWishlisted={wishlist[product.id]}
                  onClick={() => handleWishlistToggle(product.id)}
                >
                  {wishlist[product.id] ? <FaHeart /> : <FaRegHeart />}
                </WishlistIcon>
              </ProductImageContainer>
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>Rs.{product.price.toFixed(2)}</ProductPrice>
                <CartControls>
                  {cartItems[product._id] > 0 ? (
                    <>
                      <QuantityControl>
                        <QuantityButton onClick={() => handleQuantityChange(product._id, 'decrease')}>-</QuantityButton>
                        <QuantityDisplay>{cartItems[product._id]}</QuantityDisplay>
                        <QuantityButton onClick={() => handleQuantityChange(product._id, 'increase')}>+</QuantityButton>
                      </QuantityControl>
                      <AddToCartButton onClick={() => handleAddToCart(product._id)}>
                        Add More
                      </AddToCartButton>
                    </>
                  ) : (
                    <AddToCartButton onClick={() => handleAddToCart(product._id)}>
                      Add to Cart
                    </AddToCartButton>
                  )}
                </CartControls>
              </ProductInfo>
              <AddedToCartMessage visible={addedToCartMessages[product._id]}>
                Item added to cart
              </AddedToCartMessage>
            </ProductCard>
          ))}
        </AnimatePresence>
      </ProductsGrid>
      
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      
      <ProductCount>{filteredProducts.length} Products</ProductCount>

      <AnimatePresence>
        {showFilters && (
          <FilterModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFilters(false)}
          >
            <FilterContent onClick={e => e.stopPropagation()}>
              <h3>Price Range</h3>
              <PriceRangeInput
                type="range"
                min="0"
                max={maxPrice}
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
              />
              <p>Max Price: Rs.{priceRange}</p>
              <ApplyFilterButton onClick={applyFilters}>Apply Filters</ApplyFilterButton>
            </FilterContent>
          </FilterModal>
        )}
      </AnimatePresence>
    </ProductPageContainer>
  );
};

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      <PageButton onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
        <FaChevronLeft />
      </PageButton>
      {pageNumbers.map(number => (
        <PageButton key={number} active={currentPage === number} onClick={() => paginate(number)}>
          {number}
        </PageButton>
      ))}
      <PageButton onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers.length}>
        <FaChevronRight />
      </PageButton>
    </PaginationContainer>
  );
};

// Styled components
const CartControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  gap: 10px;
`;

export default ProductPage;