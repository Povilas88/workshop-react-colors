export function Button({ text, btnClass, changeColor, color }) {
    return (
        <button onClick={changeColor} className={btnClass} style={{ background: color }}>{text}</button>
    )
}