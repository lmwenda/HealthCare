import { motion } from "framer-motion"
import CreateSession from "../../../components/Cards/CreateSession"

export default () => {
    return(
        <motion.div 
        animate={{ x: [  -75, 0 ], 
        opacity: [ 0, 0.5, 0.7, 0.9, 1 ] }} 
        transition={{ ease: 'easeIn', duration: 0.5 }} 
        className="mt-5 flex flex-col justify-center text-center overflow-y-hidden">
            <CreateSession />
            <br />
            <h1>Your Orders</h1>
        </motion.div>
    )
}