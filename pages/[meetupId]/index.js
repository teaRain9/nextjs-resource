import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function DetailPage(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      },
      {
        params: {
          meetupId: 'm2'
        }
      }
    ]
  }
}

export async function getStaticProps(context) {
  //fetch the data for a single meetup

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        id: meetupId,
        title: 'A First Meetup',
        address: 'Some Street 5, Some City',
        description: 'The meetup description',
      }
    },
    revalidate: 1,
  }
}


