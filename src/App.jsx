import Article from "./components/Article/Article";
import FormContacts from "./components/FormContacts/FormContacts";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { Routes, Route } from "react-router-dom";
import ArticleAvis from "./pages/ArticleAvis";
import Home from "./pages/Home";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home>
              <Hero />
              <Article />
              <FormContacts />
            </Home>
          }
        />
        <Route path="/article/:id" element={<ArticleAvis />} />
      </Routes>
    </div>
  );
}

export default App;
