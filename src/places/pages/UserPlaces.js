import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Taj Mahal',
    description: 'One of the wonders of world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/1024px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg',
    address: '	Agra, Uttar Pradesh,',
    location: {
      lat: 27.1751495,
      lng: 78.0395673
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'India gate',
    description: 'Imposing Arc de Triomphe-style gate commemorating the Indian soliders killed in the First World War.',
    imageUrl:
      'https://lh5.googleusercontent.com/p/AF1QipO07jZ1K3-pEDzYJxWR9GsgKs-ILP-kPDP5X_AH=w408-h439-k-no',
    address: 'Kartavya Path, India Gate, New Delhi, Delhi 110001',
    location: {
      lat: 28.6129167,
      lng: 77.2269348
    },
    creator: 'u2'
  },
  {
    id: 'p3',
    title: 'Red Fort',
    description: 'Landmark 17th-century Mughal fortress built in towering red sandstone, now a complex of museums',
    imageUrl:
      'https://lh5.googleusercontent.com/p/AF1QipNDnNhecipuWUsS7x5huSwQD0it-LU_9yVSDOzN=w408-h306-k-no',
    address: 'Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi 110006',
    location: {
      lat: 28.6561639,
      lng: 77.2384454
    },
    creator: 'u3'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
