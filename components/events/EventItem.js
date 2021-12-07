import Link from 'next/link';
function EventItem(props) {
    const { title, image, date, location, id } = props;
    const convertedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const convertedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return (
        <li>
            <img src={'/' + image} alt={title} />
            <div>
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time>{convertedDate}</time>
                    </div>
                    <div>
                        <address>{convertedAddress}</address>
                    </div>
                </div>
                <div>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </div>
        </li>
    );
}

export default EventItem;
