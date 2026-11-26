import JWT from "jsonwebtoken";

const FetchUser = (req , res , next)=>{
const token = req.header('auth-token');
if(!token)
{
    return res.status(401).json({err : "Please Authenticate Using a Valid Token"});
}
try {
    const decode = JWT.verify(token , 'aptech123');
    req.userid = decode.user.id;
    next();
     
} catch (error) {
        res.status(500).json({ err: "Internal Server Error" });
    }
}

export default FetchUser;