import React from 'react';
import { motion } from "framer-motion";

const container = {

    height: "340px",
    width: "245px",
    // backgroundColor: "white",

    // display: "grid",
    // gridTemplateColumns: "1fr",
    // gridTemplateRows: "1fr",
    // gridTemplateAreas: "overlap",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

}

const illust1 = {
    height: "90px",

    // gridArea: "overlap",
    // alignSelf: "center",
    // justifySelf: "center",
    //transform: "translate(0,-100px)",
}

const illust2 = {
    height: "90px",


    // gridArea: "overlap",
    // alignSelf: "center",
    // justifySelf: "center",
    //transform: "translate(-10px,20px)",
}

const illust3 = {
    height: "160px",


    // gridArea: "overlap",
    // alignSelf: "center",
    // justifySelf: "center",
    //transform: "translate(0,190px)",
}

const Illust_3 = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            style={container}>
            <motion.img
                animate={{ y: 60, x: 28, rotate: [5, 5, -5, 0] }}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
                style={illust1} src="/illust_3_3.svg" alt="illust 3 3" />
            <motion.img
                animate={{ y: 45, x: 10, rotate: [0, 10, -15], z: 1 }}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
                style={illust2} src="/illust_3_2.svg" alt="illust 3 2" />
            <motion.img
                animate={{ rotate: [0, 2, -2, 0], z: 0 }}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
                style={illust3} src="/illust_3_1.svg" alt="illust 3 1" />
        </motion.div>
    );
}

export default Illust_3;
