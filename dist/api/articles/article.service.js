"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const article_schema_1 = require("./article.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ArticleService = class ArticleService {
    constructor(articleModel) {
        this.articleModel = articleModel;
    }
    test() {
        return 'article route testing';
    }
    async findAll() {
        return await this.articleModel.find().exec();
    }
    async findOne(id) {
        if (!mongoose_2.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid article ID');
        }
        return await this.articleModel.findById(id).exec();
    }
    async create(createArticleDto) {
        return await this.articleModel.create(createArticleDto);
    }
    async update(id, createArticleDto) {
        if (!mongoose_2.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid article ID');
        }
        return await this.articleModel.findByIdAndUpdate(id, createArticleDto).exec();
    }
    async delete(id) {
        if (!mongoose_2.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid article ID');
        }
        return await this.articleModel.findByIdAndDelete(id).exec();
    }
    async search(title) {
        if (!title) {
            return [];
        }
        const searchPattern = new RegExp(title, 'i');
        return await this.articleModel.find({ title: { $regex: searchPattern } }).exec();
    }
    async updateStatus(id, createArticleDto) {
        if (!mongoose_2.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid article ID');
        }
        const article = await this.articleModel.findOne({ _id: id }).exec();
        if (article) {
            const newStatus = article.status === '0' ? 1 : 0;
            const data = {
                ...createArticleDto,
                status: newStatus,
            };
            return await this.articleModel.findByIdAndUpdate(id, data).exec();
        }
        else {
            throw new Error('Article not found');
        }
    }
};
exports.ArticleService = ArticleService;
exports.ArticleService = ArticleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(article_schema_1.Article.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ArticleService);
//# sourceMappingURL=article.service.js.map