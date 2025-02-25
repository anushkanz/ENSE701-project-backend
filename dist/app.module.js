"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const book_module_1 = require("./api/books/book.module");
const article_module_1 = require("./api/articles/article.module");
const user_module_1 = require("./api/users/user.module");
const dotenv = require("dotenv");
dotenv.config();
const MONGOOSE_USERNAME = process.env.MONGOOSE_USERNAME;
const MONGOOSE_PASSWORD = process.env.MONGOOSE_PASSWORD;
const MONGOOSE_CLUSTER = process.env.MONGOOSE_CLUSTER;
const MONGOOSE_DB = process.env.MONGOOSE_DB;
const DB_URI = `mongodb+srv://${MONGOOSE_USERNAME}:${MONGOOSE_PASSWORD}@${MONGOOSE_CLUSTER}/${MONGOOSE_DB}?retryWrites=true&w=majority&appName=ENSE701Cluster`;
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(DB_URI),
            book_module_1.BookModule,
            article_module_1.ArticleModule,
            user_module_1.UserModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map