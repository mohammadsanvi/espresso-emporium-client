import React, {useState } from 'react';
import Hero from '../Hero/Hero';
import PopularProducts from '../PopularProducts/PopularProducts';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import FollowInstagram from '../FollowInstagram/FollowInstagram';
// import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees); 
      // const [loading, setLoading] = useState(false);
      // useEffect(() => {
      //   setLoading(false)
      // },[])

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure that you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://espresso-emporium-server-one-iota.vercel.app/coffees/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              setCoffees(prev => prev.filter(coffee => coffee._id !== _id));
              Swal.fire("Deleted!", "Deleted coffee details", "success");
            }
          });
      }
    });
  };
;

  return (
    <div>
      <Helmet>
              <title>Espresso Emporium | Home</title>
            </Helmet>
      <Hero />
      <PopularProducts coffees={coffees} onDelete={handleDelete} />
      <FollowInstagram></FollowInstagram>
    </div>
  );
};

export default Home;
