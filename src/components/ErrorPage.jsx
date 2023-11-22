import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page">
            <p>Unexpected error</p>
            <p>{error.statusText || error.message}</p>
        </div>
    );
}

export default ErrorPage;