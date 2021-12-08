import React from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

function SingleEvent() {
    const router = useRouter();
    const eventID = router.query.eventID;
    const event = getEventById(eventID);

    if (!event) {
        return <p>No event found!</p>;
    }

    return (
        <React.Fragment>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </React.Fragment>
    );
}

export default SingleEvent;
