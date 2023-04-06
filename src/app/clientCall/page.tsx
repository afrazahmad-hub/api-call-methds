"use client";

// For client side we need to install SWR library.
import useSWR from "swr";

// the url from where we will fatch data.
const url = "https://api.quotable.io/random?tags=technology";

// fatcher function, to fatch the data from url.
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ClientApiCall = () => {
  // call the useSWR function, to render data to the client side.
  const { data, isLoading, error } = useSWR(url, fetcher);
  if (isLoading)
    return (
      <div>
        <h1>Client side data</h1>
        Loading...
      </div>
    );
  if (error)
    return (
      <div>
        <h1>Client side data</h1>
        Error
      </div>
    );
  return (
    <div>
      <h1>Client side data</h1>
      <div>{data.content}</div>
    </div>
  );
};

export default ClientApiCall;
