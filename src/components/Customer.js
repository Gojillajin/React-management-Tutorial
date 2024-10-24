import { TableRow, TableCell } from "@mui/material";

function Customer({id, img, name, birthday, gender, job}) {
    return(
        <>
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell><img src={img} alt="profile" /></TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{birthday}</TableCell>
            <TableCell>{gender}</TableCell>
            <TableCell>{job}</TableCell>
        </TableRow>
        </>
    )
}

export default Customer;