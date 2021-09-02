import asyncHandler from "express-async-handler";
import NewsServices from "../services/newsServices.js";

export const createNews = asyncHandler(async (req, res) => {
  const news = await NewsServices.create(req.body);
  return res.send(news);
});

export const getOneNews = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const news = await NewsServices.findOneNewsById(id);
  return res.send(news);
});

export const getAllNews = asyncHandler(async (req, res) => {
  const news = await NewsServices.findAllNews(req.body);
  return res.send(news);
});

export const deleteNewsById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  return res.send(await NewsServices.delete(id));
});

export const last3News = asyncHandler(async (req, res) => {
  const news = await NewsServices.last3News();
  return res.send(news);
});
