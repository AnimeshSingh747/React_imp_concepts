import React from 'react'
import React from 'react-dom';

//Higher order component
function withLoading(Component) {
    return function LoadingComponent({ isloading, ...props }) {
        if (isLoading) return <p>Loading...</p>;
        return <Component {...props} />;
    };
}

//Base Component
function DataDisplay({ data }) {
    return <div>{data}</div>;
}

//Enhanced component
const DataDisplayWithLoading = withLoading(DataDisplay);

function App() {
    return (
        <div>
            <h1>HOC Example</h1>
            <DataDisplayWithLoading isloading={true} data="Here is the data" />
        </div>
    );
}

export default HOCs
