import React, { useState } from "react";
import { FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";

const UserManagementDashboard = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Anderson",
      email: "john.anderson@example.com",
      company: "Tech Solutions Inc.",
      role: "Software Engineer"
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      email: "sarah.mitchell@example.com",
      company: "Digital Innovations",
      role: "Product Manager"
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "michael.chen@example.com",
      company: "Cloud Systems LLC",
      role: "DevOps Engineer"
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      email: "emily.rodriguez@example.com",
      company: "Data Analytics Pro",
      role: "Data Scientist"
    },
    {
      id: 5,
      name: "David Kim",
      email: "david.kim@example.com",
      company: "Web Solutions Co.",
      role: "UI/UX Designer"
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: ""
  });

  const handleAddUser = (e) => {
    e.preventDefault();
    if (editMode && selectedUser) {
      const updatedUsers = users.map(user =>
        user.id === selectedUser.id ? { ...user, ...formData } : user
      );
      setUsers(updatedUsers);
      setEditMode(false);
      setSelectedUser(null);
    } else {
      const newUser = {
        id: users.length + 1,
        ...formData
      };
      setUsers([...users, newUser]);
    }
    setShowModal(false);
    setFormData({ name: "", email: "", company: "", role: "" });
  };

  const handleEditUser = (user) => {
    setEditMode(true);
    setSelectedUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      company: user.company,
      role: user.role
    });
    setShowModal(true);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-10 text-center"
            aria-label="User Management Dashboard">
          User Management Dashboard
        </h1>

        <div className="flex justify-end mb-8">
          <button
            onClick={() => {
              setEditMode(false);
              setSelectedUser(null);
              setFormData({ name: "", email: "", company: "", role: "" });
              setShowModal(true);
            }}
            className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            aria-label="Add new user"
          >
            <FiPlus className="mr-2" />
            Add User Details
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user) => (
            <div
              key={user.id}hover:scale-105 hover:shadow-2xl
              className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-90 rounded-2xl shadow-xl all duration-300  border border-gray-100"p-8 transform transition-
              aria-label={`User card for ${user.name}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{user.name}</h2>
                  <p className="text-gray-500 text-sm mt-1">ID: {user.id}</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 flex items-center">
                  <span className="font-semibold min-w-[80px]">Email:</span> 
                  <span className="ml-2">{user.email}</span>
                </p>
                <p className="text-gray-700 flex items-center">
                  <span className="font-semibold min-w-[80px]">Company:</span>
                  <span className="ml-2">{user.company}</span>
                </p>
                <p className="text-gray-700 flex items-center">
                  <span className="font-semibold min-w-[80px]">Role:</span>
                  <span className="ml-2">{user.role}</span>
                </p>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => handleEditUser(user)}
                  className="p-2 text-purple-600 hover:bg-purple-50 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  aria-label={`Edit ${user.name}'s details`}
                >
                  <FiEdit2 size={20} />
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="p-2 text-pink-600 hover:bg-pink-50 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  aria-label={`Delete ${user.name}'s account`}
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl transform transition-all duration-300">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                {editMode ? "Edit User" : "Add New User"}
              </h2>
              <form onSubmit={handleAddUser} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-gray-700 font-medium mb-2">Role</label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-4 mt-8">
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setEditMode(false);
                      setSelectedUser(null);
                      setFormData({ name: "", email: "", company: "", role: "" });
                    }}
                    className="px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium"
                  >
                    {editMode ? "Update User" : "Add User"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagementDashboard;