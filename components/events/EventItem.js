import styles from './EventItem.module.css';
import Button from '../UI/Button';
import DateIcon from '../icons/DateIcon';
import AddressIcon from '../icons/AddressIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';

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
        <li className={styles.item}>
            <img src={'/' + image} alt={title} />
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <DateIcon />
                        <time>{convertedDate}</time>
                    </div>
                    <div className={styles.address}>
                        <AddressIcon />
                        <address>{convertedAddress}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={styles.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
}

export default EventItem;
