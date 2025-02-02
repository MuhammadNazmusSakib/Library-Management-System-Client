import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';

const ProfileBar = () => {
  const location = useLocation();
  const [isAdmin] = useAdmin()

  return (
    <div className='mt-4'>
      <div className="hidden lg:flex flex-col">
        <Link
          to="/my-profile/all-books"
          className={`${location.pathname === '/my-profile/all-books' ? 'bg-gray-300 text-black' : ''
            } font-semi-bold p-2 hover:bg-slate-200 hover:text-blue-600`}
        >
          All Books
        </Link>
        {
          isAdmin &&
          <>
            <Link
              to="/my-profile/add-book"
              className={`${location.pathname === '/my-profile/add-book' ? 'bg-gray-300 text-black' : ''
                } font-semi-bold p-2 hover:bg-slate-200 hover:text-blue-600`}
            >
              Add Books
            </Link>
            <Link
              to="/my-profile/update-books"
              className={`${location.pathname === '/my-profile/update-books' ? 'bg-gray-300 text-black' : ''
                } font-semi-bold p-2 hover:bg-slate-200 hover:text-blue-600`}
            >
              Update Books
            </Link>
          </>
        }
        <Link
          to="/my-profile/borrowed-books"
          className={`${location.pathname === '/my-profile/borrowed-books' ? 'bg-gray-300 text-black' : ''
            } font-semi-bold p-2 hover:bg-slate-200 hover:text-blue-600`}
        >
          Borrowed Books
        </Link>
      </div>
    </div>
  );
};

export default ProfileBar;
