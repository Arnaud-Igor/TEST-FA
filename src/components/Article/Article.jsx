import { Link } from "react-router-dom";

const ARTICLES = [
  {
    id: 0,
    url: "https://img.freepik.com/free-photo/composition-different-car-accessories_23-2149030390.jpg?t=st=1728908932~exp=1728912532~hmac=ea18c3afad7df54f6620b2128a6aeb2e5a3cefd657a604606ba2c336d89f5bb7&w=1480",
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    url: "https://img.freepik.com/free-photo/composition-different-car-accessories_23-2149030390.jpg?t=st=1728908932~exp=1728912532~hmac=ea18c3afad7df54f6620b2128a6aeb2e5a3cefd657a604606ba2c336d89f5bb7&w=1480",
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    url: "https://img.freepik.com/free-photo/composition-different-car-accessories_23-2149030390.jpg?t=st=1728908932~exp=1728912532~hmac=ea18c3afad7df54f6620b2128a6aeb2e5a3cefd657a604606ba2c336d89f5bb7&w=1480",
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    url: "https://img.freepik.com/free-photo/composition-different-car-accessories_23-2149030390.jpg?t=st=1728908932~exp=1728912532~hmac=ea18c3afad7df54f6620b2128a6aeb2e5a3cefd657a604606ba2c336d89f5bb7&w=1480",
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    url: "https://img.freepik.com/free-photo/composition-different-car-accessories_23-2149030390.jpg?t=st=1728908932~exp=1728912532~hmac=ea18c3afad7df54f6620b2128a6aeb2e5a3cefd657a604606ba2c336d89f5bb7&w=1480",
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    url: "https://img.freepik.com/free-photo/composition-different-car-accessories_23-2149030390.jpg?t=st=1728908932~exp=1728912532~hmac=ea18c3afad7df54f6620b2128a6aeb2e5a3cefd657a604606ba2c336d89f5bb7&w=1480",
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    url: "https://img.freepik.com/free-photo/composition-different-car-accessories_23-2149030390.jpg?t=st=1728908932~exp=1728912532~hmac=ea18c3afad7df54f6620b2128a6aeb2e5a3cefd657a604606ba2c336d89f5bb7&w=1480",
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 7,
    url: "https://img.freepik.com/free-photo/composition-different-car-accessories_23-2149030390.jpg?t=st=1728908932~exp=1728912532~hmac=ea18c3afad7df54f6620b2128a6aeb2e5a3cefd657a604606ba2c336d89f5bb7&w=1480",
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 8,
    url: "https://img.freepik.com/free-photo/composition-different-car-accessories_23-2149030390.jpg?t=st=1728908932~exp=1728912532~hmac=ea18c3afad7df54f6620b2128a6aeb2e5a3cefd657a604606ba2c336d89f5bb7&w=1480",
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function Article() {
  const avis = localStorage.getItem("avis");

  return (
    <div>
      <div className="container my-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mt-8">
          Nos Produits
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {ARTICLES.map((article, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg">
              <img
                src={article.url}
                alt="product"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="flex justify-between items-center mt-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {article.title}
                </h2>
                <span className="text-yellow-500 font-bold">Quantité : 20</span>
              </div>
              <p className="text-gray-500 mt-2">{article.description}</p>
              <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-4">
                Acheter
              </button>

              <button className="ml-6 bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
                <Link to={`/article/${article.id}`}>Donnez un Avis</Link>
              </button>
              <p className="text-gray-800 mt-2">
                {avis && localStorage.getItem("articleId") == article.id && (
                  <div>
                    <span className="text-yellow-500 font-bold">
                      Votre avis :{" "}
                    </span>
                    {avis}
                  </div>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Article;
