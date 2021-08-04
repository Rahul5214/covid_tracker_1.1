import s from '../Styles/StateWise.module.css'

function StateWise({ data }) {
    if (!data.length) return "loading...";

    return (
        <>
            <div className={s.container}>
                <h1>State wise data of Covid-19</h1>
                <table className={s.table_container}>
                    <thead>
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Active</th>
                            <th>Deaths</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((ele, id) =>
                            <tr>
                                <td key={1}>{ele.state}</td>
                                <td key={2}>{ele.confirmed}</td>
                                <td key={3}>{ele.recovered}</td>
                                <td key={4}>{ele.active}</td>
                                <td key={5}>{ele.deaths}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default StateWise;