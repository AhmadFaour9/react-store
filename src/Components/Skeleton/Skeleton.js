import "./Skeleton.css"
import {CiImageOn} from 'react-icons/ci'
const Skeleton = ({ count }) => {
    return (
        <> {[...Array(count)].map((item) => (
            <div className="col">
                <div
                    className="skelton-con">
                    <div className="skeleton-img">
                        <CiImageOn/>
                    </div>
                    <p className="p-skeleton"></p>
                    <p className="p-skeleton"></p>
                    <p className="p-skeleton"></p>
                </div>
            </div>
        )
        )
        }
        </>
    )
}

export default Skeleton