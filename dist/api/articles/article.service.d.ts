import { Article } from './article.schema';
import { Model, Types } from 'mongoose';
import { CreateArticleDto } from './create-article.dto';
export declare class ArticleService {
    private articleModel;
    constructor(articleModel: Model<Article>);
    test(): string;
    findAll(): Promise<Article[]>;
    findOne(id: string): Promise<Article>;
    create(createArticleDto: CreateArticleDto): Promise<import("mongoose").Document<unknown, {}, Article> & Article & {
        _id: Types.ObjectId;
    }>;
    update(id: string, createArticleDto: CreateArticleDto): Promise<import("mongoose").Document<unknown, {}, Article> & Article & {
        _id: Types.ObjectId;
    }>;
    delete(id: string): Promise<import("mongoose").Document<unknown, {}, Article> & Article & {
        _id: Types.ObjectId;
    }>;
    search(title: string): Promise<Article[]>;
    updateStatus(id: string, createArticleDto: CreateArticleDto): Promise<import("mongoose").Document<unknown, {}, Article> & Article & {
        _id: Types.ObjectId;
    }>;
}
