import {Routes, Route} from 'react-router-dom'
import CallapsibleTableTest from '../Test/CallapsibleTableTest'
import RecepcionTableTest from '../Test/RecepcionTableTest'

const TestRoutes = () => {
    return (
        <Routes>
            <Route path="CollapsibleTableTest" element={<CallapsibleTableTest />} />
            <Route path ="RecepcionTableTest" element={<RecepcionTableTest />} />
        </Routes>
    )
}

export default TestRoutes;