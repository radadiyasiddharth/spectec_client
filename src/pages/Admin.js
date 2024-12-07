import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Admin() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-800 text-white flex-shrink-0">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Admin Dashboard</h2>
          <nav>
            <ul>
              <li className="mb-4">
                <Link to="/admin/users" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
                  Users
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/admin/products" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}

export default Admin;
