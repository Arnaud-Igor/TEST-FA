import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ArticleAvis() {
  const [avis, setAvis] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("avis", avis);
    localStorage.setItem("articleId", id);

    navigate("/");
  };

  return (
    <div className>
      <div className="container flex items-center justify-center h-screen">
        <form onSubmit={handleSubmit} className="w-[350px]">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full border">
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              Laisser un avis
            </h2>
            <div className="mt-4">
              <input
                onChange={(e) => setAvis(e.target.value)}
                placeholder="Votre message"
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <button
                type="submit"
                className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Envoyer
              </button>

              <Link
                to="/"
                className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Retour
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ArticleAvis;
