import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

/**
 * The Github component displays information about the user from Github.
 * It fetches the data from the Github API and displays the avatar, name, username, followers,
 * following, location, bio, public repos and public gists.
 *
 * @returns {JSX.Element} The Github component.
 */
function Github() {
  /*
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Yaminikanta-code")
      .then((res) => res.json())
      .then((data) => setData(data));
  });
  */

  const data = useLoaderData();
  return (
    <div className="text-3xl text-center font-bold p-4 m-4 flex flex-row justify-center items-center">
      <img src={data.avatar_url} alt="avatar" />
      Github name: {data.name} <br />
      Github username: {data.login} <br />
      Github followers: {data.followers} <br />
      Github following: {data.following} <br />
      Github location: {data.location} <br />
      Github bio: {data.bio} <br />
      Github public repos: {data.public_repos} <br />
      Github public gists: {data.public_gists}
    </div>
  );
}

export default Github;

/**
 * An asynchronous function that fetches user data from the Github API for a specific username.
 *
 * @returns {Promise<Object>} A promise that resolves to a JSON object containing the user's Github data.
 */
export const GithubLoader = async () => {
  const res = await fetch("https://api.github.com/users/Yaminikanta-code");
  return res.json();
};
