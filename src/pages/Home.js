import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllCategories } from '../api';
import Preloader from '../components/Preloader';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';

export default function Home() {
  const [catalogue, setCatalogue] = useState([]);
  const [filteredCatalogue, setFilteredCatalogue] = useState([]);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str) => {
    setFilteredCatalogue(
      catalogue.filter((el) =>
        el.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    navigate({ pathname, search: `?search=${str}` });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalogue(data.categories);
      setFilteredCatalogue(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split('=')[1].toLocaleLowerCase())
            )
          : data.categories
      );
    });
  }, []);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalogue.length ? (
        <Preloader />
      ) : (
        <CategoryList catalogue={filteredCatalogue} />
      )}
    </>
  );
}
