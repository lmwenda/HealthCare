import { motion } from "framer-motion"
import { useRouter } from "next/router"
import CreateSession from "../../../components/Cards/CreateSession"
import Button from "../../../components/Recycled/Button"

export default () => {
    const router = useRouter();
    const logout = () => { localStorage.removeItem("htc-token"); router.push("/login"); router.reload(); };
    return(
        <motion.div 
        animate={{ x: [  -75, 0 ], 
        opacity: [ 0, 0.5, 0.7, 0.9, 1 ] }} 
        transition={{ ease: 'easeIn', duration: 0.5 }} 
        className="mt-5 flex flex-col justify-center text-center overflow-y-hidden">
            <CreateSession />
            <br />
            <Button onClick={logout}>Logout</Button>
        </motion.div>
    )
}