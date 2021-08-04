import s from '../Styles/National.module.css';
import CountUp from 'react-countup';

function National({ data: { confirmed, recovered, active, deaths, lastupdatedtime } }) {
    if (!confirmed) { return 'Loading...'; }

    let dateParts = lastupdatedtime.split(" ")[0].split("/");
    let dateString = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]).toDateString();

    return (
        <>
            <div className={s.container}>
                <h1 className={s.hero}>Live Covid-19 tracker</h1>
                <h3 className={s.india}>India</h3>
                <div className={s.containerCard}>
                    <div className={s.confirmed}>
                        <h2 className={s.title}>Confirmed</h2>
                        <h1 className={s.data}>
                            <CountUp start={0} end={parseInt(confirmed, 10)} duration={1.5} separator="," />
                        </h1>
                    </div>
                    <div className={s.recovered}>
                        <h2 className={s.title}>recovered</h2>
                        <h1 className={s.data}>
                            <CountUp start={0} end={parseInt(recovered, 10)} duration={1.5} separator="," />
                        </h1>
                    </div>
                    <div className={s.active}>
                        <h2 className={s.title}>active</h2>
                        <h1 className={s.data}>
                            <CountUp start={0} end={parseInt(active, 10)} duration={1.5} separator="," />
                        </h1>
                    </div>
                    <div className={s.deaths}>
                        <h2 className={s.title}>deaths</h2>
                        <h1 className={s.data}>
                            <CountUp start={0} end={parseInt(deaths, 10)} duration={1.5} separator="," />
                        </h1>
                    </div>
                </div>

                <h2 className={s.lastUpdate}>Last Updated On: {dateString}</h2>

                <h2 className={s.source}><a href="https://api.covid19india.org/data.json" target="blank" >Source</a></h2>

            </div>
        </>
    )
}

export default National;