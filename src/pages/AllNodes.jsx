import React, { useEffect, useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import Form from '../components/Form';
import { Link } from "react-router-dom";
import axios from 'axios';

const AllNodes = () => {

  const [myData, setMyData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const getApiData = async ()=>{
    try {
      const res = await axios.get('/api/get_all_node/');
      setMyData(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getApiData()
  },[])

  const handleIconClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  const handleAdd = () => {
    // Handle form submission logic here
    setShowForm(false);
  };

  return (
    <div className='flex-grow p-5 ml-4 mt-20 lg:ml-[250px] transition-all duration-1000'>
      <div>
        <p className='text-lg text-purple-400'>Node List--{">"}</p>
      </div>

      <div className='flex items-center justify-end mr-10 mb-2'>
        <IoIosAddCircleOutline className='text-3xl text-gray-400 cursor-pointer' onClick={handleIconClick} />
        {showForm && (<Form handleClose={handleClose} handleAdd={handleAdd} />)}
      </div>

      <div className='overflow-x-auto'>
        <table className="min-w-full border border-solid">
          <thead>
            <tr>
              <th className="px-6 py-5 border-b text-left">Name</th>
              <th className="px-6 py-5 border-b text-left">GID</th>
              <th className="px-6 py-5 border-b text-left">Node_ID</th>
              <th className="px-6 py-5 border-b text-left">Publish_iD</th>
              <th className="px-6 py-5 border-b text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {myData.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="px-6 py-5 flex items-center font-bold">
                  <input type="checkbox" className='mr-3 h-4 w-4' />
                  <img src={"/images/node.png"} alt="profile" className='h-7 border-2 rounded-full mr-2 bg-purple-200' />
                  {`Node${item.nodeid}`}
                </td>
                <td className="px-6 py-5">{item.gatewayId}</td>
                <td className="px-6 py-5">{item.nodeid}</td>
                <td className="px-6 py-5">{item.publish_id}</td>
                <td className="px-6 py-5 flex">
                  <Link to={`/update/${item.id}`}
                  className='h-9 w-9 bg-blue-400 mr-2 rounded flex items-center justify-center'>
                    <FaRegEdit className='text-lg text-white' />
                  </Link>

                  <button className='h-9 w-9 bg-red-500 rounded flex items-center justify-center'>
                    <MdOutlineDeleteForever className='text-xl text-white' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllNodes;
