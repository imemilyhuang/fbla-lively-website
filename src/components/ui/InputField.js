import useWidth from "../../useWidth"


export default InputField = ({label, onChangeHandler, type, value, placeHolder, isRequired}) => {
    const width = useWidth()

    const littleInput = () => {
        if (width > 550) { 
          return {
            width: "100%",
            fontSize: "1.2rem",
            marginTop: "2rem"
          }
        } else if (width > 400) { 
          return {
            width: "100%",
            fontSize: "1.2rem",
            marginTop: "2rem"
          }
        } else { 
          return {
            width: "100%",
            fontSize: "1rem",
            marginTop: "2rem"
          }
        }
    }
    
    return (
        <div>
            <p>{label}</p>
            <input
                type={type}
                style={littleInput()}
                placeholder={placeHolder}
                value={value}
                onChange={(e) => onChangeHandler(e.target.value)}
                isRequired={isRequired}
            />
        </div>
    )
}