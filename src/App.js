import Homepage from "./Components/Homepage/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResturantsContext from "./Components/ResturantsContext";
import ProtectBookTable from "./Components/BookTable/BookTable";
import WaitingList from "./Components/Homepage/WaitingList";
function App() {
    return (
        <>
            <Router basename={"/Chow"}>
                <ResturantsContext>
                    <Switch>
                        <Route path={"/wait-list"} exact>
                            <WaitingList />
                        </Route>
                        <Route path={"/booktable"} exact>
                            <ProtectBookTable />
                        </Route>
                        <Route path={""} exact>
                            <Homepage />
                        </Route>
                    </Switch>
                </ResturantsContext>
            </Router>
        </>
    );
}

export default App;
