import { getAll } from "../api/blog";
import Footer from "./Footer";
import Header from "./Header";

const Blog = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
    ${Header.render()}
        <h1 class="text-center ">Blog</h1>
            ${data.map((item) => /* html */`
            <div class="nd1">
                        <img src="${item.image}" alt="rectangle1">
                        <p class="fs-4"><a href="/blogs-detail/${item.id}">${item.title}</a></p>
                        <p class="mt-2 ">${item.datetime}</p>
                        <div class="text1"><p>${item.desc}</p></div>
                        <hr>
                        <br>
            </div>
                `).join("")}
            
    ${Footer.render()}
        `;
    },
};
export default Blog;