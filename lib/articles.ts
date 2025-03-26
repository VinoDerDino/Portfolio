import fs from "fs"
import matter  from 'gray-matter'
import path from "path"
import moment from "moment"
import { remark } from "remark"
import html from "remark-html"

import type { ArticleItem } from "../types"

const articlesDirectory = path.join(process.cwd(), "articles")

const getSortedArticles = () : ArticleItem[] => {
    const fileNames = fs.readdirSync(articlesDirectory);

    const allArticleData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "")

        const fullPath = path.join(articlesDirectory, fileName)
        const fileContent = fs.readFileSync(fullPath, "utf-8")

        const matterResult = matter(fileContent)

        return {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            category: matterResult.data.category,
        }
    })

    return allArticleData.sort((a, b) => {
        const format = "DD-MM-YYYY"
        const dateOne = moment(a.date, format)
        const dateTwo = moment(b.date, format)

        if(dateOne.isBefore(dateTwo)) {
            return -1
        } else if(dateTwo.isAfter(dateOne)) {
            return 1
        } else {
            return 0
        }
    })
}

export const getLastArticles = () : Record<string, ArticleItem> => {
    const sortedArticles = getSortedArticles()
    const categorisedArticles: Record<string, ArticleItem> = {}

    sortedArticles.forEach((article) => {
        if(!categorisedArticles[article.category]) {
            categorisedArticles[article.category] = article
        } else if(moment(categorisedArticles[article.category].date, "DD-MM-YYYY").isBefore(moment(article.date, "DD-MM-YYYY"))) {
            categorisedArticles[article.category] = article
        }
    })

    return categorisedArticles
}

export const getLatestArticle = (): ArticleItem | null => {
    const sortedArticles = getSortedArticles();
    return sortedArticles.length > 0 ? sortedArticles[sortedArticles.length - 1] : null;
};

export const getCategorisedArticles = () : Record<string, ArticleItem[]> => {
    const sortedArticles = getSortedArticles()
    const categorisedArticles: Record<string, ArticleItem[]> = {}

    sortedArticles.forEach((article) => {
        if(!categorisedArticles[article.category]) {
            categorisedArticles[article.category] = []
        }
        categorisedArticles[article.category].push(article)
    })

    return categorisedArticles
}

export const getArticleData = async (id: string) => {
    const fullPath = path.join(articlesDirectory, `${id}.md`)

    const fileContents = fs.readFileSync(fullPath, "utf-8")

    const matterResult = matter(fileContents)

    const processesContent = await remark()
    .use(html)
    .process(matterResult.content)

    const contentHTML = processesContent.toString()

    return {
        id,
        contentHTML,
        title: matterResult.data.title,
        category: matterResult.data.category,
        date: moment(matterResult.data.date, "DD-MM-YYYY").format("DD.MM.YYYY"),
    }
}