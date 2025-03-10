

import BlogCards from "@/components/blogcards";

export default function Home() {
  const blogs = [
    {
    slug: 'apple-innovation-strategy',
    title: 'How Apple Drives Innovation in Technology',
    description: 'Explore the strategies that make Apple a leader in technology innovation.',
    blogImage: '/images/blog1.png',
    },
    {
      title :'Tailwind Css: Tips and tricks to style your apps',
      description: 'Explore the best tips and tricks for using tailwind CSS to style your apps.',
      blogImage: '/images/blog2.jpeg',
      slug: 'tailwind-css-tips',
    },
    {
      slug: 'google-ai-revolution',
      title: 'Google and the AI Revolution: Transforming Industries',
      description: 'Discover how Google\'s AI initiatives are changing various sectors.',
      blogImage: '/images/blog3.jpeg',
    },
    {
      slug: 'facebook-data-privacy',
    title: 'Data Privacy Challenges at Facebook',
    description: 'An analysis of the data privacy issues facing Facebook and their implications.',
    blogImage: '/images/blog4.jpeg',
    },
    {
      title : 'Mastering Next.js: A Begginer\'s Journey',
      description: 'Learn How to built powerful web applications with nextjs',
      blogImage: '/images/blog5.jpeg',
      slug: 'nextjs-beginners',
    },
    {
      slug: 'amazon-ecommerce-strategies',
    title: 'Amazon\'s E-commerce Strategies: Lessons for Startups',
    description: 'Learn about Amazon\'s key strategies that have made it an e-commerce giant.',
    blogImage: '/images/blog6.webp',
    }
  ]
  return (
   
   <div className=" container  w-full min-h-screen  mx-auto p-8 bg-gradient-to-r from-[#f2f6de]  via-[#bec29f] to-[#adbe15]">
   

    <h1 className="text-4xl fonet-bold mb-6 text-center ">
      Latest Blogs
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 scale-up-center">
      {blogs.map((blog) => (
        
        <BlogCards  key={blog.slug} title={blog.title} description={blog.description} blogImage={blog.blogImage} slug={blog.slug}/>
      ))};
    </div>
      
    
     
   </div>
  );
}
