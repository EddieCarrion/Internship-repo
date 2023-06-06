State.init({name: "what's your name?"})
const onChange = ({target})=>{
State.update({name: target.value})
}
let names = []
const onCLick = ()=>{
    names = [state.name,...names]

}
return (<>
<div className="container border border-info p-3 min-vw-100">
    <p>
        <b>name:</b> {state.name}
    </p>
    <label className="text-left">change the name</label>
    <input onChange={onChange} />
    <button onClick={onCLick}></button>
    <p>
        <b>list of names:</b> {names}
    </p>
</div>
</>)