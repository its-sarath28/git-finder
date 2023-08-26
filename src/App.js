import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import ProfileInfo from "./components/ProfileInfo";
import Repository from "./components/Repository";

function App() {
  const [notFound, setNotFound] = useState(false);
  const [profile, setProfile] = useState({});
  const [repo, setRepo] = useState([]);

  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;

    if (userName.length > 0) {
      setNotFound(false);
      setProfile({});
      setRepo([]);

      try {
        const profileResponse = await fetch(
          `https://api.github.com/users/${userName}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        );

        const profileData = await profileResponse.json();

        if (profileData.message === "Not Found") {
          setNotFound(true);
        } else {
          const repoResponse = await fetch(
            `${profileData.repos_url}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&per_page=10`
          );

          const repoData = await repoResponse.json();

          setProfile(profileData);
          setRepo(repoData);
        }
      } catch (error) {
        console.log("Error fetching Data: ", error);
      }
    }
  };

  return (
    <>
      <Navbar />
      <SearchForm handleSubmit={handleSubmit} />
      {notFound && (
        <div className="text-center mt-12 text-4xl text-red-500">
          User Not Found !
        </div>
      )}

      <div
        className={`user-details ${
          profile.login ? "flex" : "hidden"
        } mx-auto max-w-4xl mt-8`}
      >
        {profile.login && <ProfileInfo profile={profile} />}

        <div className=" w-2/3 m-4 pl-8">
          <div className="text-center text-gray-700">
            <h2 className="text-4xl font-bold">Repositories</h2>
          </div>

          <div className="mt-4">
            {repo.map((repo) => (
              <Repository repo={repo} key={repo.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
