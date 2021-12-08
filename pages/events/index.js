import React from 'react';
import { useRouter } from 'next/router';

import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../dummy-data';

function Events() {
    const allEvents = getAllEvents();
    const router = useRouter();

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }

    return (
        <React.Fragment>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={allEvents} />
        </React.Fragment>
    );
}

export default Events;
