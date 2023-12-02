import MoulinexBody from "./MoulinexBody/MoulinexBody";
const moulinex = require('../../../mocks/moulinex.json')

export default function Moulinex () {
    return (
        <div className=" my-10">
            <MoulinexBody {... moulinex} />
        </div>
    )
}