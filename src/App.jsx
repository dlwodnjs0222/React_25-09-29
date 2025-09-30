import Body from "./component/Body"
import Counter from "./component/Counter"
import ResizeListener from "./component/Resize_istener"
import ResponsiveComponent from "./component/ResponsiveCompnent"
import Timer from "./component/Timer"
import UserList from "./component/UserList"

function App() {

    return (
        <>
            <Body/>
            <Counter/>
            <Timer/>
            <UserList/>
            <ResizeListener/>
            <ResponsiveComponent/>
        </>
    )
}

export default App
