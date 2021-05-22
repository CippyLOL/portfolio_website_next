import React from 'react';
import { motion } from "framer-motion";

const container = {

    // 25/41
    height: "150px",
    width: "245px",
    // backgroundColor: "white",

    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr",
    gridTemplateAreas: "overlap",

}

const illust1 = {
    height: "150px",

    gridArea: "overlap",
    alignSelf: "center",
    justifySelf: "center",
}

const illust2 = {
    height: "50px",


    gridArea: "overlap",
    alignSelf: "center",
    justifySelf: "center",
}




const Illust_2 = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            style={container}>
            <img style={illust1} src="/illust_2_1.svg" alt="illust 2 1" />
            <motion.img
                animate={{ rotate: [0, -20, 20, 0], scale: [1, 1.1, 1, 0.8, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={illust2} src="/illust_2_2.svg" alt="illust 2 2" />
        </motion.div>
    );
}

export default Illust_2;
