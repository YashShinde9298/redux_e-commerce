import notFound from '../assets/img/404NotFound.jpg'

function NotFound() {
    return (<>
        <div className="grid place-items-center place-content-center mt-11">
            <img src={notFound} alt="not found" />
        </div>
    </>);
}

export default NotFound;