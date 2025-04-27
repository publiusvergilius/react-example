import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../network/posts";
import CreatePost from "./CreatePost";

export default function Posts () {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });

  console.log(data)
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>An error ocorred: {error.message}</p>;

  return (
	<div>
	<CreatePost />
	    <ul>
	      {data?.map((post) => (
		<li key={post.id}>{post.title}</li>
	      ))}
	    </ul>
	</div>
  );
};

