/* eslint-disable react/prop-types */

export default function Button (props){
    console.log('style', props.style)
    return(
        <>
            <button className="btn btn-outline">{props.title}</button>
        </>
        
    )
}
