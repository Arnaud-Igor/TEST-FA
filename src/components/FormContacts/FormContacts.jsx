import { useState } from "react";

function FormContacts() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div>
      <div className="container">
        <h2 className="text-3xl text-center font-bold text-gray-800">
          Contact Us
        </h2>
        <form className="py-4 mt-4 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div>
              <img
                src="https://img.freepik.com/free-photo/african-american-telemarketer-agent-corporate-operator-concept_1194-588937.jpg?t=st=1728910702~exp=1728914302~hmac=7dcd174aa93193b2d1e7d963de42c8ce44ba9354828c4bba043166b12bf61ab8&w=1480"
                alt="contact"
                className="w-full h-96 object-cover rounded-md"
              />
            </div>

            <div className="flex flex-col justify-center items-center space-y-4 w-full">
              <input
                type="text"
                placeholder="Name"
                className="p-2 border border-gray-400 rounded-md w-full md:w-3/4"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                className="p-2 border border-gray-400 rounded-md w-full md:w-3/4"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <textarea
                placeholder="Votre commentaire"
                cols={30} rows={8}
                className="p-2 border border-gray-400 rounded-md w-full md:w-3/4 resize-none"
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
              />
              <button
                type="submit"
                className="p-2 bg-green-500 text-white rounded-md w-full md:w-3/4"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(data);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormContacts;
