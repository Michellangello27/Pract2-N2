import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryButtons from './components/CategoryButtons';
import Gallery from './components/Gallery';

export default function App() {
  const [searchValue, setSearchValue] = useState("casas");
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const baseURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${searchValue}&format=json&nojsoncallback=1`;

  useEffect(() => {
    setIsLoading(true);

    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => {
        if (data.photos && Array.isArray(data.photos.photo)) {
          setPhotos(data.photos.photo);
        } else {
          console.warn("No se encontraron imágenes para:", searchValue);
          setPhotos([]);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("❌ Error al obtener fotos:", error);
        setPhotos([]);
        setIsLoading(false);
      });
  }, [searchValue]);

  
  function handleSearch(term) {
    setSearchValue(term.toLowerCase());
  }


  function handleCategoryClick(category) {
    setSearchValue(category.toLowerCase());
  }

  return (
    <div className="bg-white text-slate-900 font-[Open_Sans] min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <Header />
        <SearchBar onSearch={handleSearch} />
        <CategoryButtons onCategoryClick={handleCategoryClick} />
        <h2 className="text-center text-xl font-bold font-[Playfair_Display] mb-8 capitalize">
          {searchValue} Pictures
        </h2>
        {isLoading ? (
          <p className="text-center text-slate-500">Cargando las imágenes...</p>
        ) : (
          <Gallery photos={photos} />
        )}
      </div>
    </div>
  );
}
