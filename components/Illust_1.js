import React from 'react';
import { motion } from "framer-motion";


const container = {

    height: "280px",
    width: "380px",
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
    height: "250px",


    gridArea: "overlap",
    alignSelf: "center",
    justifySelf: "center",
}

const illust3 = {
    height: "280px",


    gridArea: "overlap",
    alignSelf: "center",
    justifySelf: "center",
}

const scaling = { scale: 0.8 }

const Illust_1 = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scaling }}

            style={container} >

            <motion.img
                animate={{ y: [0, -10, 20, 0], x: [0, -10, 20, 0] }}
                transition={{ duration: 2 }}
                style={illust1} src="/illust_1_1.svg" alt="illust 1 1" />
            <motion.img
                animate={{ scale: [0, 1, 1.2, 1, 1.2, 1.1] }}
                transition={{ duration: 2 }}
                style={illust2} src="/illust_1_2.svg" alt="illust 1 2" />
            <motion.img
                animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 2 }}
                style={illust3} src="/illust_1_3.svg" alt="illust 1 3" />
        </motion.div>
    );
}

export default Illust_1;
