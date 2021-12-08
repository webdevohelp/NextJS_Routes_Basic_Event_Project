import React from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';

function FilteredEvents() {
    const router = useRouter();
    const filteredData = router.query.slug;

    if (!filteredData) {
        return <p className="center">Loading...</p>;
    }
    const filteredYear = +filteredData[0];
    const filteredMonth = +filteredData[1];

    if (
        isNaN(filteredYear) ||
        isNaN(filteredMonth) ||
        filteredYear > 2030 ||
        filteredYear < 2021 ||
        filteredMonth < 1 ||
        filteredMonth > 12
    ) {
        return <p>Invalid filter! Please check your values.</p>;
    }

    const filteredEvents = getFilteredEvents({
        year: filteredYear,
        month: filteredMonth,
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return <h1>No events found!</h1>;
    }

    return (
        <div>
            <EventList items={filteredEvents} />
        </div>
    );
}

export default FilteredEvents;
