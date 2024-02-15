import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-xl'>Welcome to <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
<span className='px-8 py-2 text-lg bg-gradient-to-tr from-sky-500 via-sky-600 to-navy-900 rounded-lg text-white'>
  ENES KESKİN
</span>





        
      </Link></h1>
      <p className='text-gray-600 text-lg'>
      Dive into the world of ideas and discussions! This is a space where you can freely express your thoughts and engage in insightful conversations. Whether you're passionate about technology, arts, or anything in between, our blog is the perfect platform for you.
    </p>
    <p className='text-gray-600 text-lg mt-4'>
      Join our vibrant community, share your perspectives, and explore diverse opinions. Let's foster a community of open-minded individuals who value the power of dialogue. Welcome to a place where your ideas matter.
    </p>
      
      </div>
   

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
