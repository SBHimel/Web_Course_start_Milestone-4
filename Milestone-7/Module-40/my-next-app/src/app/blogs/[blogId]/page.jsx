
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

const BlogDetailPage = async({params}) => {
    const {blogId} = await params;
    const blog = blogs.find(blog => blog.id === parseInt(blogId));
    console.log("show me params",blog);
    return (
        <div>
            <h4 className="text-3xl">Blog detail coming soon</h4>
            {blog && <div>
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
            </div> }
        </div>
    );
};

export default BlogDetailPage;