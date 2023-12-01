import MoulinexBody from "./MoulinexBody/MoulinexBody";
const moulinex = require('../../../mocks/moulinex.json')

export default function Moulinex () {
    return (
        <div className="mt-5">
            <MoulinexBody {... moulinex} />
        </div>
    )
}