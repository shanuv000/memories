import PostMessage from "../models/postMessage.js";
import express from "express";
import mongoose from "mongoose";
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(500).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  console.log("post", post);
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
// export const createPost = async (req, res) => {
//   const { title, message, selectedFile, creator, tags } = req.body;

//   const newPostMessage = new PostMessage({
//     title,
//     message,
//     selectedFile,
//     creator,
//     tags,
//   });

//   try {
//     await newPostMessage.save();

//     res.status(201).json(newPostMessage);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };
