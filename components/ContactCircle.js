import React from 'react';
import { motion } from 'framer-motion';

const circle = {
    height: "110px",
}

const ContactCircle = () => {
    return (
        <div>
            <motion.img
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30 }}
                style={circle} src="/contact.svg" alt="contact svg" />
        </div>
    );
}

export default ContactCircle;
