import Link from "next/link";

import { Roboto } from 'next/font/google'
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Learning React Basics",
      author: "Himel",
      date: "2026-04-10",
      description:
        "This blog explains the basic concepts of React like components, props, and state.",
    },
    {
      id: 2,
      title: "Understanding Next.js Routing",
      author: "Kamal",
      date: "2026-04-12",
      description:
        "A simple guide to file-based routing and navigation in Next.js.",
    },
    {
      id: 3,
      title: "JavaScript Tips for Beginners",
      author: "Rahim",
      date: "2026-04-14",
      description:
        "Useful JavaScript tips and tricks to improve your coding skills.",
    },
    {
      id: 4,
      title: "Frontend Development Roadmap",
      author: "Sadia",
      date: "2026-04-16",
      description:
        "Step-by-step roadmap to become a frontend developer in 2026.",
    },
  ];

  return (
    <div className={roboto.className}>
      <h2 className="text-3xl font-bold mb-4">Blogs</h2>

      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3 className="tex-4xl font-bold mb-2">{blog.title}</h3>
          <Link  href={`/blogs/${blog.id}`}>Show details</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
