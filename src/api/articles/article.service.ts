import { Injectable } from '@nestjs/common';
import { Article } from './article.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateArticleDto } from './create-article.dto';

@Injectable()
export class ArticleService {
    constructor(@InjectModel(Article.name) private articleModel: Model<Article>) {}

    test(): string {
        return 'article route testing';
    }

    async findAll(): Promise<Article[]> {
        return await this.articleModel.find().exec();
    }

    async findOne(id: string): Promise<Article> {
        if (!Types.ObjectId.isValid(id)) {
            throw new Error('Invalid article ID');
        }
        return await this.articleModel.findById(id).exec();
    }

    async create(createArticleDto: CreateArticleDto) {
        return await this.articleModel.create(createArticleDto);
    }

    async update(id: string, createArticleDto: CreateArticleDto) {
        if (!Types.ObjectId.isValid(id)) {
            throw new Error('Invalid article ID');
        }
        return await this.articleModel.findByIdAndUpdate(id, createArticleDto).exec();
    }

    async delete(id: string) {
        if (!Types.ObjectId.isValid(id)) {
            throw new Error('Invalid article ID');
        }
        return await this.articleModel.findByIdAndDelete(id).exec();
    }

    async search(title: string): Promise<Article[]> {
        if (!title) {
            return [];
        }
        const searchPattern = new RegExp(title, 'i'); // 'i' for case-insensitive matching
        return await this.articleModel.find({ title: { $regex: searchPattern } }).exec();
    }

    async updateStatus(id: string, createArticleDto: CreateArticleDto) {
        // Validate ID format
        if (!Types.ObjectId.isValid(id)) {
            throw new Error('Invalid article ID');
        }

        const article = await this.articleModel.findOne({ _id: id }).exec();

        if (article) {
            // Toggle status
            const newStatus = article.status === '0' ? 1 : 0;

            // Prepare updated data with the new status
            const data = {
                ...createArticleDto,
                status: newStatus,
            };

            return await this.articleModel.findByIdAndUpdate(id, data).exec();
        } else {
            throw new Error('Article not found');
        }
    }
}
