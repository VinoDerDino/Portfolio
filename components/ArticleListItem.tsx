import Link from "next/link";
import type { ArticleItem } from "../types";
import ArticleTile from "./article";


interface Props {
    category: string
    articles: ArticleItem[]
}

const ArticleItemList = ({category, articles}: Props) => {
    return (
        <div className="flex flex-col gap-5">
            <h2 className="font-cormorantGaramond text-4xl"> {category} </h2>
            <div className="flex flex-col gap-2.5 font-poppins text-lg">
                {articles.map((article, key) => (
                   <ArticleTile key={key} {...article}/>
                ))}
            </div>
        </div>
    );
}

export default ArticleItemList