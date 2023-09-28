import moment from 'moment'

const RightColumn = () => {
    return (
        <div className="right-column">
            <div className="search-bar">
                <input placeholder="Search"></input>
            </div>
            <div className="column-date">
                {/* {new Date(Date.now()).toLocaleString().split(',')[0]} */}
                {moment().format('LLL')}
            </div>
        </div>
    )
}

export default RightColumn