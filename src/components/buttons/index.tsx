import { Button } from "@mui/material"

const ButtonComponent = (props:any) => {
    return (
        <>
            <Button variant={props.variant} color={props.color}>{props.variant}</Button>
        </>
    )
}
export default ButtonComponent;