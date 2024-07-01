import Stats  from "../model/statsModel.js";
import os  from "os-utils";

const getCpuUsage = () => {
    return new Promise(resolve => {
        os.cpuUsage(cpuPercent => resolve(cpuPercent));
    });
};

export const create = async (req, res) => {
    try {
        const cpuPercent = await getCpuUsage();
        const memPercent = (os.totalmem() - os.freemem()) / os.totalmem() * 100;
        const statsData = new Stats({
            cpu: cpuPercent * 100,
            memory: memPercent,
            timestamp: Date.now()
        });
        
        const savedStats = await statsData.save();
        res.status(200).json(savedStats);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};



export const fetch = async (req, res) => {
    try {
        const data = await Stats.find();
        if(data.length === 0 ){
            return res.status(404).json({message : "data not Found."})
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}