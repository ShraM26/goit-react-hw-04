import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'

const App = () => {
 	const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

	const handleSearch = async (topic) => {
    try {
	  setArticles([]);
	  setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
 <SearchBar onSearch={handleSearch} />
  )
}

export default App
