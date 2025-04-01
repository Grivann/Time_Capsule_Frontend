import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/test/", { cache: "no-store" }) 
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Next + Django</h1>
      <p className="text-lg">{data ? data.message : "Loading..."}</p>

      <div className="mt-6 space-x-4">
        <Link href="http://127.0.0.1:8000/auth/registration">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
            Register
          </button>
        </Link>

        <Link href="http://127.0.0.1:8000/auth/login">
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
