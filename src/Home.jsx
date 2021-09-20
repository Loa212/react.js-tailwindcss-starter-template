import { useDisclosure } from "@chakra-ui/react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    //useLocation
} from "react-router-dom";
import MyDrawer from "./components/MyDrawer";
import Landing from "./views/Landing";



const Home = () => {
    document.title = 'Chakra'


    // A custom hook that builds on useLocation to parse
    // the query string for you.
    // function useQuery() {
    //   return new URLSearchParams(useLocation().search);
    // }

    //drawer
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Router>
            <MyDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>   
            <Switch>
                <Route exact path='/'>
                    <Landing onOpen={onOpen}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Home
