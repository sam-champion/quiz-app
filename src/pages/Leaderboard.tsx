import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import { User } from "../types";

import Navbar from "../components/Navbar";

function Leaderboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch usernames and highscores from Firestore
  const fetchUsers = async () => {
    try {
      const usersCollection = collection(db, "users");
      const q = query(usersCollection, orderBy("highscore", "desc"));
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);

      const usersData: User[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as User[];

      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
        <Navbar />
        <div className="py-10 px-5 sm:px-10">
          <h1 className="text-center text-4xl sm:text-5xl text-yellow-300 font-bold mb-5">
            Leaderboard
          </h1>
          {loading ? (
            <p className="text-center text-white text-xl">Loading...</p>
          ) : (
            <div className="overflow-x-auto mx-auto rounded-lg shadow-lg max-w-4xl">
              <table className="table-auto w-full text-white">
                <thead className="bg-white bg-opacity-30 text-white border-b-2 border-yellow-400">
                  <tr>
                    <th className="px-3 py-4 text-left">Rank</th>
                    <th className="px-3 py-4 text-left">Username</th>
                    <th className="px-3 py-4 text-left">Highscore</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr
                      key={user.id}
                      className="odd:bg-indigo-600 even:bg-indigo-700 hover:bg-indigo-500 border-b-2 border-white border-opacity-30"
                    >
                      <td className="px-3 py-2 text-left">{index + 1}</td>
                      <td className="px-3 py-2 text-left">{user.username}</td>
                      <td className="px-3 py-2 text-left">{user.highscore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
