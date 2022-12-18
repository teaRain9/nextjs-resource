import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function DetailPage() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      title="A First Meetup"
      address="Some Street 5, Some City"
      description="The meetup description"
    />
  );
}
