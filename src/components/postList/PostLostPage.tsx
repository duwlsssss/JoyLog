// import CategoryList from "./CategoryList";
// import PostCard from "./PostCard";
// import { Post } from "@/config/types";
// import {
//   getAllPostCount,
//   getCategoryDetailList,
//   getHotPostCount,
// } from "@/lib/post";

// interface PostListProps {
//   postList: Post[];
//   category?: string;
// }

// const PostListPage = async ({ category, postList }: PostListProps) => {
//   const postList = await getSortedPostList();
//   const categoryList = await getCategoryDetailList();

//   return (
//     <section>
//       <CategoryList list={categoryList} />
//       <section>
//         <ul>
//           {postList.map((post) => (
//             <PostCard key={post.url + post.date} post={post} />
//           ))}
//         </ul>
//       </section>
//     </section>
//   );
// };

// export default PostListPage;
