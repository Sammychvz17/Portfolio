import { motion, AnimatePresence } from "motion/react";

function Card({ title, description, image }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="card"
        >
            {image && <img src={image} alt={title} className="card-image" />}
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </motion.div>
    );
}

export default Card;