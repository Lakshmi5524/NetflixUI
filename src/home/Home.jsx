import './home.scss'
// import { AcUnit } from '@material-ui/icons'
import Navbar from '../componets/navbar/Navbar'
import Featured from '../componets/featured/Featured'
const Home = () => {
	return (
		<div className="home">
			<Navbar />
			<Featured />
		</div>
	)
}

export default Home
