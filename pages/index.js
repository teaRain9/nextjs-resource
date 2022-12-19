import MeetupList from "../components/meetups/MeetupList";
import {useEffect, useState} from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12334 Some City",
    description: "This is the first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12634 Some City",
    description: "This is the second meetup!",
  },
];


function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}


export async function getStaticProps() {
  //fetch data from an api
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props : {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export default HomePage;
