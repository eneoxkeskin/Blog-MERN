import { Sidebar } from 'flowbite-react';
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiChartPie,
} from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { signoutSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function DashSidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <nav className="bg-gradient-to-tr from-indigo-100 via-blue-500 to-navy-900 rounded-lg text-whitew-56 min-h-screen flex flex-col justify-between">
      <div className="p-4">
 
        <div className="flex flex-col gap-3">
          {currentUser && currentUser.isAdmin && (
            <Link to="/dashboard?tab=dash">
              <div
                className={`flex items-center p-3 rounded-md cursor-pointer ${
                  tab === 'dash' || !tab ? 'bg-gradient-to-tr from-indigo-500 via-blue-500 to-navy-900 rounded-lg text-white' : ''
                } hover:bg-gradient-to-tr from-indigo-500 via-blue-500 to-navy-900 rounded-lg text-white`}
              >
                <HiChartPie className="text-xl" />
                <span className="ml-2">Dashboard</span>
              </div>
            </Link>
          )}
          <Link to="/dashboard?tab=profile">
            <div
              className={`flex items-center p-3 rounded-md cursor-pointer ${
                tab === 'profile' ? 'bg-gradient-to-tr from-indigo-500 via-blue-500 to-navy-900 rounded-lg text-white' : ''
              } hover:bg-gradient-to-tr from-indigo-500 via-blue-500 to-navy-900 rounded-lg text-white`}
            >
              <HiUser className="text-xl" />
              <span className="ml-2">
                Profile {currentUser.isAdmin ? 'Admin' : 'User'}
              </span>
            </div>
          </Link>
          {currentUser.isAdmin && (
            <Link to="/dashboard?tab=posts">
              <div
                className={`flex items-center p-3 rounded-md cursor-pointer ${
                  tab === 'posts' ? 'bg-gradient-to-tr from-indigo-500 via-blue-500 to-navy-900 rounded-lg text-white' : ''
                } hover:bg-gradient-to-tr from-indigo-500 via-blue-500 to-navy-900 rounded-lg text-white`}
              >
                <HiDocumentText className="text-xl" />
                <span className="ml-2">Posts</span>
              </div>
            </Link>
          )}
          {currentUser.isAdmin && (
            <>
              <Link to="/dashboard?tab=users">
                <div
                  className={`flex items-center p-3 rounded-md cursor-pointer ${
                    tab === 'users' ? 'bg-gradient-to-tr from-indigo-500 via-blue-500 to-navy-900 rounded-lg text-white' : ''
                  } hover:bg-gradient-to-tr from-indigo-500 via-blue-500 to-navy-900 rounded-lg text-white`}
                >
                  <HiOutlineUserGroup className="text-xl" />
                  <span className="ml-2">Users</span>
                </div>
              </Link>
              <Link to="/dashboard?tab=comments">
                <div
                  className={`flex items-center p-3 rounded-md cursor-pointer ${
                    tab === 'comments' ? 'bg-gradient-to-tr from-indigo-500 via-blue-500 to-navy-900 rounded-lg text-white' : ''
                  } hover:bg-gradient-to-tr from-indigo-500 via-blue-500 to-navy-900 rounded-lg text-white`}
                >
                  <HiAnnotation className="text-xl" />
                  <span className="ml-2">Comments</span>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
      <div
        className="flex items-center p-3 rounded-md cursor-pointer hover:bg-gradient-to-tr from-indigo-500 via-blue-500 to-navy-900 rounded-lg text-white"
        onClick={handleSignout}
      >
        <HiArrowSmRight className="text-xl" />
        <span className="ml-2">Sign Out</span>
      </div>
    </nav>
  );
  
  
  
}
