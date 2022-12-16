import Creators from "../models/CreatorModel.js";
import User from '../models/UserModel.js';
import { Op } from "sequelize";

export const getCreators = async (req, res) =>{
    try {
        let response;
        if(req.role === "admin"){
            response = await Creators.findAll({
                attributes: ['uuid' ,'title', 'link', 'creators'],
                include:[{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        } else{
            response = await Creators.findAll({
                attributes: ['uuid' ,'title', 'link', 'creators'],
                where:{
                    userId: req.userId
                },
                include:[{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getCreatorById = async (req, res) =>{
    try {
        const creator = await Creators.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!creator) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Creators.findOne({
                attributes: ['uuid' ,'title', 'link', 'creators'],
                where:{
                    id: req.params.id
                },
                include:[{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        } else{
            response = await Creators.findOne({
                attributes: ['uuid' ,'title', 'link', 'creators'],
                where:{
                    [Op.and]:[{id: creator.id}, {userId: req.userId}]
                },
                include:[{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createCreator = async (req, res) =>{
    const {title, link, creators} = req.body;
    try {
        await Creators.create({
            title: title,
            link: link,
            creators: creators,
            userId: req.userId
        });
        res.status(201).json({msg: "Creator Created  Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateCreator = (req, res) =>{
    
}

export const deleteCreator = (req, res) =>{
    
}