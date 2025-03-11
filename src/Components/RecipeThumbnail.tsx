import { Link } from "react-router-dom";

type RecipeThumbnailProps = {
    className: string
    pathName: string
    name: string
    img: string
}

export default function RecipeThumbnail({ className, pathName, name, img }: RecipeThumbnailProps) {
    return (
        < div className={className} >
            <Link to={{
                pathname: pathName,
                search: `?name=${name}&img=${img}`
            }}>
                <img src={`../../images/${img}`} />
            </Link>
            <p>{name}</p>
        </div >
    )
}
