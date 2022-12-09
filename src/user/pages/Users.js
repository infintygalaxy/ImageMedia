import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Rahul',
      image:
      'https://cdn.shopify.com/s/files/1/0752/6435/products/PEACHLINENSHIRT_765x.jpg?v=1667409059',
      places: 3
    },
    {
      id: 'u2',
      name: 'Rohit',
      image:
        'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/12/Bald_Man_Dog_iPhone_1296x728-header-1296x728.jpg?w=1155&h=1528',
      places: 3
    },
    {
      id: 'u3',
      name: 'Shubham',
      image:
        'https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/11629183376143.jpg',
      places: 3
    },
    {
      id: 'u4',
      name: 'Sanjay',
      image:
        'https://static01.nyt.com/images/2019/06/02/fashion/31upnext1/31upnext1-videoLarge.jpg',
      places: 3
    },
    {
      id: 'u5',
      name: 'Ranjan',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHyf7jfsnoxb93embWGpAImWnCR9tlvZbNQ&usqp=CAU',
      places: 3
    },{
      id: 'u5',
      name: 'Nikhil',
      image:
        'https://matalan-content.imgix.net/uploads/asset_file/asset_file/446716/1668077191.274769-WK4-Mens-DP_06.jpg?ixlib=rails-4.2.0&fm=pjpg&auto=format%2Ccompress&q=30&cs=tinysrgb&w=555&ar=555%3A572&s=2c11a68f2a182be85481502236dfa2d4',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
