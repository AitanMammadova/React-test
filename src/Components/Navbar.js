const Navbar = (props) => {
    const {title} = props
    return ( 
        <div>
            <h4 style = {{margin:"10px"}}>{title}</h4>
        </div>
     );
}
 
export default Navbar;