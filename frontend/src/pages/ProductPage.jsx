import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { debounce } from "lodash";
import { FaSearch, FaSort, FaFilter, FaTh, FaThLarge, FaHeart, FaRegHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ViewSearchContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  gap: 10px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FilterLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #4a4a4a;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ViewSelect = styled.select`
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background-color: white;
  font-size: 1rem;
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
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #ff69b4;
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 105, 180, 0.2);
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  font-size: 1rem;
  color: #4a4a4a;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
    color: #ff69b4;
  }

  svg {
    margin-right: 8px;
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
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 10px;

  &:hover {
    color: #ff69b4;
    background-color: rgba(0, 0, 0, 0.7);
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
  padding: 14px 20px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;

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
    // Implement filter logic (e.g., open a filter modal)
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
        <ViewSearchContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FilterGroup>
            <FilterLabel htmlFor="view-select">View</FilterLabel>
            <ViewSelect id="view-select" value={columns} onChange={handleViewChange}>
              <option value={2}>2 Columns</option>
              <option value={3}>3 Columns</option>
              <option value={4}>4 Columns</option>
            </ViewSelect>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel htmlFor="search">Search</FilterLabel>
            <SearchInputWrapper>
              <SearchIcon />
              <SearchInput
                id="search"
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </SearchInputWrapper>
          </FilterGroup>
        </ViewSearchContainer>
        <FilterContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ActionButton onClick={handleSort}>
            <FaSort />
            Sort by Price ({sortOrder === "asc" ? "Low to High" : "High to Low"})
          </ActionButton>
          <ActionButton onClick={handleFilter}>
            <FaFilter />
            Filters
          </ActionButton>
        </FilterContainer>
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
                <AddToCartButton>Add to Cart</AddToCartButton>
              </ProductInfo>
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

export default ProductPage;