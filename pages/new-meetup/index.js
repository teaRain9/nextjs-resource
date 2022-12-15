import NewMeetupForm from '../../components/meetups/NewMeetupForm'

export default function NewMeetupPage() {
    function onMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
    }
    return <NewMeetupForm onAddMeetup={onMeetupHandler}/>
}