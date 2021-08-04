import { Link } from 'react-router-dom';
import styles from '../Styles/Nav.module.css';

function Nav() {
	return (
		<>
			<div className={styles.container}>
				<Link className={styles.logo} to="/">Covid-19</Link>
				<Link className="" to="/">Home</Link>
				<Link className="" to="/national">National</Link>
				<Link className="" to="/statewise">State Wise</Link>
			</div>
		</>
	)
}

export default Nav;