import { Route, Routes } from 'react-router-dom'
import { FormPage } from './pages/Form/Form';
import { RecipesListPage } from './pages/RecipesList/RecipesList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="/recipes" element={<RecipesListPage />} />
    </Routes>
  )
}

export default App
